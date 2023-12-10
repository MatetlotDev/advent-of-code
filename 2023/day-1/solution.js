import fs from "fs";

fs.readFile("./2023/day-1/input.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // long version
  // const text = data.toString();

  // const arrInText = text.split("\n");

  // const onlyNums = arrInText.map((p) => p.replace(/[^0-9]/g, ""));

  // const num1and2 = onlyNums.map(
  //   (n) => `${n.slice(0, 1)}${n.slice(n.length - 1, n.length)}`
  // );

  // const sum = num1and2.reduce((a, b) => Number(b) + Number(a), 0);

  // short version
  const sum = data
    .toString()
    .split("\n")
    .map((p) => p.replace(/[^0-9]/g, ""))
    .map((n) => `${n.slice(0, 1)}${n.slice(n.length - 1, n.length)}`)
    .reduce((a, b) => Number(b) + Number(a), 0);

  console.log("Day 1 answer : ", sum);
});
