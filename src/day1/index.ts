import {readFileSync} from "fs";

console.log("Day 1!");

const data = readFileSync("resources/day-1-data.txt", "utf-8");
const lines = data.trim().split(/\r?\n/);

console.log(`processed file, total lines: ${lines.length}`);

let currentPosition = 50;
let zeroPasses = 0;

lines.forEach((line) => {
    const direction = line.slice(0,1);
    const magnitude = Number(line.slice(1));


    if (direction === 'R') {
        const rawValue = currentPosition + magnitude;
        zeroPasses += Math.floor(rawValue / 100);
        currentPosition = (currentPosition + magnitude) % 100;
    } else if (direction === 'L') {
        const tempPosition = currentPosition % 100;
        const firstZeroIndex = tempPosition === 0 ? 100 : tempPosition;
        if (magnitude >= firstZeroIndex) {
            zeroPasses += 1 + Math.floor((magnitude - firstZeroIndex) / 100);
        }
        currentPosition = (((currentPosition - magnitude) % 100) + 100) % 100 // ensure positive before applying modulus

    }
});

console.log(`Zero passes: ${zeroPasses}`)


