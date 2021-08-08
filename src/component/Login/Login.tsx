import React from 'react';
import './Login.css';
import { loginUrl } from '../../api/spotify';

function Login() {
  return (
    <div className="login">
      <h1>l</h1>
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
