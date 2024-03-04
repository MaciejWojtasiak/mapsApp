
import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import { TileLayer } from 'react-leaflet/TileLayer'
import { useEffect, useState } from "react";
import {useCities} from '../../context/CitiesContext';
import useGeolocation from '../../hooks/useGeolocation';
import useUrlPosition from '../../hooks/useUrlPosition';


function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([50,10]); 
  const { isLoading:isLoadingPosition, position:geolocationPosition, getPosition } = useGeolocation();
  const [lat, lng] = useUrlPosition();

  useEffect(()=>{
      if(lat && lng) setMapPosition([lat,lng]);
  },[lat,lng]);

  useEffect(()=>{
    if(geolocationPosition) {
      setMapPosition([geolocationPosition.lat,geolocationPosition.lng]);
    }
  },[geolocationPosition])

   
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <button onClick={getPosition} className={styles.button}>{isLoadingPosition ? 'Loading...':'Use your position'   }</button>}
      <MapContainer center={mapPosition} zoom={20} scrollWheelZoom={true} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city)=>{
        const {position} = city;
        return <Marker key={city.id} position={[position.lat, position.lng]}>
          <Popup>{city.cityName}</Popup>
        </Marker>
      })}
      <ChangeCenter position={mapPosition}/>  
      <DetectClick />
    </MapContainer>
    </div>
  )
}

function ChangeCenter({position}) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}


export default Map