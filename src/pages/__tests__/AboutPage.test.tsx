import { render, screen } from '@testing-library/react';
import AboutPage from '../AboutPage';

describe('AboutPage', () => {
  it('renders about page', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('page-about')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
