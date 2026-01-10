# React 19+ Context API – Production Skeleton

This is a production-ready React 19 project scaffold using Context API,
feature-first architecture, and Vitest for unit testing.

## Scripts
- npm run dev
- npm run test
- npm run coverage


Understood. Below is the **entire agreed production-ready React 19+ Context API structure rendered as a single consolidated tree** in **one cell**, with **no code and no explanations**.

```
src/
├── app/
│   ├── providers/
│   │   ├── AppProviders.tsx
│   │   ├── ErrorBoundaryProvider.tsx
│   │   └── QueryProvider.tsx
│   │
│   ├── router/
│   │   ├── routes.ts
│   │   └── RouterProvider.tsx
│   │
│   ├── layout/
│   │   ├── RootLayout.tsx
│   │   └── ProtectedLayout.tsx
│   │
│   ├── App.tsx
│   └── bootstrap.tsx
│
├── contexts/
│   ├── app/
│   │   ├── AppContext.ts
│   │   ├── AppProvider.tsx
│   │   └── app.types.ts
│   │
│   ├── auth/
│   │   ├── AuthContext.ts
│   │   ├── AuthProvider.tsx
│   │   └── auth.types.ts
│   │
│   └── theme/
│       ├── ThemeContext.ts
│       ├── ThemeProvider.tsx
│       └── theme.types.ts
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── auth.context.ts
│   │   ├── auth.types.ts
│   │   └── index.ts
│   │
│   ├── user/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── user.context.ts
│   │   ├── user.types.ts
│   │   └── index.ts
│   │
│   └── settings/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── settings.context.ts
│       ├── settings.types.ts
│       └── index.ts
│
├── services/
│   ├── api/
│   │   ├── httpClient.ts
│   │   ├── auth.api.ts
│   │   └── user.api.ts
│   │
│   ├── storage/
│   │   ├── localStorage.ts
│   │   └── sessionStorage.ts
│   │
│   └── analytics/
│       └── tracker.ts
│
├── shared/
│   ├── components/
│   │   ├── Button/
│   │   ├── Modal/
│   │   └── Loader/
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── validators.ts
│   │
│   ├── constants/
│   └── types/
│
├── config/
│   ├── env/
│   │   ├── development.ts
│   │   ├── staging.ts
│   │   └── production.ts
│   │
│   ├── featureFlags/
│   │   └── flags.ts
│   │
│   └── runtime.ts
│
├── assets/
│   ├── images/
│   └── icons/
│
├── styles/
│   ├── globals.css
│   ├── themes.css
│   └── variables.css
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── main.tsx
└── index.html
```

If you want, next I can:

* Collapse this into a **minimal MVP version**
* Mark **which folders are optional initially**
* Convert this into a **repo-ready README diagram**
* Provide a **Context ownership decision table** (what goes where)


# Global Production Roadmap – React 19 Portfolio System

This document visualizes the **end‑to‑end roadmap** for evolving the current React 19 Context‑based system into a **production‑ready, multi‑cloud, enterprise‑grade portfolio**.

---

## Phase 1 — Architecture Assimilation & Local Stability

**Goal:** Fully understand and trust the architecture before extending it.

**Key Activities**

* Install dependencies and run the app locally
* Execute unit tests and coverage
* Review folder responsibilities and boundaries
* Internalize Context vs Feature vs Service roles

**Deliverables**

* Local dev environment working
* Tests passing
* Personal architectural notes

**Portfolio Signal**

> Shows architectural discipline and intentional onboarding

---

## Phase 2 — Engineering Baseline Hardening

**Goal:** Enforce professional code quality standards.

**Key Activities**

* Add ESLint and Prettier
* Configure path aliases
* Enforce strict TypeScript rules
* Introduce pre‑commit hooks

**Deliverables**

* Linting + formatting pipelines
* Consistent imports
* Quality gates enforced

**Portfolio Signal**

