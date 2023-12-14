import fs from "fs";

const day3Step1 = () => {
  fs.readFile("./2023/day-3/input.txt", (err, data) => {
    if (err) {
      console.error("Day 3 error : ", err);
      return;
    }

    const NOT_SYMBOL = ".";

    let sum = 0;

    const inputInArray = data.toString().split("\n");
    const LINE_LENGTH = inputInArray[0].length;

    /**
     * Pour chaque ligne :
     * - trouver les index où il y a des numéros
     * - vérifier sur les lignes avant et après aux même index +1 de chaque côté
     * - si on à un symbol qui n'est pas un numéro ou un '.', on additionne
     */

    inputInArray.forEach((line, idx) => {
      const prevExist = idx - 1 >= 0;
      const nextExist = idx + 1 <= inputInArray.length - 1;

      const numbersMatches = Array.from(line.matchAll(/\d+/g));
      const prevLineSymbolsMatches =
        prevExist && Array.from(inputInArray[idx - 1].matchAll(/[^.\d]+/g));
      const nextLineSymbolsMatches =
        nextExist && Array.from(inputInArray[idx + 1].matchAll(/[^.\d]+/g));

      const numbersIndex = numbersMatches.map((match) => ({
        number: parseInt(match[0]),
        indexes: [
          match.index - 1,
          parseInt(match[0])
            .toString()
            .split("")
            .map((n, i) => {
              if (i === 0) return match.index;
              return match.index + i;
            }),
          match.index + parseInt(match[0]).toString().length,
        ].flat(),
      }));
      const prevLineSymbolsIndex =
        prevExist && prevLineSymbolsMatches.map((match) => match.index);
      const nextLineSymbolsIndex =
        nextExist && nextLineSymbolsMatches.map((match) => match.index);

      numbersIndex.forEach((num) => {
        if (
          prevExist &&
          prevLineSymbolsIndex.some((i) => num.indexes.includes(i))
        ) {
          sum += num.number;
          return;
        }
        if (
          /^[^.0-9]+$/.test(line[num.indexes[0]]) ||
          /^[^.0-9]+$/.test(line[num.indexes[num.indexes.length - 1]])
        ) {
          sum += num.number;
          return;
        }
        if (
          nextExist &&
          nextLineSymbolsIndex.some((i) => num.indexes.includes(i))
        ) {
          sum += num.number;
          return;
        }
      });
    });

    /**
     *
     * There might be some duplicate
     */
  });
};

day3Step1();
