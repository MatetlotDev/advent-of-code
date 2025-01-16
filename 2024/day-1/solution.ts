/**
 * 1. Make two arrays with the 2 columns
 * 2. sort both arrays in ascending order
 * 3. compare each numbers of each columns index by index and calculate the difference
 * 4. Add all of the difference in an array and calculate the sum of it
 */

import { extractInputIntoString } from "../../utils";

const inputIntoString = extractInputIntoString("./input.txt");

const inputToArray = (input: string) => {
  const column1: number[] = [];
  const column2: number[] = [];

  input.split("\n").forEach((numbersInString) => {
    const array = numbersInString.split("   ");
    column1.push(Number(array[0]));
    column2.push(Number(array[1]));
  });

  return [column1, column2];
};
