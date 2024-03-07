import { NavLink,useNavigate } from "react-router-dom";
import styles from './Navigation.module.css';
import { useAuth } from '../../context/Auth.jsx'

function Navigation() {  
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/');
  }

  return (
    <nav className={styles.navbar}>
        <div className="logo"><NavLink to={'/'} className={styles.link}>MapsApp</NavLink></div>
        <ul>
            <li><NavLink to={'product'} className={styles.link}>Product</NavLink></li>
            <li><NavLink to={'pricing'} className={styles.link}>Pricing</NavLink></li>
            {!user && <li><NavLink to={'login'} className='cta'>LOG IN</NavLink></li>}
            {user && <li><NavLink to={'app'} className={styles.link}>{user.username}</NavLink></li>}
            {user && <button className='cta' onClick={handleLogout}>LOG OUT</button>}
        </ul>
    </nav>
  )
}

export default Navigation