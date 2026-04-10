
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  // Pointers
  let i = 0; // min(0) to max
  let j = collection_2.length - 1; // max to min(0)
  let k = 0; // min(0) to max

  // Continue until empty
  while (i < collection_1.length || j >= 0 || k < collection_3.length) {

    // Grab current value. If pointer out of range -> default to Infinity
    const val1 = i < collection_1.length ? (collection_1[i] ?? Infinity) : Infinity;
    const val2 = j >= 0 ? (collection_2[j] ?? Infinity) : Infinity;
    const val3 = k < collection_3.length ? (collection_3[k] ?? Infinity) : Infinity;

    // Compare the three values to find smallest
    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j--;
    } else {
      result.push(val3);
      k++;
    }
  }

  return result;
}
