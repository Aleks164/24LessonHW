import { sum } from "./sum";

describe("Homework", () => {
  it("sum should return expected values", () => {
    expect(+sum()).toBe(0);

    const s = sum;
    expect(+s(1)).toBe(1);
    expect(+s(1)(2)).toBe(3);
    expect(+s(3)(4)(5)).toBe(12);

    const s3 = sum(3);
    expect(+s3(5)).toBe(8);
    expect(+s3(6)).toBe(9);
  });
});
