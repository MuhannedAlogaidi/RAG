import { render, screen } from '@testing-library/react';
import LoginPage from '../auth/LoginPage';

describe('LoginPage', () => {
  it('renders login page', () => {
    render(<LoginPage />);
    expect(screen.getByTestId('page-login')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
