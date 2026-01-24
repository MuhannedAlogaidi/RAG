import { render, screen } from '@testing-library/react'
import AdminUsersPage from '../admin/AdminUsersPage'

describe('AdminUsersPage', () => {
  it('renders admin users page', () => {
    render(<AdminUsersPage />)
    expect(screen.getByTestId('page-admin-users')).toBeInTheDocument()
    expect(screen.getByText('Admin Users')).toBeInTheDocument()
  })
})
