import { render, screen } from '@testing-library/react';
import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage', () => {
  it('renders not found page', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
