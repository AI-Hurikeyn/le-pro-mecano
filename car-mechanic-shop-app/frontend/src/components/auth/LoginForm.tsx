import { useState } from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { login } from '../../api/auth';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

export const LoginForm = ({ onSwitch, onSuccess }: { onSwitch: () => void; onSuccess?: () => void }) => {
  const { t } = useTranslation();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { setUser } = useUser();

  function getPhotoUrl(email: string) {
    if (!email) return undefined;
    const hash = window.btoa(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const user = await login(emailOrUsername, password);
      setUser({
        username: user.username,
        email: user.email,
        id: user.id,
        photoUrl: getPhotoUrl(user.email),
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        if (onSuccess) onSuccess();
      }, 1200);
    } catch (err: unknown) {
      setError((err as Error).message || t('login_error'));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 text-center animate-fade-in bg-yellow-50 rounded-lg border border-yellow-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">{t('login_successful')}</h2>
        <p className="text-gray-800">{t('welcome')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200 space-y-6">
      {/* Form title */}
      <h2 className="text-3xl font-extrabold text-center text-yellow-600">
        {t('login')}
      </h2>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded border border-red-200 text-center">
          {t(error) /* error messages should have translation keys */}
        </div>
      )}

      {/* Input fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700">
            {t('email_or_username')}
          </label>
          <Input
            id="emailOrUsername"
            name="emailOrUsername"
            type="text"
            placeholder={t('email_or_username_placeholder')}
            value={emailOrUsername}
            onChange={e => setEmailOrUsername(e.target.value)}
            required
            className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            {t('password')}
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={t('password_placeholder')}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Forgot password */}
      <div className="text-right">
        <button
          type="button"
          className="text-sm text-gray-600 hover:text-yellow-600"
          onClick={() => {/* TODO: forgot password handler */}}
        >
          {t('forgot_password')}
        </button>
      </div>

      {/* Submit button */}
      <Button
        variant="primary"
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition duration-200"
      >
        {loading ? t('logging_in') : t('login')}
      </Button>

      {/* Switch to register */}
      <div className="pt-4 text-center text-gray-700">
        <span>{t('no_account')} </span>
        <button
          type="button"
          className="text-yellow-600 hover:text-yellow-700 font-medium underline"
          onClick={onSwitch}
        >
          {t('register')}
        </button>
      </div>
    </form>
  );
};
