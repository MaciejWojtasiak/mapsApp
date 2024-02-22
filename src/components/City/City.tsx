import { useParams } from "react-router-dom"

function City({cities}) {
    const {id} = useParams();
    const currentCity = cities.find(city=> city.id == id)
  return (
    <div className="city">{currentCity.cityName}</div>
  )
}

export default City