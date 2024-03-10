import { useState } from 'react';
import style from './LoginPage.module.css';
import { useAuth } from '../../context/Auth.jsx'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email.length != 3 && password.length != 3) login({email,password});
    setEmail('');
    setPassword('');
    navigate('/app');
  }

  return (
    <main className={style.loginPage}>      
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email address</label>
        <input id='email' type="email" onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input id='password' type="password" onChange={e => setPassword(e.target.value)}/>
        <button className="cta">Login</button>
      </form>
    </main>
  )
}

export default LoginPage