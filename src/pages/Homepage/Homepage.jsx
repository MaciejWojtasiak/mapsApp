import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import { useAuth } from '../../context/Auth.jsx'


function Homepage() {
  const { isAuthenticated } = useAuth();
  return (
    <main className={styles.homepage}>
      <section>
        <h1>You travel the world. <br/> WorldMaps keeps track of your adventures.</h1>
        <p>A world map that tracks your footseps into every city you can think of.</p>
        <Link to={`${isAuthenticated ? '/app' : '/login'}`} className='cta'>Start tracking</Link>
      </section>
    </main>
  )
}

export default Homepage