import { useParams } from 'react-router-dom';
import styles from './Country.module.css';

function Country() {
    const {country} = useParams();
  return (
    <div className={styles.country}>{country}</div>
  )
}

export default Country