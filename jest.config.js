export default {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  type: 'module',
}
