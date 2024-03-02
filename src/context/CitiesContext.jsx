import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CitiesContext = createContext('');

const CitiesContextProvider = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cities, setCities] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      const data = await axios.get(`http://localhost:8000/cities`);
      setCities(data.data);
    }
    getData(); 
  },[])

    return (
        <CitiesContext.Provider value={cities}>            
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
