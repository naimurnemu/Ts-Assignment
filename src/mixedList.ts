type Mixed = number | string;

const list: Mixed[] = [2, "hello", 3, "world", 4, "!", 5, "Goodbye", 7];

function sumOfList(list: Mixed[]): number {
  let sum = 0;
  list.forEach((item: Mixed) => {
    if (typeof item === "number") {
      sum += item;
    }
  });

  return sum;
}

console.log(sumOfList(list));