import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { joinKongs } from '../api/api';
import Loading from './Loading'; // Import component Loading

const LoginWithTelegram = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái đăng nhập
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      setError('');

      const queryId = 'query_id=AAGv1l0ZAAAAAK_WXRn-aDzn&user=%7B%22id%22%3A425580207%2C%22first_name%22%3A%22Tran%22%2C%22last_name%22%3A%22Hung%22%2C%22username%22%3A%22tdh4vn%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720969906&hash=311e03bf387c3b250c73c3228b1a18f09df8f2631df90145fb077e0fad853cd2';
      const referenceId = '425580207';

      try {
        console.log("Submitting login form with data:", { queryId, referenceId });
        const result = await joinKongs(queryId, referenceId);
        console.log("API response:", result);

        if (result && result.success) {
          console.log("Login successful");
          localStorage.setItem('success', result.success); 
          setTimeout(() => {
            navigate('/home');
          }, 2000); 
        } else {
          console.error("Login failed, message:", result.message);
          setError(result.message || 'Login failed');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error during login:', error.message || error);
        setError(error.message || 'Login failed');
        setLoading(false);
      }
    };

    autoLogin();
  }, [navigate]);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginWithTelegram;
