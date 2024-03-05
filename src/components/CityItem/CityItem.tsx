import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import {useCities} from '../../context/CitiesContext';

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month:"long",
        year:"numeric",
    }).format(new Date(date));
}

function CityItem({id, cityName, date, emoji,lat, lng}) {
  const {currentCity, deleteCity} = useCities();

  const handleClick = (e)=>{
    e.preventDefault()
    deleteCity(id)
  }
 return (
    <li>       
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={`${styles.cityItem} ${currentCity.id == id ? styles["city--active"]:''} `} >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>   
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button> 
      </Link>         
    </li>
  )
}

export default CityItem