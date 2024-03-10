import styles from './LoaderFull.module.css';

function LoaderFull() {
  return (
    <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default LoaderFull;