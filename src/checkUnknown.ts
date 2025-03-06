function unknownCheck(param: unknown) {
  let isNumber: boolean = true;
  if (Array.isArray(param)) {
    for (let item of param) {
      if (typeof item !== "number") {
        isNumber = false;
        break;
      }
    }
  } 
  if (Array.isArray(param) && isNumber) {
    return param.reduce((prev: number, curr: number) => prev + curr, 0);
  } else {
    throw new Error( "Parameter is not an array of numbers");
  }
}

console.log(unknownCheck([1, 2, 3]));
console.log(unknownCheck([1, 2, "3"]));