import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInitDataRaw } from '@telegram-apps/sdk-react';
import Loading from './Loading'; 

const LoginWithTelegram = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const data = useInitDataRaw();

  useEffect(() => {
    const autoLogin = async () => {
      // Check if the user is already logged in
      // const isLoggedIn = sessionStorage.getItem('success');
      // if (isLoggedIn) {
      //   console.log('User already logged in, navigating to home');
      //   navigate('/home');
      //   return;
      // }

      if (data && data.result) {
        console.log('Data result:', data.result);
        const queryId = 'query_id=AAGv1l0ZAAAAAK_WXRn-aDzn&user=%7B%22id%22%3A425580207%2C%22first_name%22%3A%22Tran%22%2C%22last_name%22%3A%22Hung%22%2C%22username%22%3A%22tdh4vn%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720969906&hash=311e03bf387c3b250c73c3228b1a18f09df8f2631df90145fb077e0fad853cd2';
        const referenceId = '425580207';

        console.log(`queryId: ${queryId}`);
        console.log(`referenceId: ${referenceId}`);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ query_id: queryId, reference_id: referenceId }),
        };
        try {
          console.log('Submitting login form with data:', { queryId, referenceId });
          const response = await fetch('https://api-kongs.thammer.fun/api/join', requestOptions);

          console.log('Raw response status:', response.status);
          const result = await response.json();
          console.log('Parsed JSON response:', result);

          if (!response.ok || !result) {
            throw new Error(result ? result.message : 'Error joining KONGS');
          }

          if (result.success) {
            console.log('Login successful, success:', result.success);
            sessionStorage.setItem('success', result.success);
            if (result.data) {
              // setUserData(user);
              localStorage.setItem('userData', JSON.stringify(result.data));
            }
            console.log('Navigating to home in 2 seconds...');
            setTimeout(() => {
              console.log('Navigating to home now');
              navigate('/home');
            }, 2000); // 2 giây delay trước khi điều hướng đến trang home
          } else {
            console.error('Login failed, message:', result ? result.message : 'Unknown error');
            setError(result ? result.message : 'Login failed');
            setLoading(false);
          }
        } catch (error) {
          console.error('Error during login:', error.message || error);
          setError(error.message || 'Login failed');
          setLoading(false);
        }
      } else {
        console.error('data.result is undefined');
        setLoading(false);
      }
    };

    autoLogin();
  }, [data, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Login with Telegram</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginWithTelegram;