> Demonstrates engineering maturity and maintainability

---

## Phase 3 — Testing Strategy Maturity

**Goal:** Build confidence through structured testing.

**Key Activities**

* Unit tests for contexts
* Feature‑level black‑box tests
* Integration testing strategy
* Test utilities and helpers

**Deliverables**

* Tested providers
* Feature test coverage
* Reusable test setup

**Portfolio Signal**

> Shows system‑level testing awareness

---

## Phase 4 — Production Build & Performance Readiness

**Goal:** Prepare the app for real‑world usage.

**Key Activities**

* Code splitting
* Lazy loading routes and features
* Error boundary strategy
* Performance checks

**Deliverables**

* Optimized production build
* Lazy‑loaded routes
* Global error handling

**Portfolio Signal**

> Indicates performance‑first thinking

---

## Phase 5 — Containerization & Runtime Isolation

**Goal:** Make the app cloud‑portable.

**Key Activities**

* Multi‑stage Docker build
* Runtime‑only container
* Environment variable injection

**Deliverables**

* Dockerfile
* Local container run
* Immutable build artifact

**Portfolio Signal**

> Shows cloud‑native readiness

---

## Phase 6 — CI/CD Foundations

**Goal:** Automate correctness and consistency.

**Key Activities**

* GitHub Actions CI pipeline
* Run tests and builds on PRs
* Enforce coverage thresholds

**Deliverables**

* CI workflow
* Automated checks

**Portfolio Signal**

> Demonstrates professional DevOps habits

---

## Phase 7 — Cloud‑First Deployment

**Goal:** Deploy to a real production environment.

**Key Activities**

* Choose first cloud (AWS / GCP / Azure)
* Configure secrets
* Deploy containerized app

**Deliverables**

* Live deployment
* Environment separation

**Portfolio Signal**

> Proves real production deployment experience

---

## Phase 8 — Multi‑Cloud Expansion

**Goal:** Demonstrate platform‑agnostic design.

**Key Activities**

* Reuse Docker image
* Configure deployments for other clouds
* Compare tradeoffs

**Deliverables**

* Multi‑cloud configs
* Deployment notes

**Portfolio Signal**

> Shows architectural flexibility

---

## Phase 9 — Enterprise CI/CD (Jenkins)

**Goal:** Support enterprise environments.

**Key Activities**

* Jenkinsfile creation
* Parameterized pipelines
* Environment‑based deployments

**Deliverables**

* Jenkins pipeline
* Shared scripts

**Portfolio Signal**

> Signals enterprise readiness

---

## Phase 10 — Advanced State & Data Architecture

**Goal:** Show controlled architectural evolution.

**Key Activities**

* Introduce server‑state libraries
* Context vs external state comparison
* Migration documentation

**Deliverables**

* Enhanced state layer
* Tradeoff documentation

**Portfolio Signal**

> Demonstrates system design decision‑making

---

## Phase 11 — Observability & Reliability

**Goal:** Make failures visible and actionable.

**Key Activities**

* Logging strategy
* Error tracking
* Health checks

**Deliverables**

* Centralized logs
* Error monitoring hooks

**Portfolio Signal**

> Shows operational awareness

---

## Phase 12 — Security & Compliance

**Goal:** Harden the system for real users.

**Key Activities**

* Secrets management
* Dependency scanning
* Secure headers

**Deliverables**

* Secure CI/CD
* Hardened runtime

**Portfolio Signal**

> Reflects production responsibility

---

## Phase 13 — Feature Depth (Portfolio Features)

**Goal:** Add realistic application behavior.

**Example Features**

* Authentication flows
* Role‑based access
* Feature flags
* Audit logs

**Portfolio Signal**

> Shows real‑world application complexity

---

## Phase 14 — Documentation & Storytelling

**Goal:** Communicate architecture clearly.

**Key Activities**

* Architecture diagrams
* Deployment guides
* Decision records

