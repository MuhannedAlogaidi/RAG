import { render, screen } from '@testing-library/react'
import SettingsPage from '../app/SettingsPage'

describe('SettingsPage', () => {
  it('renders settings page', () => {
    render(<SettingsPage />)
    expect(screen.getByTestId('page-settings')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })
})
