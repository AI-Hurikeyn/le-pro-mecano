import { render, screen } from '@testing-library/react';
import { Header } from '../layout/Header';
import { UserProvider } from '../../context/UserContext';

describe('Header', () => {
  it('renders the brand name', () => {
    render(
      <UserProvider>
        <Header />
      </UserProvider>
    );
    expect(screen.getByText(/LE PRO MECANO/i)).toBeInTheDocument();
  });
});
