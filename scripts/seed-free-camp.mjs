import fs from "fs";
import mongoose from "mongoose";
import FreeCamp from "../models/FreeCamp.js";

for (const rawLine of fs.readFileSync(new URL("../.env", import.meta.url), "utf8").split("\n")) {
  const line = rawLine.trim();
  const match = line.match(/^([A-Z_]+)=(.*)$/);
  if (match) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
}
console.log("MONGODB_URI loaded:", Boolean(process.env.MONGODB_URI));

await mongoose.connect(process.env.MONGODB_URI);

const existing = await FreeCamp.findOne({
  name: "Upcoming OPD / Free Cardiac Camp",
  venue: "Behampore, Murshidabad",
});

if (existing) {
  console.log("Camp already exists, skipping seed.");
} else {
  await FreeCamp.create({
    badge: "Cardiac OPD",
    name: "Upcoming OPD / Free Cardiac Camp",
    venue: "Behampore, Murshidabad",
    date: new Date("2026-08-14"),
    note: "Please call",
    phone: "98310 00191",
    published: true,
  });
  console.log("Seeded free camp.");
}

await mongoose.disconnect();
