import { useMapContext } from "../context/MapContext";
import { NODE_MAP, type NodeCategory } from "../data/nodes";
import { STATUS_LABEL, STATUS_ORDER, type NodeStatus } from "../hooks/useNodeStatus";

const TAG_LABEL: Record<NodeCategory, string> = {
  exterior: "Field Note",
  room: "Field Note",
  tech: "Technical Note",
  encounter: "Threat Assessment",
  secret: "Unconfirmed",
  villain: "Priority Target",
};

export function Tooltip() {
  const { hoveredId, pinnedId, pointer, setPinned, setHovered, statusMap, setStatus } =
    useMapContext();

  const activeId = pinnedId ?? hoveredId;
  const isPinned = Boolean(pinnedId);
  if (!activeId) return null;

  const node = NODE_MAP[activeId];
  if (!node) return null;

  const tw = 250;
  const th = isPinned ? 180 : 130;
  const W = window.innerWidth;
  const H = window.innerHeight;
  let left = pointer.x + 16;
  let top = pointer.y + 16;
  if (left + tw > W - 10) left = pointer.x - tw - 16;
  if (top + th > H - 10) top = pointer.y - th - 16;

  const currentStatus: NodeStatus = statusMap[activeId] ?? "unvisited";

  const close = () => {
    setPinned(null);
    setHovered(null);
  };

  return (
    <div
      className="tip show"
      style={{ left, top, pointerEvents: isPinned ? "auto" : "none" }}
    >
      <div className="tip-inner">
        <div className="tip-pin" />
        <div className="tip-tag">{TAG_LABEL[node.category]}</div>
        <div className="tip-name">{node.name}</div>
        <div className="tip-desc">{node.desc}</div>
        <div className="tip-floor">{node.floor}</div>
        {isPinned && (
          <div className="tip-status">
            <span className="tip-status-label">Status</span>
            <select
              value={currentStatus}
              onChange={(e) => setStatus(activeId, e.target.value as NodeStatus)}
              onClick={(e) => e.stopPropagation()}
            >
              {STATUS_ORDER.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="tip-close"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
