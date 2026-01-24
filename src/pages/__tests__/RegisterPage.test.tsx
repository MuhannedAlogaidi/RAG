import { render, screen } from '@testing-library/react';
import RegisterPage from '../auth/RegisterPage';

describe('RegisterPage', () => {
  it('renders register page', () => {
    render(<RegisterPage />);
    expect(screen.getByTestId('page-register')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });
});
