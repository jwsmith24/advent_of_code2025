import fs from "fs";
const day = process.argv[2];
if (!day) throw new Error("Must specify a day for new directory");

const folder = `src/day${day}`;
fs.mkdirSync(folder);

fs.writeFileSync(`${folder}/index.ts`, `console.log("Day ${day}");`);
console.log(`Created directory: ${folder}`);