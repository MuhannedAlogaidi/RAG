export const ROUTES = {
  home: '/',
  about: '/about',
  applicant: '/applicant',

  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
  },

  app: {
    root: '/app',
    dashboard: '/app/dashboard',
    profile: '/app/profile',
    settings: '/app/settings',
  },

  admin: {
    root: '/admin',
    users: '/admin/users',
  },

  error: '/error',
} as const

export const ROUTE_SEGMENTS = {
  about: 'about',
  applicant: 'applicant',

  auth: {
    root: 'auth',
    login: 'login',
    register: 'register',
  },

  app: {
    root: 'app',
    dashboard: 'dashboard',
    profile: 'profile',
    settings: 'settings',
  },

  admin: {
    root: 'admin',
    users: 'users',
  },

  error: 'error',
} as const

export type AppRoutePath =
  | typeof ROUTES.home
  | typeof ROUTES.about
  | typeof ROUTES.applicant
  | typeof ROUTES.auth.root
  | typeof ROUTES.auth.login
  | typeof ROUTES.auth.register
  | typeof ROUTES.app.root
  | typeof ROUTES.app.dashboard
  | typeof ROUTES.app.profile
  | typeof ROUTES.app.settings
  | typeof ROUTES.admin.root
  | typeof ROUTES.admin.users
  | typeof ROUTES.error
