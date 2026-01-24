Below is a **clear, practical, copy-paste-ready local testing checklist** you can use **every time before pushing routing/page/test changes**.

This is written as an **engineer runbook**, not theory.
You can save it as `docs/local-test-checklist.md` if you want.

---

# Local Testing Checklist — Routing, Pages & Tests

_(Run this before pushing to Git)_

---

## 1. Clean Baseline (Optional but Recommended)

Use this when you want maximum confidence.

- [ ] Stop the dev server
- [ ] Delete `node_modules/` (optional)
- [ ] Delete build output (`dist/`, `build/`, etc.)
- [ ] Reinstall dependencies

```bash
npm install
```

Why:

- Detects hidden dependency issues
- Matches CI behavior

---

## 2. Static Checks (Fast Fail)

### 2.1 Lint

- [ ] Run lint

```bash
npm run lint
```

Expected:

- No errors
- No new warnings

If lint fails → **fix before continuing**

---

### 2.2 Type Check (if enabled)

- [ ] Run type check

```bash
npm run typecheck
```

Expected:

- Zero errors

---

## 3. Unit Tests (Core Confidence)

### 3.1 Run Full Test Suite

- [ ] Run tests

```bash
npm test
```

Expected:

- All tests pass
- No flaky tests
- No warnings about missing `act()`

---

### 3.2 Verify Test Coverage Behavior (Optional)

- [ ] Run coverage locally (if supported)

```bash
npm test -- --coverage
```

Expected:

- Coverage increases or stays stable
- No sudden drops due to routing

Do **not** chase percentages yet.

---

## 4. Manual Routing Validation (Critical)

### 4.1 Start the App

- [ ] Start dev server

```bash
npm run dev
# or npm start
```

---

### 4.2 Direct URL Checks (Type in Address Bar)

For **each route**, load it directly and refresh the page:

- [ ] `/`
- [ ] `/about`
- [ ] `/login`
- [ ] `/register`
- [ ] `/app/dashboard`
- [ ] `/app/profile`
- [ ] `/app/settings`
- [ ] `/admin/users`
- [ ] `/some/invalid/path`

Expected:

- Correct page renders
- Refresh works
- Invalid path → NotFound page
- No white screen
- No console errors

---

### 4.3 Browser Console Check

- [ ] Open DevTools → Console

Expected:

- No red errors
- No React warnings
- No router warnings

---

## 5. File & Import Sanity Check

- [ ] All imported pages exist
- [ ] File names match imports (case-sensitive)
- [ ] Default exports are used
- [ ] No unused imports
- [ ] No duplicate route paths

This avoids CI surprises on Linux runners.

---

## 6. CI Parity Check (Mental)

Before pushing, confirm:

- [ ] No OS-specific paths
- [ ] No environment-specific logic
- [ ] No hard-coded absolute URLs
- [ ] No debug logs left in code

If it works locally **and** matches CI assumptions, CI will be boring.

---

## 7. Pre-Push Summary Check (Final Gate)

Answer **YES** to all:

- [ ] App runs locally
- [ ] Routes render correctly
- [ ] Tests pass
- [ ] Lint passes
- [ ] No console errors
- [ ] Changes are scoped to routing/pages/tests only

If any answer is **NO** → do not push yet.

---

## 8. Push Readiness

When everything above is checked:

- [ ] Commit with a clear message
      _(e.g. `feat: add routing pages and unit tests`)_

- [ ] Push branch

- [ ] Open PR

- [ ] Let CI validate

---

## Mental Model (Keep This in Mind)

Local testing answers:

> “Did I break anything obvious?”

CI answers:

> “Did I break anything systemic?”

You already did the hard work by structuring things correctly—this checklist just **confirms reality**.

---

When you finish this checklist and push, come back and say:

- **“PR opened, CI running”**
- or **“CI failed on X”**

We’ll handle the next step calmly and precisely.
