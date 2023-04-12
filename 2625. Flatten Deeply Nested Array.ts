type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const result: MultiDimensionalArray = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (Array.isArray(el) && n > 0) {
      const flattened = flat(el, n - 1);
      result.push(...flattened);
    } else {
      result.push(el);
    }
  }

  return result;
};
