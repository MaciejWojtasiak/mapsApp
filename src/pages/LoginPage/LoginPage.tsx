import { useState } from 'react';
import style from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={style.loginPage}>      
      <form>
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