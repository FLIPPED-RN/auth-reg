import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/proprietors', {
        name,
        surname,
        login,
        password,
      });

      console.log('Success:', response.data);
      setSuccess('Registration successful!');
      // Вызовите функцию onRegister переданную через props
      onRegister();
    } catch (err) {
      console.error('Error:', err.response);
      setError(err.response ? err.response.data.detail : 'Something went wrong.');
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
      <br />
      <input type="text" placeholder="Login" onChange={(e) => setLogin(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
      <br />
      {success && <p>{success}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Register;
