module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['jest-canvas-mock'],
  coverageReporters: ['html', 'text'],
  coverageDirectory: 'docs/coverage',
}
