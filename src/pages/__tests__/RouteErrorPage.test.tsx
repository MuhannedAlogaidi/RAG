import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider, Outlet } from 'react-router-dom'

import RouteErrorPage from '../RouteErrorPage'
beforeEach(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

function RootWithOutlet() {
  return (
    <div>
      root
      <Outlet />
    </div>
  )
}

describe('RouteErrorPage (integration)', () => {
  it('renders Not Found for unknown routes (404)', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <RootWithOutlet />,
          errorElement: <RouteErrorPage />,
          children: [{ index: true, element: <div>home</div> }],
        },
      ],
      { initialEntries: ['/this-route-does-not-exist'] }
    )

    render(<RouterProvider router={router} />)

    expect(await screen.findByTestId('page-not-found')).toBeInTheDocument()
  })

  it('renders generic error when a route throws', async () => {
    const Thrower = () => {
      throw new Error('boom')
    }

    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <RootWithOutlet />,
          errorElement: <RouteErrorPage />,
          children: [{ path: 'boom', element: <Thrower /> }],
        },
      ],
      { initialEntries: ['/boom'] }
    )

    render(<RouterProvider router={router} />)

    expect(await screen.findByTestId('page-route-error')).toBeInTheDocument()
  })
})
