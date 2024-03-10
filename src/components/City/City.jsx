import { useParams } from "react-router-dom";
import { useCities } from '../../context/CitiesContext';
import { useEffect } from "react";
import styles from './City.module.css';
import BackButton from "../BackButton/BackButton";
import Loader from "../Loader/Loader";


const formatDate = (date) => {
  if(!date) return;
  return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month:"long",
      year:"numeric",
  }).format(new Date(date));
}

function City() {
    const {id} = useParams();    
    const {getCity, currentCity, isLoading} = useCities();
    
    useEffect(()=>{
      getCity(id);
    },[id, getCity]);

    const {cityName, date, notes} = currentCity;

    {isLoading && <Loader />}

    return (
    <div className={styles.city}>
      <div>
        <p>City Name</p>
        <h2>{cityName}</h2>
      </div>
      <div>
        <p>You went to {cityName} on</p>
        <h3>{formatDate(date)}</h3>
      </div>
      <div>
        <p>Your notes</p>
        <h3>{notes}</h3>
      </div>
      <div>
        <p>Learn more</p>
        <a className={styles.link} href={`https://pl.wikipedia.org/wiki/${cityName}`}>Check out at wikipedia.</a>
      </div>
      <BackButton />
    </div>)
}

export default City