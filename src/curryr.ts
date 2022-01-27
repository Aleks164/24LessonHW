
export function curry(func: (...arg: number[]) => number): any {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...args2: number[]) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