**Deliverables**

* Professional documentation

**Portfolio Signal**

> Signals senior‑level communication

---

## Phase 15 — Final Portfolio Packaging

**Goal:** Make the project hiring‑ready.

**Key Activities**

* Repo cleanup
* Demo scripts
* System design walkthrough

**Deliverables**

* Polished GitHub repo
* Interview‑ready narrative

**Final Signal**

> End‑to‑end ownership of a production system



Below is a **drop-in README section** you can paste directly into your project’s `README.md`.
It is concise, technical, and written as a **reference**, not a tutorial.

---

## React 19 Testing & CI Configuration (Reference)

### Overview

This project is intentionally built on **React 19** using **Vite + Vitest + TypeScript**.
At the time of setup, parts of the React ecosystem (notably Testing Library) have not yet updated their **peer-dependency metadata** to declare React 19 support.

This configuration is designed to be:

* **Runtime-correct**
* **CI-stable**
* **Upgrade-ready**
* **Explicitly documented**

Peer warnings are acknowledged and controlled, not ignored.

---

### Tooling Stack

* **React / React DOM:** 19.x
* **Build:** Vite
* **Test Runner:** Vitest
* **DOM Environment:** jsdom
* **UI Testing:** @testing-library/react
* **Type System:** TypeScript

---

### Dependency & Peer Strategy

`@testing-library/react@14.x` currently declares peer support for React 18 only.
However:

* React 19 runtime compatibility is verified
* No duplicate React versions are installed
* No runtime behavior is affected

**Strategy used:**

* Dependencies are installed with `--legacy-peer-deps`
* The resolved graph is locked via `package-lock.json`
* CI does not gate on peer metadata

This is a **deliberate, temporary strategy** until official React 19 peer support is released.

---

### CI/CD Installation Policy

CI uses deterministic installs and does not enforce peer metadata.

**Authoritative CI commands:**

```bash
npm ci --legacy-peer-deps
npm test
npm run build
```

CI intentionally does **not** run:

* `npm ls`
* peer-dependency checks
* `--force` installs

---

### React 19 Baseline Test

A dedicated **baseline test** exists to validate React 19 correctness independent of Testing Library.

This test:

* Uses only official React APIs (`createRoot`, `act`)
* Verifies render → update → unmount
* Acts as a **contract test** for the React runtime

If the baseline test fails → **real React/runtime issue**
If it passes → **tooling issues are isolated**

---

### `act()` Environment Configuration

React 19 requires explicit signaling that the test environment supports `act()`.

Since Vitest does not set this automatically, the following is configured in the Vitest setup file:

```ts
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
```

This aligns Vitest behavior with React’s expectations and prevents false warnings.

---

### TypeScript & JSX Configuration

The project uses the modern JSX transform required for React 18+ / 19:

```json
"jsx": "react-jsx"
```

Type definitions are explicitly installed:

* `@types/react`
* `@types/react-dom`

These are installed using the same peer strategy as CI to maintain consistency.

---

### Testing Library Usage Policy

Testing Library is used **only** for:

* User-visible behavior
* DOM queries
* Interaction testing

It is **not** used to validate:

* React root lifecycle
* Framework-level correctness

Those concerns are handled exclusively by the baseline test.

---

### Upgrade Path (Future)

When Testing Library officially declares React 19 peer support:

1. Upgrade `@testing-library/react`
2. Remove `--legacy-peer-deps` from CI
3. Re-lock `package-lock.json`
4. Verify tests and build
5. Remove this note from the README

No test refactors should be required.

---

### Summary

This setup ensures:

* React 19 runtime correctness
* Deterministic CI behavior
* Clear separation between framework validation and tooling
* A clean, low-risk upgrade path

Peer warnings are **documented, intentional, and temporary**.

---

If you want, I can next:

