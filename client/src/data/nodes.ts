export type NodeCategory =
  | "exterior"
  | "room"
  | "tech"
  | "encounter"
  | "secret"
  | "villain";

export interface NodeMeta {
  id: string;
  name: string;
  floor: string;
  desc: string;
  category: NodeCategory;
}

export const NODES: NodeMeta[] = [
  {
    id: "n-reception",
    name: "Reception Hall",
    floor: "Floor 1 — Vestibule",
    desc: "The first face of the Forum. Clerks, credentials, and catalogues of Vel's history.",
    category: "room",
  },
  {
    id: "n-dorm",
    name: "Initiate Dormitories",
    floor: "Floor 1 — Vestibule",
    desc: "Collective bunks and living quarters where Corvanites philosophise and imagine their perfect future.",
    category: "room",
  },
  {
    id: "n-overseer-1",
    name: "Kras Stellin",
    floor: "Floor 1 — Vestibule",
    desc: "The Scribe",
    category: "encounter",
  },
  {
    id: "n-armoury",
    name: "Armoury",
    floor: "Floor 2 — Barracks",
    desc: "Storage of Lithean-charged weapons, suit components and equipment. Overseen by a vendor who knows his wares.",
    category: "room",
  },
  {
    id: "n-theatre",
    name: "Briefing Theatre",
    floor: "Floor 2 — Barracks",
    desc: "A callosal amphitheatre for planning and organising large scale Forum activity.",
    category: "room",
  },
  {
    id: "n-veteran",
    name: "Veteran Quarters",
    floor: "Floor 2 — Barracks",
    desc: "Personalised living spaces for higher ranked Corvanites such as Ramming, Stannik or Hemway. ",
    category: "room",
  },
  {
    id: "n-sergeant",
    name: "Codron Vorhaus",
    floor: "Floor 2 — Barracks",
    desc: "The Face",
    category: "encounter",
  },
  {
    id: "n-cloak",
    name: "Occlusion Engine",
    floor: "Floor 3 — Production",
    desc: "A pulsating engine room of unknown operation. Whatever it is doing, it is the reason this island is difficult to find.",
    category: "tech",
  },
  {
    id: "n-workshop",
    name: "Lithean Workshop",
    floor: "Floor 3 — Production",
    desc: "A macabre engineering centre where all of the Forums innovations are devised.",
    category: "room",
  },
  {
    id: "n-overseer-3",
    name: "Lycander",
    floor: "Floor 3 — Production",
    desc: "The Mechanism",
    category: "encounter",
  },
  {
    id: "n-comms",
    name: "Communications Web",
    floor: "Floor 4 — Operations",
    desc: "The digital web of the Corvanites, made tangible and live to keep track of Corvanites across Vel.",
    category: "room",
  },
  {
    id: "n-docking",
    name: "Euclid Docking",
    floor: "Floor 4 — Operations",
    desc: "Railed docking bay for Euclid vessels, dozens of ships hang like bats in slumber.",
    category: "room",
  },
  {
    id: "n-overseer-4",
    name: "Madrinne Decoste",
    floor: "Floor 4 — Operations",
    desc: "The Eyes",
    category: "encounter",
  },
  {
    id: "n-trace",
    name: "Hall of the Trace Evident",
    floor: "Floor 5 — Reliquary",
    desc: "History as Corvanites believe it happened. Meticulous and certain.",
    category: "room",
  },
  {
    id: "n-keeper",
    name: "Canon",
    floor: "Floor 5 — Reliquary",
    desc: "The Voice",
    category: "encounter",
  },
  {
    id: "n-strand",
    name: "Strand Divider",
    floor: "Floor 6 — THRESHOLD",
    desc: "A physical map of possibility and calculations still being written. Analysts work its cells 24/7.",
    category: "room",
  },
  {
    id: "n-overseer-6",
    name: "Efflux",
    floor: "Floor 6 — THRESHOLD",
    desc: "The Odds",
    category: "encounter",
  },
  {
    id: "n-precipice",
    name: "Executors Precipice",
    floor: "Floor 7 — The CONTROL",
    desc: "The device that could rewrite the world, and the man that works it. Diodes are fed to it as The Executor quests through Vel's futures for the right one.",
    category: "villain",
  },
];

export const NODE_MAP: Record<string, NodeMeta> = Object.fromEntries(
  NODES.map((n) => [n.id, n])
);
