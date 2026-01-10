import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,

    // ✅ Built-in JUnit reporter (no package needed)
    reporters: ["default", "junit"],

    outputFile: {
      junit: "test-report.xml"
    },

    coverage: {
      provider: "v8",

      reporter: ["text", "html", "json", "lcov"],
      reportsDirectory: "./coverage",

      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/test/**",
        "src/**/*.test.{ts,tsx}",
        "src/**/*.spec.{ts,tsx}",
        "src/main.tsx",
        "src/router.tsx",
        "src/layouts/**"
      ],

      clean: true,

      thresholds: {
        statements: 7,
        lines: 7,
        functions: 7,
        branches: 0
      }
    }
  }
});
