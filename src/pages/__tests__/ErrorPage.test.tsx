import { render, screen } from '@testing-library/react';
import ErrorPage from '../errors/ErrorPage';

describe('ErrorPage', () => {
  it('renders error page', () => {
    render(<ErrorPage />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
