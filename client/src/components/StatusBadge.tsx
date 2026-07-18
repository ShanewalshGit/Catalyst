import type { NodeStatus } from "../hooks/useNodeStatus";

interface Props {
  x: number;
  y: number;
  status: NodeStatus | undefined;
}

const FILL: Record<Exclude<NodeStatus, "unvisited">, string> = {
  visited: "#14110D",
  cleared: "#A9803F",
  looted: "#B8923E",
};

const STROKE: Record<Exclude<NodeStatus, "unvisited">, string> = {
  visited: "#EDE8DC",
  cleared: "#A9803F",
  looted: "#B8923E",
};

export function StatusBadge({ x, y, status }: Props) {
  if (!status || status === "unvisited") return null;

  return (
    <g transform={`translate(${x} ${y})`} pointerEvents="none">
      <circle r={6.5} fill={FILL[status]} stroke={STROKE[status]} strokeWidth={1.2} />
      {status === "visited" ? (
        <circle r={2} fill="none" stroke="#EDE8DC" strokeWidth={1} />
      ) : (
        <path
          d="M-2.6,0.2 L-0.6,2.2 L2.8,-2.4"
          fill="none"
          stroke={status === "cleared" ? "#171410" : "#1A1410"}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </g>
  );
}
