module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/index.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    'ˆstyled-componentes':
      '<rootDir/node_modules/styled-components/dist/styled-componentes.browser.cjs.js'
  }
};
