function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.map((e, i) => fn(e, i));
};