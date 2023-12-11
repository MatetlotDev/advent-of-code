import fs from "fs";

export const day1 = (step) => {
  fs.readFile("./2023/day-1/input.txt", (err, data) => {
    if (err) {
      console.error("Day 1 error :", err);
      return;
    }

    if (step === 1) {
      const sum = data
        .toString()
        .split("\n")
        .map((p) => p.replace(/[^0-9]/g, ""))
        .map((n) => `${n.slice(0, 1)}${n.slice(n.length - 1, n.length)}`)
        .reduce((a, b) => Number(b) + Number(a), 0);

      console.log("Day 1 - step 1 : ", sum);
      return;
    }

    // step 2
    const possibleNums = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    const replaceTextAsNum = (string) => {
      let newString = string;

      for (let i = 0; i < newString.length - 1; i++) {
        possibleNums.forEach((num, idx) => {
          if (newString.slice(i, i + num.length) === num) {
            newString = `${newString.slice(0, i)}${idx + 1}${newString.slice(
              num.length + i,
              newString.length
            )}`;
          }
        });
      }

      return newString;
    };

    const sum = data
      .toString()
      .split("\n")
      .map((str) => replaceTextAsNum(str))
      .map((p) => p.replace(/[^0-9]/g, ""))
      .map((n) => `${n.slice(0, 1)}${n.slice(n.length - 1, n.length)}`)
      .reduce((a, b) => Number(b) + Number(a), 0);

    console.log("Day 1 - step 2 : ", sum);
  });
};
