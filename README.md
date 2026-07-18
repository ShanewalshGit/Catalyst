# The Catalyst — interactive tower map

A Vite/React/TypeScript client and an Express/TypeScript server in one
deployable app. The server serves the built client and a small `/api/state`
API backed by Postgres, which tracks per-room visited/cleared/looted status
across sessions.

## Local development

Requires Node 20+ and a Postgres instance (local or Docker).

```
npm install
DATABASE_URL="postgres://postgres:postgres@localhost:5432/catalyst" npm run dev:server
npm run dev:client   # in a second terminal — proxies /api to the server on :3000
```

Client dev server runs on http://localhost:5173.

## Production build

```
npm run build   # builds client/dist and server/dist
npm run start   # runs the built server, which also serves client/dist
```

The server listens on `PORT` (default 3000) and requires `DATABASE_URL`.

## Deploying to Railway

1. Push this repo to GitHub and create a new Railway project from it (or run
   `railway up` from this directory with the Railway CLI).
2. Add a **Postgres** plugin to the project — Railway injects `DATABASE_URL`
   into the app service automatically.
3. Railway picks up `railway.json` for the build/start commands. No other
   config is needed; `PORT` is supplied by Railway at runtime.
