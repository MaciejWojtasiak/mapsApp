import { Link } from 'react-router-dom';
import styles from './CountryItem.module.css';

function CountryItem({country}) {
  return (   
      <Link to={`${country.toLowerCase()}`} className={styles.countryItem}>
        {country}
      </Link> 
  )
}

export default CountryItem