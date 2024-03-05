import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CitiesContext = createContext('');

const CitiesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(()=>{
    setIsLoading(true);
    const getData = async ()=>{
      const data = await axios.get(`http://localhost:8000/cities`);
      setCities(data.data);
    }
    getData(); 
    setIsLoading(false);
  },[]);

  const addCity = async (city) =>{   
    const res = await axios.post('http://localhost:8000/cities',city);    
    setCities(prevState => [...prevState,res.data])
  }
  const deleteCity = async (id) => {
    await axios.delete(`http://localhost:8000/cities/${id}`);
    setCities(cities=>cities.filter(city=>city.id !== id));
  }

  const getCity = async (id) => {    
    try {
      setIsLoading(true);  
      const data = await axios.get(`http://localhost:8000/cities?id=${id}`);
      setCurrentCity(data.data[0]);     
    } catch {
      console.log('Error')
    } finally {
      setIsLoading(false);
    }
  } 

    return (
        <CitiesContext.Provider value={{cities,isLoading,currentCity, getCity, addCity, deleteCity}}>            
                {children}
        </CitiesContext.Provider>
    )
}

const useCities = () => {
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error('CitiesContex was used outside CitiesProvider')
    return context;
}

export {CitiesContextProvider, useCities}
