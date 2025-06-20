import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function VerifyEmail() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setMessage(t('verify_email_missing_token'));
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${apiUrl}/api/auth/verify-email?token=${token}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setStatus('success');
          setMessage(t('verify_email_success'));
          setTimeout(() => navigate('/'), 3000);
        } else {
          setStatus('error');
          setMessage(data.error || t('verify_email_error'));
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage(t('verify_email_error'));
      });
  }, [searchParams, t, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t('verify_email_title')}
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          {status === 'pending' && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{t('verify_email_pending')}</p>
            </div>
          )}
          {status === 'success' && (
            <div className="text-center">
              <div className="rounded-full h-12 w-12 bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-600 font-medium">{message}</p>
              <p className="text-sm text-gray-500 mt-2">{t('redirecting_to_home')}</p>
            </div>
          )}
          {status === 'error' && (
            <div className="text-center">
              <div className="rounded-full h-12 w-12 bg-red-100 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-600 font-medium">{message}</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 w-full flex justify-center py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded"
              >
                {t('go_to_home')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
