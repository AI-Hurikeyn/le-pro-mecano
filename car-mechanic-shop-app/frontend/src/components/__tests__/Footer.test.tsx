import { render, screen } from '@testing-library/react';
import { Footer } from '../layout/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );
    expect(screen.getByText(/LE PRO MECANO/i)).toBeInTheDocument();
  });
});