* Compress this into a **short “Why React 19” section**
* Add a **Testing Conventions** section
* Produce a **CI README snippet**
* Create a **React 19 upgrade checklist** section



Below is a **drop-in README section** you can add directly after the testing section.
It is written as an **operational checklist**, not guidance prose.

---

## React 19 Upgrade Checklist

This checklist defines the **mandatory steps and verification gates** for upgrading or maintaining this project on **React 19**.
It exists to ensure upgrades are **controlled, repeatable, and low-risk**.

---

### 1. Pre-Upgrade Preconditions

Before upgrading React or related tooling, confirm:

* [ ] Project builds successfully on current React version
* [ ] All tests pass locally
* [ ] `package-lock.json` is committed and up to date
* [ ] CI is green using the current lockfile

Upgrades must **never** be performed on a broken baseline.

---

### 2. React Version Upgrade

Upgrade React and React DOM together.

```bash
npm install react@^19 react-dom@^19 --legacy-peer-deps
```

Requirements:

* React and React DOM versions **must match**
* Use `--legacy-peer-deps` until ecosystem peer metadata supports React 19

---

### 3. Type System Verification (Required)

Ensure React types are present and compatible.

```bash
npm install -D @types/react @types/react-dom --legacy-peer-deps
```

Verify:

* No `react/jsx-runtime` typing errors
* No implicit `any` warnings
* TypeScript server restarted after install

---

### 4. JSX & Compiler Configuration Check

Confirm `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

This is **mandatory** for React 18+ / 19.

---

### 5. React 19 Baseline Test (Hard Gate)

Run the baseline React test suite:

```bash
npm test
```

The baseline test must verify:

* [ ] Root creation (`createRoot`)
* [ ] Initial render
* [ ] Update render
* [ ] Unmount
* [ ] Proper `act()` wrapping

**Rules:**

* If baseline fails → stop upgrade
* Do not proceed until baseline passes cleanly

---

### 6. `act()` Environment Verification

Ensure the test environment explicitly supports `act()`.

In the Vitest setup file:

```ts
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
```

Verify:

* No `act(...)` warnings
* No deprecated `react-dom/test-utils` usage

---

### 7. Testing Library Compatibility Check

At the time of React 19 adoption:

* `@testing-library/react` may still declare React 18 peer support
* This is **expected and documented**

Actions:

* [ ] Do not override peer dependencies
* [ ] Do not downgrade React
* [ ] Continue using `--legacy-peer-deps`

Testing Library failures must be evaluated **only after** baseline tests pass.

---

### 8. CI/CD Verification

CI must pass with the locked dependency graph.

```bash
npm ci --legacy-peer-deps
npm test
npm run build
```

CI must **not**:

* Run `npm ls`
* Gate on peer dependency warnings
* Use `--force`

---

### 9. Ecosystem Catch-Up (Future Step)

When Testing Library officially supports React 19:

1. Upgrade Testing Library to the version declaring React 19 support
2. Remove `--legacy-peer-deps` from CI
3. Re-lock `package-lock.json`
4. Run full test and build verification
5. Remove React-19 peer warning notes from documentation

No refactors should be required if the baseline test has been maintained.

---

### 10. Upgrade Completion Criteria

An upgrade to React 19 is considered **complete** only when:

* [ ] Baseline React test passes
* [ ] All tests pass without warnings
* [ ] Production build succeeds
* [ ] CI runs without peer or install failures
* [ ] Lockfile is committed

---

### Upgrade Policy Summary

* React upgrades are **intentional**
* Peer warnings are **documented, not ignored**
* Runtime correctness is validated independently of tooling
* CI behavior is deterministic and repeatable

This checklist must be followed for **all React major or minor upgrades**.

---

If you want, I can next:

* Add a **Testing Conventions** section (what patterns are allowed)
* Create a **CI/CD Policy** section
* Produce a **short executive summary** version of this checklist
* Turn this into a **release checklist** for pull requests
