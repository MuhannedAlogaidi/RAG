import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApplicantPage from './pages/ApplicantPage'
import RouteErrorPage from './pages/RouteErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'applicant', element: <ApplicantPage /> },
    ],
  },
])
