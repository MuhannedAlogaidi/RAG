import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ApplicantForm } from './ApplicantForm'

describe('ApplicantForm', () => {
  it('renders the form', () => {
    render(<ApplicantForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
})
