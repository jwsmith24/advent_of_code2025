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
        let chunkSize = currentNumber.length / 2;

        let front = currentNumber.substring(0, chunkSize);
        let back = currentNumber.substring(chunkSize);

        while (currentNumber.length % chunkSize === 0) {
            console.log(`chunk size: ${chunkSize}`)
            chunkSize -= 1;
        }
        front = currentNumber.substring(0, chunkSize);
        back = currentNumber.substring(chunkSize);

        if (front === back) {
            sumInvalidIds += i;
        }


    }

}

console.log(`Sum of invalid ids: ${sumInvalidIds}`);
