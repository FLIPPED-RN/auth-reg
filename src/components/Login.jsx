import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Login.css';

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/proprietors', {
        login,
        password,
      });

      console.log('Successful login response:', response.data);

      onLogin();
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
    
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Status code:', err.response.status);
        console.error('Status text:', err.response.statusText);
    
        // Обработка валидационной ошибки
        if (Array.isArray(err.response.data.detail)) {
          console.error('Validation errors:', err.response.data.detail);
          // Ваш код для обработки валидационных ошибок
        } else {
          console.error('Server error:', err.response.data.message);
        }
      } else if (err.request) {
        console.error('Request made, but no response received.');
      } else {
        console.error('Error setting up the request:', err.message);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="login-h">Login</h1>
        <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {error && <p>Error: {error}</p>}
        <p>Если вы не зарегистрированны, <Link to="/register">нажмите здесь</Link>.</p>
      </div>
    </>
  );
};

export default Login;
