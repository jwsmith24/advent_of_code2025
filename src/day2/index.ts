import {readFileSync} from "fs";
console.log("Day 2!");

const data = readFileSync("resources/day-2-data.txt", "utf-8");
const lines = data.trim().split(/,/);

console.log(lines);
console.log(`processed data: ${lines.length} lines`);


for (const line of lines) {
    // in each range look for invalid ids
    // (repeating numbers)

    // add the sum of all the invalid ids
}