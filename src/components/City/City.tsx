import { useParams, useSearchParams } from "react-router-dom";
import {useCities} from '../../context/CitiesContext';
import { useEffect } from "react";

function City() {
    const {id} = useParams();    
    const {getCity, currentCity} = useCities();
    
    useEffect(()=>{
      getCity(id);
    },[id])

    


  return (
    <div className="city">
     {currentCity && currentCity.cityName}
    </div>
  )
}

export default City