import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppProviders } from '../AppProviders'

describe('AppProviders', () => {
  it('renders children', () => {
    render(
      <AppProviders>
        <div>child</div>
      </AppProviders>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
  })
})
