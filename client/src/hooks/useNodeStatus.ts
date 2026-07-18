import { useCallback, useEffect, useState } from "react";

export type NodeStatus = "unvisited" | "visited" | "cleared" | "looted";

export const STATUS_ORDER: NodeStatus[] = ["unvisited", "visited", "cleared", "looted"];

export const STATUS_LABEL: Record<NodeStatus, string> = {
  unvisited: "Unvisited",
  visited: "Visited",
  cleared: "Cleared",
  looted: "Looted",
};

export function useNodeStatus() {
  const [statusMap, setStatusMap] = useState<Record<string, NodeStatus>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/state")
      .then((r) => r.json())
      .then((data: Record<string, NodeStatus>) => setStatusMap(data))
      .catch((err) => console.error("Failed to load session state", err))
      .finally(() => setLoaded(true));
  }, []);

  const setStatus = useCallback((nodeId: string, status: NodeStatus) => {
    setStatusMap((prev) => {
      const next = { ...prev };
      if (status === "unvisited") {
        delete next[nodeId];
      } else {
        next[nodeId] = status;
      }
      return next;
    });

    fetch(`/api/state/${encodeURIComponent(nodeId)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).catch((err) => console.error("Failed to save node status", err));
  }, []);

  return { statusMap, setStatus, loaded };
}
