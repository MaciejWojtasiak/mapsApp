import styles from './CountriesList.module.css';
import CountryItem from '../CountryItem/CountryItem';

function CountriesList({countries}) {
    
 {if(!countries.length) return <div>No countries yet.</div>}

  return (
    <ul className={styles.countriesList}>
        {countries.map((country)=>{
            return (
                <CountryItem />
            )            
        })}
    </ul>
  )
}

export default CountriesList