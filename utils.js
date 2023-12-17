import fs from "fs";

export const extractInputIntoString = (path) =>
  fs.readFileSync(path).toString();
