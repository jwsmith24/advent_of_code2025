import {readFileSync} from "fs";
console.log("Day 3!");

const data = readFileSync("./resources/day-3-data.txt", "utf-8");
const lines = data.trim().split(/\n/);

console.log(lines);
console.log(`processed data: ${lines.length} lines`);

let totalJoltage = 0;

for (const line of lines) {
    let max = 0;
    for (let i = 0; i < line.length - 1; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const voltage = Number(line.charAt(i) + line.charAt(j));
            if (voltage > max) {
                console.log(`new max! ${voltage}`);
                max = voltage;
            }
        }
    }
    totalJoltage += max;
}

console.log(`sum: ${totalJoltage}`);