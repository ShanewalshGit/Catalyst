import { Router } from "express";
import { pool } from "./db.js";

export const VALID_STATUSES = ["unvisited", "visited", "cleared", "looted"] as const;
export type NodeStatus = (typeof VALID_STATUSES)[number];

export const stateRouter = Router();

stateRouter.get("/", async (_req, res) => {
  const result = await pool.query<{ node_id: string; status: NodeStatus }>(
    "SELECT node_id, status FROM node_state WHERE status != 'unvisited'"
  );
  const state: Record<string, NodeStatus> = {};
  for (const row of result.rows) {
    state[row.node_id] = row.status;
  }
  res.json(state);
});

stateRouter.put("/:nodeId", async (req, res) => {
  const { nodeId } = req.params;
  const { status } = req.body as { status?: string };

  if (!status || !VALID_STATUSES.includes(status as NodeStatus)) {
    res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(", ")}` });
    return;
  }

  if (status === "unvisited") {
    await pool.query("DELETE FROM node_state WHERE node_id = $1", [nodeId]);
  } else {
    await pool.query(
      `INSERT INTO node_state (node_id, status, updated_at)
       VALUES ($1, $2, now())
       ON CONFLICT (node_id) DO UPDATE SET status = $2, updated_at = now()`,
      [nodeId, status]
    );
  }

  res.json({ nodeId, status });
});
