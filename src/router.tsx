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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'applicant', element: <ApplicantPage /> },

      // AUTH ROUTES
      {
        path: 'auth',
        children: [
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
        ],
      },

      // APP ROUTES
      {
        path: 'app',
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'settings', element: <SettingsPage /> },
        ],
      },

      // ADMIN ROUTES
      {
        path: 'admin',
        children: [{ path: 'users', element: <AdminUsersPage /> }],
      },

      // OPTIONAL ERROR PAGE
      { path: 'error', element: <ErrorPage /> },
    ],
  },
])
