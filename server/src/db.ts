import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn(
    "DATABASE_URL is not set — falling back to a local Postgres connection. " +
      "Set DATABASE_URL (e.g. via Railway's Postgres plugin) for real deployments."
  );
}

const isLocalDb = !connectionString || /localhost|127\.0\.0\.1/.test(connectionString);

export const pool = new Pool({
  connectionString: connectionString ?? "postgres://postgres:postgres@localhost:5432/catalyst",
  ssl: isLocalDb ? undefined : { rejectUnauthorized: false },
});

export async function migrate(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS node_state (
      node_id TEXT PRIMARY KEY,
      status TEXT NOT NULL DEFAULT 'unvisited',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `);
}
