function typeBasedReturn (param: string | number): number {
  if(typeof param === 'string') {
    return param.length;
  }
  return param * param;
}

console.log(typeBasedReturn('Test of length'));
console.log(typeBasedReturn(5));