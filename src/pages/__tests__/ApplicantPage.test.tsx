import { render, screen } from '@testing-library/react';
import ApplicantPage from '../ApplicantPage';

describe('ApplicantPage', () => {
  it('renders applicant page content', () => {
    render(<ApplicantPage />);
    expect(screen.getByTestId('page-applicant')).toBeInTheDocument();
    expect(screen.getByText('Applicant')).toBeInTheDocument();
  });
});
