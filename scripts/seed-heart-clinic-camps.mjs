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

const camps = [
  {
    badge: "Cardiac OPD",
    name: "Free Heart Clinic — Kalna",
    venue: "Lions Club of Kalna, Vidyabagish Para, Kalna, Purba Bardhaman 713409",
    date: new Date("2026-09-05"),
    note: "10:00 AM – 1:00 PM. Bring old reports if you have them.",
    phone: "70444 99827 / 98310 00191",
    published: true,
  },
  {
    badge: "Cardiac OPD",
    name: "Free Heart Clinic — Nabadwip",
    venue: "Shree Chaitanya Medical Centre, Chandpur, Bidyanagar, Nabadwip, Nadia 741319",
    date: new Date("2026-09-05"),
    note: "2:00 PM – 5:00 PM. Bring old reports if you have them.",
    phone: "70444 99827 / 98310 00191",
    published: true,
  },
  {
    badge: "Cardiac OPD",
    name: "Free Heart Clinic — Sithir More",
    venue: "Neelkuthi Medical Complex, 48/2M BT Road, Kolkata 700050",
    date: new Date("2026-09-08"),
    note: "From 10:00 AM. Bring old reports if you have them.",
    phone: "90883 68868 / 98310 00191",
    published: true,
  },
  {
    badge: "Cardiac OPD",
    name: "Free Heart Clinic — Barasat",
    venue: "Millennium Diagnostic Centre, Binapani Apartment 2073, Krishnanagar Road, Noapara, Barasat 700124",
    date: new Date("2026-09-08"),
    note: "From 1:00 PM. Bring old reports if you have them.",
    phone: "90070 00505 / 98310 00191",
    published: true,
  },
];

for (const camp of camps) {
  const existing = await FreeCamp.findOne({ name: camp.name, venue: camp.venue, date: camp.date });
  if (existing) {
    console.log(`Already exists, skipping: ${camp.name}`);
    continue;
  }
  await FreeCamp.create(camp);
  console.log(`Seeded: ${camp.name}`);
}

await mongoose.disconnect();
