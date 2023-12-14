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
      const response = await axios.get('http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/proprietors/by/id?proprietorID', {
  login,
  password,
}, {
  headers: {
    'Content-Type': 'application/json',
  },
});

      console.log('Successful login response:', response.data);

      onLogin();
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log('Server responded with an error:', error.response.data);
        setError('Ошибка входа. Пожалуйста, проверьте правильность логина и пароля.');
      } else {
        console.error('Ошибка отправки запроса:', error.message);
        setError('Ошибка отправки запроса. Пожалуйста, попробуйте еще раз.');
      }
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="login-h">Sign In</h1>
        <input className='input-main' type="text" placeholder="Введите логин" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input className="input-main" type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-btn" onClick={handleLogin}>Войти</button>
        {error && <p className="error-message">{error}</p>}
        <p>Если вы не зарегистрированы, <Link to="/register">нажмите здесь</Link>.</p>
      </div>
    </>
  );
};

export default Login;
