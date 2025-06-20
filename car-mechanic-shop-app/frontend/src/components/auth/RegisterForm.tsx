import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { register } from '../../api/auth';

export const RegisterForm = ({ onSwitch }: { onSwitch: () => void }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Password validation rules
  const passwordRules = [
    { key: 'password_rule_length', test: (pw: string) => pw.length >= 8 },
    { key: 'password_rule_upper',  test: (pw: string) => /[A-Z]/.test(pw) },
    { key: 'password_rule_lower',  test: (pw: string) => /[a-z]/.test(pw) },
    { key: 'password_rule_number', test: (pw: string) => /[0-9]/.test(pw) },
    { key: 'password_rule_special',test: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
  ];
  const [validations, setValidations] = useState(
    passwordRules.map(rule => ({ ...rule, valid: false }))
  );

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setValidations(
      passwordRules.map(rule => ({ ...rule, valid: rule.test(value) }))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(username, email, password);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSwitch();
      }, 1800);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-50 rounded-lg shadow-lg border border-green-200 text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-2 text-green-700">
          {t('registration_thank_you_title')}
        </h2>
        <p className="text-gray-900">{t('registration_success_message')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200 space-y-6">
      <h2 className="text-3xl font-extrabold text-center text-yellow-600">
        {t('registration_title')}
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded border border-red-200 text-center">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            {t('username')}
          </label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder={t('username_placeholder')}
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('email')}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t('email_placeholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
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
            onChange={e => handlePasswordChange(e.target.value)}
            required
            aria-describedby="password-requirements"
            className="border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
      </div>

      <ul id="password-requirements" className="text-sm px-2" aria-live="polite">
        {validations.map(rule => (
          <li key={rule.key} className={`flex items-center gap-2 ${rule.valid ? 'text-green-600' : 'text-gray-600'}`}>
            <span aria-hidden="true">{rule.valid ? '✔️' : '❌'}</span>
            {t(rule.key)}
          </li>
        ))}
      </ul>

      <Button
        variant="primary"
        type="submit"
        className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition duration-200"
        disabled={loading || validations.some(r => !r.valid)}
      >
        {loading ? t('registering') : t('register')}
      </Button>

      <div className="pt-4 text-center text-gray-700">
        <span>{t('already_have_account_switch')} </span>
        <button
          type="button"
          className="text-yellow-600 hover:text-yellow-700 font-medium underline"
          onClick={onSwitch}
        >
          {t('login')}
        </button>
      </div>
    </form>
  );
};
