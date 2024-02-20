import { Link } from "react-router-dom";
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navbar}>
        <div className="logo"><Link to={'/'} className={styles.link}>MapsApp</Link></div>
        <ul>
            <li><Link to={'product'} className={styles.link}>Product</Link></li>
            <li><Link to={'pricing'} className={styles.link}>Pricing</Link></li>
            <li><Link to={'login'} className={styles.loginBtn}>LOG IN</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation