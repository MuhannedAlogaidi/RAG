import { createBrowserRouter } from 'react-router'
import { AppLayout } from './layouts/AppLayout'
import { HomePage } from './pages/HomePage'
import { ApplicantPage } from './pages/ApplicantPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'apply',
        element: <ApplicantPage />,
      },
    ],
  },
])
