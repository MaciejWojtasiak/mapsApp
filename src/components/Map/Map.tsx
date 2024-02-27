import { useNavigate, useSearchParams } from "react-router-dom";
import style from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const navigate = useNavigate();
   
  return (
    <div className={style.mapContainer} onClick={()=>navigate('form')}>
      Map
      Positon {lat} , {lng}
    </div>
  )
}

export default Map