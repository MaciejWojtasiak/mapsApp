import styles from './CountriesList.module.css';
import CountryItem from '../CountryItem/CountryItem';
import {useCities} from '../../context/CitiesContext';

function CountriesList() {
  const {cities, isLoading} = useCities();
    
 {if(isLoading) return <div>Loading...</div>}
 {if(!cities.length) return <div>No countries yet.</div>}

 const countries = cities.reduce((arr, city) => {
  if(!arr.map(el=>el.country).includes(city.country)) {
    return [...arr, {country:city.country, emoji:city.emoji}]
  }else {
    return arr;
  }
 },[]);
 

  return (
    <ul className={styles.countriesList}>
        {countries.map((country, index)=>{          
            return (
                <CountryItem key={index} country={country.country}/>
            )            
        })}
    </ul>
  )
}

export default CountriesList