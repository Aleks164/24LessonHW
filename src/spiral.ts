export function spiral(arr: number[][]): (number | undefined)[] {
  const newAr = [];
  let count = 1;
  while (arr.length > 0) {
    for (let y = 0; y <= arr.length; y++) {
      if (y === 0 && count === 1) {
        while (arr[y].length !== 0) {
          const q = arr[y].shift();
          newAr.push(q);
        }
        count = 2;
      }

      if (y !== 0 && y !== arr.length - 1 && (count === 2 || count === 3)) {
        const q = arr[y].pop();
        newAr.push(q);
        count = 3;
      }
      if (y === arr.length - 1 && (count === 3 || count === 4 || count === 2)) {
        while (arr[y].length !== 0) {
          const q = arr[y].pop();
          newAr.push(q);
        }
        count = 4;
      }
    }
    for (let y = arr.length - 1; y > 0; y--) {
      if (y !== 0 && y !== arr.length - 1 && (count === 1 || count === 4)) {
        const q = arr[y].shift();
        newAr.push(q);
        count = 1;
      }
    }
    if (arr[0].length === 0) {
      arr.shift();
    }
    if (arr[arr.length - 1].length === 0) {
      arr.pop();
    }
  }
  return newAr;
}
