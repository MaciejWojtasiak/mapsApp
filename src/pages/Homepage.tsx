import styles from './Homepage.module.css';


function Homepage() {
  return (
    <div className={styles.homepage}>
      <section>
        <h1>You travel the world. <br/> WorldMaps keeps track of your adventures.</h1>
        <p>A world map that tracks your footseps into every city you can think of.</p>
        <button className={styles.button}>Start tracking</button>
      </section>
    </div>
  )
}

export default Homepage