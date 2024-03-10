import { createContext, useEffect, useContext, useReducer, useCallback } from "react";
import axios from "axios";
import citiesReducer from "../reducer/citiesReducer";

export const CitiesContext = createContext('');

const INITIAL_STATE = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error:'',
  currentCountry:{}
};

const CitiesContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [{cities,isLoading,currentCity,currentCountry}, dispatch] = useReducer(citiesReducer,INITIAL_STATE);

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
  const getCity = useCallback(
    async (id) => {    
      try {       
        const data = await axios.get(`http://localhost:8000/cities?id=${id}`);
        dispatch({type:'currentCity',payload:data.data[0]})
      } catch(err) {
        dispatch({type:'rejected', payload:err})
      } 
    },[])

  const getCountry = async (cityName) => {
    try {
      dispatch({type:'loading'})
      const res = await axios.get(`https://restcountries.com/v3.1/name/${cityName}?fullText=true`);
      dispatch({type:'currentCountry', payload:res.data[0]})
    }catch (err) {
      dispatch({type:'rejected', payload:err})
    }
  }
  

    return (
        <CitiesContext.Provider value={{cities,isLoading,currentCity, getCity, addCity, deleteCity, getCountry, currentCountry}}>            
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
