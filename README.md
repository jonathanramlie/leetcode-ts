## Self Note

### Optimization

When initialize arrays prefer to use the `Array` constructor rather than `Array.from`
In larger sets, using Array.from would resulting in slower initialization

```typescript
const generateArrayLegacy = (length: number, defaultValue: number = 0) => {
  const arrays = new Array(length);

  for (let i = 0; i < arrays.length; ++i) {
    arrays[i] = defaultValue;
  }
  return arrays;
};

const generateArrayNew = (length: number, defaultValue: number = 0) => {
  return Array.from({ length }, () => defaultValue);
};

// Tested for each 10, 100, 1000, 100000, 10000000

// legacy generate array length 10: 0.054ms
// legacyWithoutValue generate array length 10: 0.014ms
// new generate array length 10: 0.03ms
// newWithoutValue generate array length 10: 0.017ms

// legacy generate array length 10000000: 38.298ms
// legacyWithoutValue generate array length 10000000: 17.01ms
// new generate array length 10000000: 391.5ms
// newWithoutValue generate array length 10000000: 341.524ms
```

### Array Sort

When using `.sort` the behaviour might differs based on the `compareFn`.
If the `compareFn` are passed on the `.sort` it'll sort based on the return `compareFn`.
But when not provided, by default the comparison will be done with converting the elements into string and ordering it on ascending.
In cases your array already expected to be in numbers type, it might be more suitable to use `TypedArray` instead of `Array`

References:

- [MDN - Array sort behaviour](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [TypedArray object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [TypedArray sort behaviour](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort)
