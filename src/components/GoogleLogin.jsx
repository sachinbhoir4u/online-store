import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const GoogleLoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleLoginSuccess,
    });

    // Render the Google Sign-In button into the div below
    window.google.accounts.id.renderButton(
      document.getElementById('google-sign-in-button'),
      {
        theme: 'outline', 
        size: 'large',
      }
    );
  }, []);

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    dispatch(loginWithGoogle(token));  
    navigate('/home');
  };

//   const handleLoginFailure = (error) => {
//     console.error('Login Failed:', error);
//   };

  return (
    <div className="google-button-container">
      <div id="google-sign-in-button" className='google-button'></div>
    </div>
  );
};

export default GoogleLoginComponent;
