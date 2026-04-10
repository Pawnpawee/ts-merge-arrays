# TS Merge Arrays

This project exposes a TypeScript function that merges three number arrays into a single sorted result.

## Requirements

- Node.js 18 or newer (this use v22.17.1)
- npm (this use 11.7.0)

## Setup

Install the dependencies from the project root:

```bash
npm install
```

The project uses TypeScript, Jest, and ts-jest. The required dev dependencies are already listed in `package.json`.

## Run the code

The main implementation lives in `src/merge.ts`. You can import `merge` into another TypeScript file and call it directly:

```ts
import { merge } from "./src/merge";

const result = merge([1, 3, 5], [6, 4, 2], [0, 7, 8]);
console.log(result);
```

If you want to type-check the project before running code, use:

```bash
npx tsc --noEmit
```

## Unit tests

Run the full Jest test suite with:

```bash
npm test
```

Run the suite with coverage output with:

```bash
npm run test:coverage
```

The test file `src/tests/merge.test.ts` contains 9 unit test cases covering:

1. A standard merge of three arrays
2. Arrays of different lengths
3. Empty arrays in one input
4. One non-empty array and two empty arrays
5. Duplicate values
6. Negative numbers
7. All inputs empty
8. Large numbers
9. A second single-array scenario for edge-case coverage

## Project structure

- `src/merge.ts` - merge implementation
- `src/tests/merge.test.ts` - Jest unit tests
- `tsconfig.json` - TypeScript compiler settings
- `jest.config.js` - Jest configuration

## Notes

- `package.json` is configured for CommonJS.
- Jest globals such as `describe`, `it`, and `expect` are available through `@types/jest`.