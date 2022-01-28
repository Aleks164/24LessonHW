export const sum = (n?: number | undefined) => {
  const acc = n || 0;
  function foo(_n: number) {
    return sum(acc + _n);
  }
  foo.valueOf = (): number => acc;
  return foo;
};
