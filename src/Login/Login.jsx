import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { joinKongs } from '../api/api';
import Loading from './Loading'; // Import component Loading

const LoginWithTelegram = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = async () => {
    const queryId = 'autoQueryId'; // Giá trị queryId của bạn
    const referenceId = 'autoReferenceId'; // Giá trị referenceId của bạn

    setError('');
    setLoading(true);

    try {
      console.log("Submitting login form with data:", { queryId, referenceId });

      const result = await joinKongs(queryId, referenceId);
      console.log("API response:", result);
      if (result.token) {
        console.log("Login successful, token:", result.token);
        console.log("User data:", result.data); 
        localStorage.setItem('token', result.token);
        localStorage.setItem('userData', JSON.stringify(result.data)); 
        setSuccessMessage('Login successful! Redirecting to home page...'); 
        setTimeout(() => {
          navigate('/home');
        }, 60000); // Thời gian chờ hiển thị màn hình loading (1 phút)
      } else {
        console.error("Login failed, message:", result.message);
        setError(result.message || 'Login failed');
        setLoading(false); // Dừng quay tròn nếu có lỗi
        setTimeout(() => {
          navigate('/404');
        }, 2000);
      }
    } catch (error) {
      console.error('Error during login:', error.message || error);
      setError(error.message || 'Login failed');
      setLoading(false); // Dừng quay tròn nếu có lỗi
      setTimeout(() => {
        navigate('/404');
      }, 2000);
    }
  };

  if (loading) {
    return <Loading />; // Hiển thị màn hình loading
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Login with Telegram</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-full font-bold flex items-center justify-center"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginWithTelegram;
