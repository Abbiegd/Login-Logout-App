import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './loginActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch(); // dispatch hook
  const navigate = useNavigate(); // navigation hook
  const [username, setUsername] = useState(''); // state for username, password, login status, error message and error modal
  const [password, setPassword] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [error, setError] = useState(''); 
  const [showErrorModal, setShowErrorModal] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault(); // to prevent default form submission

    if (username.trim() !== '' && password.trim() !== '') {
      dispatch(loginSuccess()); // login success action
      setIsLoggedIn(true); 
    } else {
      setError('Please enter valid username and password.'); // set error message
      setShowErrorModal(true); // show error modal
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); // Reset username field
    setPassword(''); // Reset password field
    setShowErrorModal(false); // make sure error modal is closed on logout
    navigate('/'); // navigate to default route
  };

  // function to close error modal
  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="login-container">
      {!isLoggedIn && !showErrorModal && (
        <h2 className='login-text'>Login</h2> // Show login heading if not logged in and no error
      )}
      {isLoggedIn && (
        <div>
          <h2 className='login-text'>Welcome!</h2>
          <h3 className='successful-login'>You have successfully logged in</h3> 
          <button className='logout-button' onClick={handleLogout}>Logout</button>
        </div> // display successful login message
      )}
      {!isLoggedIn && !showErrorModal && (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field1"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field2"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
      {showErrorModal && (
        <div className="error-modal">
          <p className="error-message">{error}</p>
          <button onClick={closeModal} className="back-button">Back to Login</button>
        </div> // display error message
      )}
    </div>
  );
};

export default Login;