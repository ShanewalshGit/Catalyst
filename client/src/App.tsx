import { useCallback, useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { MAP_WIDTH } from "./mapLayout";
import { MapContext, type MapContextValue } from "./context/MapContext";
import { TowerMap } from "./components/TowerMap";
import { Tooltip } from "./components/Tooltip";
import { SearchBar } from "./components/SearchBar";
import { Cartouche } from "./components/Cartouche";
import { Legend } from "./components/Legend";
import { useNodeStatus } from "./hooks/useNodeStatus";
import "./App.css";

function App() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [pointer, setPointerState] = useState({ x: 0, y: 0 });
  const { statusMap, setStatus } = useNodeStatus();
  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);

  const setPointer = useCallback((x: number, y: number) => setPointerState({ x, y }), []);

  const dismiss = useCallback(() => {
    setPinnedId(null);
    setHoveredId(null);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dismiss]);

  const centerMap = useCallback((animationTime = 0) => {
    const ref = transformRef.current;
    const wrapper = ref?.instance.wrapperComponent;
    if (!ref || !wrapper) return;
    const x = (wrapper.clientWidth - MAP_WIDTH) / 2;
    // y=0 pins the map to the top of the canvas; limitToBounds (default on)
    // clamps any positive y back to 0 anyway since the map is taller than
    // the viewport, and the SVG already has its own headroom above the peak.
    ref.setTransform(x, 0, 1, animationTime);
  }, []);

  useEffect(() => {
    const onResize = () => centerMap();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [centerMap]);

  const goToNode = useCallback((nodeId: string) => {
    transformRef.current?.zoomToElement(nodeId, 1.4, 400);
    setPinnedId(nodeId);
    setHoveredId(nodeId);
    const el = document.getElementById(nodeId);
    if (el) {
      const rect = el.getBoundingClientRect();
      setPointerState({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, []);

  const ctx: MapContextValue = {
    hoveredId,
    pinnedId,
    setHovered: setHoveredId,
    setPinned: setPinnedId,
    pointer,
    setPointer,
    statusMap,
    setStatus,
  };

  return (
    <MapContext.Provider value={ctx}>
      <header>
        <div className="h-title">
          THE <em>CATALYST</em>
        </div>
        <div className="h-div" />
        <div className="h-stamp">Structural Survey · Dakare Bay</div>
        <div className="h-div" />
        <div className="h-stamp red">Corvanite Property</div>
        <div className="h-right">
          <SearchBar onSelect={goToNode} />
        </div>
      </header>

      <div className="canvas" onClick={dismiss}>
        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          minScale={0.4}
          maxScale={4}
          wheel={{ step: 0.15 }}
          doubleClick={{ disabled: true }}
          onInit={() => requestAnimationFrame(() => centerMap())}
        >
          {({ zoomIn, zoomOut }) => (
            <>
              <div className="zoom-controls" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={() => zoomIn()} aria-label="Zoom in">+</button>
                <button type="button" onClick={() => zoomOut()} aria-label="Zoom out">−</button>
                <button type="button" onClick={() => centerMap(300)} aria-label="Reset view">⤾</button>
              </div>
              <TransformComponent wrapperClass="tf-wrapper" contentClass="tf-content">
                <TowerMap />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>

      <Legend />
      <Cartouche />
      <Tooltip />
    </MapContext.Provider>
  );
}

export default App;
