import { useParams } from 'react-router-dom';
import styles from './Country.module.css';
import { useEffect } from 'react';
import { useCities } from '../../context/CitiesContext';
import Loader from '../Loader/Loader';


function Country() {
  const {country} = useParams();
  const { getCountry, isLoading, currentCountry } = useCities();    

  useEffect(()=>{
    getCountry(country);
  },[country]);

  // const {name, capital, flags, languages, region, population} = currentCountry;  
  // const commonName  = name.commonName ? name.commonName : '';
  // const flag = flags.svg ? flags.svg : '';

  {if(isLoading) return <Loader />}


  return (
    <div className={styles.country}>
      <p>{country}</p>
    </div>
  )
}

export default Country;