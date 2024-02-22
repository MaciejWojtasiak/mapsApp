import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navbar}>
        <div className="logo"><NavLink to={'/'} className={styles.link}>MapsApp</NavLink></div>
        <ul>
            <li><NavLink to={'product'} className={styles.link}>Product</NavLink></li>
            <li><NavLink to={'pricing'} className={styles.link}>Pricing</NavLink></li>
            <li><NavLink to={'login'} className='cta'>LOG IN</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation