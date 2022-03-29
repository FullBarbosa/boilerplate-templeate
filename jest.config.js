module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    'ˆstyled-componentes':
      '<rootDir/node_modules/styled-components/dist/styled-componentes.browser.cjs.js'
  }
};
