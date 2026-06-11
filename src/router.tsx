import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './pages/RootLayout'
import RouteErrorPage from './pages/RouteErrorPage'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApplicantPage from './pages/ApplicantPage'

// auth pages
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

// app pages
import DashboardPage from './pages/app/DashboardPage'
import ProfilePage from './pages/app/ProfilePage'
import SettingsPage from './pages/app/SettingsPage'

// admin pages
import AdminUsersPage from './pages/admin/AdminUsersPage'

// error fallback page
import ErrorPage from './pages/errors/ErrorPage'

import { ROUTE_SEGMENTS } from './router/paths'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTE_SEGMENTS.about, element: <AboutPage /> },
      { path: ROUTE_SEGMENTS.applicant, element: <ApplicantPage /> },

      // AUTH ROUTES
      {
        path: ROUTE_SEGMENTS.auth.root,
        children: [
          { path: ROUTE_SEGMENTS.auth.login, element: <LoginPage /> },
          { path: ROUTE_SEGMENTS.auth.register, element: <RegisterPage /> },
        ],
      },

      // APP ROUTES
      {
        path: ROUTE_SEGMENTS.app.root,
        children: [
          { path: ROUTE_SEGMENTS.app.dashboard, element: <DashboardPage /> },
          { path: ROUTE_SEGMENTS.app.profile, element: <ProfilePage /> },
          { path: ROUTE_SEGMENTS.app.settings, element: <SettingsPage /> },
        ],
      },

      {
        path: ROUTE_SEGMENTS.admin.root,
        children: [{ path: ROUTE_SEGMENTS.admin.users, element: <AdminUsersPage /> }],
      },

      { path: ROUTE_SEGMENTS.error, element: <ErrorPage /> },
    ],
  },
])
