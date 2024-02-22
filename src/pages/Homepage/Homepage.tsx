import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';


function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>You travel the world. <br/> WorldMaps keeps track of your adventures.</h1>
        <p>A world map that tracks your footseps into every city you can think of.</p>
        <Link to={'/app'} className='cta'>Start tracking</Link>
      </section>
    </main>
  )
}

export default Homepage