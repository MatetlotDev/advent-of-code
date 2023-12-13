import fs from "fs";

const day2Step1 = () => {
  fs.readFile("./2023/day-2/input.txt", (err, data) => {
    if (err) {
      console.error("Day 2 error :", err);
      return;
    }

    const incorrectIds = [];

    const inArray = data.toString().split("\n");

    inArray.forEach((str) => {
      const id = /Game (\d+):/g.exec(str)[1];
      const rest = str.replace(/Game (\d+):/g, "");
      const games = rest.split(";");

      games.forEach((game) => {
        const count = { id, blue: 0, red: 0, green: 0 };
        const byColors = game.split(",").map((e) => e.trim());

        byColors.forEach((g) => {
          const color = g.split(" ")[1];
          count[color] = count[color] + Number(g.split(" ")[0]);
        });

        if (
          (count.red > 12 || count.green > 13 || count.blue > 14) &&
          !incorrectIds.includes(id)
        )
          incorrectIds.push(count.id);
      });
    });

    const arrFull = Array.from(Array(100).keys()).map((i, idx) =>
      (idx + 1).toString()
    );

    const sum = arrFull.reduce((a, b) => {
      if (incorrectIds.includes(b.toString())) {
        return a;
      }
      return a + Number(b);
    }, 0);

    console.log("Day 2 - step 1 : ", sum);
  });
};

const day2Step2 = () => {
  fs.readFile("./2023/day-2/input.txt", (err, data) => {
    if (err) {
      console.error("Day 2 error :", err);
      return;
    }

    const inArray = data.toString().split("\n");

    const multiply = inArray.map((str) => {
      const count = { blue: 0, red: 0, green: 0 };

      const rest = str.replace(/Game (\d+):/g, "");
      const games = rest.split(";");

      games.forEach((game) => {
        const byColors = game.split(",").map((e) => e.trim());

        byColors.forEach((g) => {
          const color = g.split(" ")[1];
          const num = Number(g.split(" ")[0]);
          count[color] = count[color] > num ? count[color] : num;
        });
      });

      return (count.red || 1) * (count.blue || 1) * (count.green || 1);
    });

    const sum = multiply.reduce((a, b) => a + b, 0);

    console.log("Day 2 - step 2 : ", sum);
  });
};

day2Step2();
