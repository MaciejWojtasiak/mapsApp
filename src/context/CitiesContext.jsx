import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import citiesReducer from "../reducer/citiesReducer";
export const CitiesContext = createContext('');

const INITIAL_STATE = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error:''
};

const CitiesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  const [{cities,isLoading,currentCity}, dispatch] = useReducer(citiesReducer,INITIAL_STATE);

  useEffect(()=>{
    const getData = async ()=>{
      try{
        dispatch({type:'loading'});
        const data = await axios.get(`http://localhost:8000/cities`);
        dispatch({type:'loaded', payload:data.data});
      } catch (err) {
        dispatch({type:'rejected', payload:err})
      }
    }
    getData(); 
  },[]);

  const addCity = async (city) =>{   
    try{      
      const res = await axios.post('http://localhost:8000/cities',city);    
      dispatch({type:'addCity', payload:res.data})
    } catch (err) {
      dispatch({type:'rejected', payload:err})
    }    
  }
  const deleteCity = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cities/${id}`);
      dispatch({type:'deleteCity', payload:id})
    } catch (err) {
      dispatch({type:'rejected', payload:err})
    }  
  }

  const getCity = async (id) => {    
    try {
       
      const data = await axios.get(`http://localhost:8000/cities?id=${id}`);
      // setCurrentCity(data.data[0]);     
    } catch {
      console.log('Error')
    } finally {
      
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
