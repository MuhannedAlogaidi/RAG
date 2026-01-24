import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders nav links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Applicant' })).toBeInTheDocument()
  })
})
