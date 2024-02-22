import styles from './CountryItem.module.css';

function CountryItem({country}) {
  return (
    <div className={styles.countryItem}>{country}</div>
  )
}

export default CountryItem