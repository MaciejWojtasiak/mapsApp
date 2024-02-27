import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month:"long",
        year:"numeric",
    }).format(new Date(date));
}

function CityItem({id, cityName, date, emoji, handleDelete,lat, lng}) {
 return (
    <li>       
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>   
        <button className={styles.deleteBtn} onClick={()=>{handleDelete(id)}}>&times;</button> 
      </Link>         
    </li>
  )
}

export default CityItem