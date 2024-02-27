import { useParams, useSearchParams } from "react-router-dom";

function City({cities}) {
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const currentCity = cities.find(city=> city.id == id);

  return (
    <div className="city">
      {currentCity.cityName}
      {`Position lat:${lat}, lng:${lng}`}
      <button onClick={()=>setSearchParams({lat:20,lng:30})}>Change</button>
    </div>
  )
}

export default City