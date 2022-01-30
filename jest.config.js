/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "jest/tsconfig.json",
    },
  },
  transform: {
    "\\.(css)$": "<rootDir>/jest/fileTransformer.js",
  },
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  setupFiles: ["<rootDir>/jest/jest.setup.js"],
};
