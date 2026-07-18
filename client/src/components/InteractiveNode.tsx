import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useMapContext } from "../context/MapContext";
import { NODE_MAP } from "../data/nodes";
import { StatusBadge } from "./StatusBadge";

interface Props {
  id: string;
  badge: { x: number; y: number };
  pulse?: boolean;
  children: ReactNode;
}

export function InteractiveNode({ id, badge, pulse, children }: Props) {
  const { hoveredId, pinnedId, setHovered, setPinned, setPointer, statusMap } = useMapContext();

  const lit = hoveredId === id || pinnedId === id;
  const status = statusMap[id];
  const statusClass = status && status !== "unvisited" ? ` status-${status}` : "";

  const activate = (x: number, y: number) => {
    if (pinnedId === id) {
      setPinned(null);
      setHovered(null);
      return;
    }
    setPinned(id);
    setHovered(id);
    setPointer(x, y);
  };

  const handleEnter = (e: MouseEvent) => {
    if (pinnedId) return;
    setHovered(id);
    setPointer(e.clientX, e.clientY);
  };
  const handleMove = (e: MouseEvent) => {
    if (pinnedId) return;
    setPointer(e.clientX, e.clientY);
  };
  const handleLeave = () => {
    if (pinnedId) return;
    setHovered(null);
  };
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    activate(e.clientX, e.clientY);
  };
  const handleKeyDown = (e: KeyboardEvent<SVGGElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    activate(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  return (
    <g
      id={id}
      className={`node${pulse ? " enc-pulse" : ""}${lit ? " lit" : ""}${statusClass}`}
      tabIndex={0}
      role="button"
      aria-label={NODE_MAP[id]?.name}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
      <StatusBadge x={badge.x} y={badge.y} status={status} />
    </g>
  );
}
