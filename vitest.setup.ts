;(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true

import '@testing-library/jest-dom'
test: {
  setupFiles: './vitest.setup.ts'
}
