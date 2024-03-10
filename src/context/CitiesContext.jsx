import { createContext, useEffect, useContext, useReducer, useCallback } from "react";

import citiesReducer from "../reducer/citiesReducer";

export const CitiesContext = createContext('');

const INITIAL_STATE = {
  cities: [{
        "cityName": "Lisbon",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "date": "2027-10-31T15:59:59.138Z",
        "notes": "My favorite city so far!",
        "position": {
          "lat": 38.727881642324164,
          "lng": -9.140900099907554
        },
        "id": 73930385
      },
      {
        "cityName": "Madrid",
        "country": "Spain",
        "emoji": "🇪🇸",
        "date": "2027-07-15T08:22:53.976Z",
        "notes": "",
        "position": {
          "lat": 40.46635901755316,
          "lng": -3.7133789062500004
        },
        "id": 17806751
      },
      {
        "cityName": "Berlin",
        "country": "Germany",
        "emoji": "🇩🇪",
        "date": "2027-02-12T09:24:11.863Z",
        "notes": "Amazing 😃",
        "position": {
          "lat": 52.53586782505711,
          "lng": 13.376933665713324
        },
        "id": 98443197
      },
      {
        "cityName": "Nijar",
        "country": "Spain",
        "emoji": "🇪🇸",
        "date": "2023-04-03T07:47:59.202Z",
        "notes": "Beautifull weather outside",
        "position": {
          "lat": "36.967508314568164",
          "lng": "-2.13128394200588"
        },
        "id": 98443198
      },
      {
        "id": "a824",
        "cityName": "Warsaw",
        "country": "Poland",
        "date": "2024-01-31",
        "notes": "My place",
        "emoji": "",
        "position": {
          "lat": "52.23318594324716",
          "lng": "20.928955078125004"
        }      
  }],
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
        // const data = await axios.get(`http://localhost:8000/cities`);
        dispatch({type:'loaded', payload:INITIAL_STATE.cities});
      } catch (err) {
        dispatch({type:'rejected', payload:err})
      }
    }
    getData(); 
  },[]);

  const addCity = async (city) =>{   
    try{      
      // const res = await axios.post('http://localhost:8000/cities',city);    
      // dispatch({type:'addCity', payload:res.data})
    } catch (err) {
      dispatch({type:'rejected', payload:err})
    }    
  }
  const deleteCity = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/cities/${id}`);
      dispatch({type:'deleteCity', payload:id})
    } catch (err) {
      dispatch({type:'rejected', payload:err})
    }  
  }
  const getCity = useCallback(
    async (id) => {    
      try {       
        // const data = await axios.get(`http://localhost:8000/cities?id=${id}`);
        const city = cities.filter((city)=>city.id == id);
        dispatch({type:'currentCity',payload:city[0]})
      } catch(err) {
        dispatch({type:'rejected', payload:err})
      } 
    },[])

  const getCountry = async (cityName) => {
    try {
      dispatch({type:'loading'})
      // const res = await axios.get(`https://restcountries.com/v3.1/name/${cityName}?fullText=true`);
      // dispatch({type:'currentCountry', payload:res.data[0]})
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
