import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import { migrate } from "./db.js";
import { stateRouter } from "./state.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(__dirname, "../../client/dist");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/state", stateRouter);

app.use(express.static(clientDist));
app.get(/^(?!\/api\/).*/, (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const port = Number(process.env.PORT) || 3000;

migrate()
  .then(() => {
    app.listen(port, () => {
      console.log(`Catalyst server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to run database migration", err);
    process.exit(1);
  });
