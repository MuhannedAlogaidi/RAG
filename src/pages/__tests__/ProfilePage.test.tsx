import { render, screen } from '@testing-library/react'
import ProfilePage from '../app/ProfilePage'

describe('ProfilePage', () => {
  it('renders profile page', () => {
    render(<ProfilePage />)
    expect(screen.getByTestId('page-profile')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
