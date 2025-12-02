import {readFileSync} from "fs";
console.log("Day 2!");

const data = readFileSync("./resources/day-2-data.txt", "utf-8");
const lines = data.trim().split(/,/);

console.log(lines);
console.log(`processed data: ${lines.length} lines`);

let sumInvalidIds = 0;

for (const line of lines) {
    // in each range look for invalid ids
    // (repeating numbers)
    const [start, end] = line.split(/-/);
    const startIndex = Number(start);
    const endIndex = Number(end);

    for (let i = startIndex; i < endIndex; i++) {
        const currentNumber = i.toString();
        const front = currentNumber.substring(0, currentNumber.length / 2);
        const back = currentNumber.substring(currentNumber.length / 2);

        if (front === back) {
            console.log(`Found invalid id: ${currentNumber}`)
            sumInvalidIds += i;
        }
    }

}

console.log(`Sum of invalid ids: ${sumInvalidIds}`);