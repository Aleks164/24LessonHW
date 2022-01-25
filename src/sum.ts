export const sum = function (n?: number) {
  const acc = n || 0;
  function foo(_n: number) {
    return sum(acc + _n);
  }
  foo.valueOf = () => acc;
  return foo;
};
