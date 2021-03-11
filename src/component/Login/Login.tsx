import React from 'react';
import './Login.css';
import { loginUrl } from '../../api/spotify';

function Login() {
  return (
    <div className="login">
      <h1>l</h1>
      {/* eslint-disable-next-line max-len */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
