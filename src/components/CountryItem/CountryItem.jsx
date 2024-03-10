// import { Link } from 'react-router-dom';
import styles from './CountryItem.module.css';

function CountryItem({country}) {
  return (   
      <li to={`${country.toLowerCase()}`} className={styles.countryItem}>
        {country}
      </li> 
  )
}

export default CountryItem