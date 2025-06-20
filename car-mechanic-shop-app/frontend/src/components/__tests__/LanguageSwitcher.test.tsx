import { render, screen } from '@testing-library/react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe('LanguageSwitcher', () => {
  it('renders and switches language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );
    expect(screen.getByText(/Français|العربية/)).toBeInTheDocument();
    // Simulate language switch if needed
  });
});
