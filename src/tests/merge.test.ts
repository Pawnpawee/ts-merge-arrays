import { merge } from "../merge";


describe("Merge Function", () => {
  it("should merge three arrays correctly", () => {
    const c1 = [1, 3, 5];
    const c2 = [6, 4, 2]; // max to min
    const c3 = [0, 7, 9];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it("should handle arrays of different lengths", () => {
    const c1 = [1, 5, 9, 10];
    const c2 = [8, 7];
    const c3 = [2, 3, 4];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  });

  it("should handle empty arrays", () => {
    const c1: number[] = [];
    const c2: number[] = [2, 1];
    const c3: number[] = [3];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 2, 3]);
  });

  it("should work when only one array has elements", () => {
    const c1 = [1, 2, 3];
    const c2: number[] = [];
    const c3: number[] = [];

    expect(merge(c1, c2, c3)).toEqual([1, 2, 3]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it("should handle duplicate numbers", () => {
    const c1 = [1, 1, 2];
    const c2 = [2, 1, 1];
    const c3 = [1, 2, 2];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 1, 1, 1, 1, 2, 2, 2, 2]);
  });

  it("should work when only one array has elements", () => {
    const c1 = [1, 2, 3];
    const c2: number[] = [];
    const c3: number[] = [];

    expect(merge(c1, c2, c3)).toEqual([1, 2, 3]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it("should handle negative numbers correctly", () => {
    const c1 = [-5, 0, 2];
    const c2 = [8, -1, -3]; // max to min
    const c3 = [-10, -5, 5];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([-10, -5, -5, -3, -1, 0, 2, 5, 8]);
  });

  it("should return empty array when all inputs are empty", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it("should handle large numbers", () => {
    const c1 = [1000000, 2000000];
    const c2 = [5000000, 10];
    const c3 = [0, 9999999];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([0, 10, 1000000, 2000000, 5000000, 9999999]);
  });
});
