import { createContext, useContext } from "react";
import type { NodeStatus } from "../hooks/useNodeStatus";

export interface MapContextValue {
  hoveredId: string | null;
  pinnedId: string | null;
  setHovered: (id: string | null) => void;
  setPinned: (id: string | null) => void;
  pointer: { x: number; y: number };
  setPointer: (x: number, y: number) => void;
  statusMap: Record<string, NodeStatus>;
  setStatus: (id: string, status: NodeStatus) => void;
}

export const MapContext = createContext<MapContextValue | null>(null);

export function useMapContext(): MapContextValue {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMapContext must be used within MapContext.Provider");
  return ctx;
}
