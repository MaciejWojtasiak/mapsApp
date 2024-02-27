import styles from './CityList.module.css';
import CityItem from '../CityItem/CityItem';

function CityList({cities, handleDelete}) {
    
 {if(!cities.length) return <div>No cities yet.</div>}

  return (
    <ul className={styles.cityList}>
        {cities.map((city)=>{
            return (
                <CityItem
                 key={city.id} 
                 id={city.id}
                 cityName={city.cityName} 
                 date={city.date} 
                 emoji={city.emoji} 
                 handleDelete={handleDelete}  
                 lat={city.position.lat}              
                 lng={city.position.lng}              
                 />
            )            
        })}
    </ul>
  )
}

export default CityList