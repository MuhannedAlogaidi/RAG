import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/DashboardPage';

describe('DashboardPage', () => {
  it('renders dashboard page', () => {
    render(<DashboardPage />);
    expect(screen.getByTestId('page-dashboard')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
