// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.storybook/**",
    "!**/pages/**",
    "!**/defi/contracts/**",
    "!**/styles/**",
    "!**/*.stories.tsx",
    "!**/*.styles.ts",
    "!**/*.test.{ts,tsx}",
    "!**/*mock*.{ts,tsx}",
    "!**/*config*.{ts,tsx}",
    "!**/index.{ts,tsx}",
    "!**/(*.types|types).ts",
    "!**/utils/(Contentful|mock|testUtils).ts",

    // This will be included once their data are not mocked and static
    "!**/stores/**",
    "!**/hooks/**",
  ],
  collectCoverage: true,
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif)$": `<rootDir>/__mocks__/fileMock.js`,
    "^.+\\.(svg)$": `<rootDir>/__mocks__/svgMock.js`,

    // Handle module aliases
    "^@/(.*)$": "<rootDir>/$1",
    "^pages(.*)$": "<rootDir>/pages$1",
    "^components(.*)$": "<rootDir>/components$1",
    "^features(.*)$": "<rootDir>/features$1",
    "^contexts(.*)$": "<rootDir>/contexts$1",
    "^hooks(.*)$": "<rootDir>/hooks$1",
    "^styles(.*)$": "<rootDir>/styles$1",
    "^store(.*)$": "<rootDir>/store$1",
    "^utils(.*)$": "<rootDir>/utils$1",
    "/^constants(.*)$/": "<rootDir>/constants$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
