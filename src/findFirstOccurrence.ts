function findFirstOccurrence<T> (array: T[], value: T): T |number {
  if(array.includes(value)) {
    return array.indexOf(value);
  }
  return -1;
}

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence<number>(numbers, targetNumber);

const indexInStrings = findFirstOccurrence<string>(strings, targetString);

console.log(indexInNumbers); 

console.log(indexInStrings);