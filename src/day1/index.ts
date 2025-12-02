import {readFileSync} from "fs";

console.log("Day 1!");

const data = readFileSync("resources/day-1-data.txt", "utf-8");
const lines = data.trim().split(/\r?\n/);

console.log(`processed file, total lines: ${lines.length}`);

let currentPosition = 50;
let zeroCount = 0;

lines.forEach((line) => {
    const direction = line.slice(0,1);
    const magnitude = line.slice(1);

    if (direction === 'R') {
        currentPosition = (currentPosition + Number(magnitude)) % 100;
    } else if (direction === 'L') {
        currentPosition = (currentPosition - Number(magnitude) + 100) % 100 // ensure positive before applying modulus
    }

    if (currentPosition === 0) {
        zeroCount++;
    }

});

console.log(`Zero count: ${zeroCount}`);
