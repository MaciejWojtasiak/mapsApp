import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import BackButton from '../BackButton/BackButton';
import useUrlPosition from '../../hooks/useUrlPosition';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import {useCities} from '../../context/CitiesContext';

function Form() {
    const { addCity } = useCities();
    const navigate = useNavigate();
    const [lat,lng] = useUrlPosition();
    const [cityName,setCityName] = useState('');
    const [country,setCountry] = useState('');
    const [date,setDate] = useState('');
    const [notes,setNotes] = useState('');    
    const [isFetching, setIsFetching] = useState(false);
    const [fetchErr, setFetchErr] = useState(false);

    const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

    useEffect(()=>{
       const getData = async () => {
            try {
                setIsFetching(true);
                setFetchErr(false);
                const response = await axios.get(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                if(!response.data.countryCode) {
                    throw new Error(
                        "That doesn't look like a city. Click somewhere else."
                    )
                }
                setCityName(response.data.city || response.data.locality || '');
                setCountry(response.data.countryName);
            }catch (err){
                setFetchErr(err.message);
            } finally{
                setIsFetching(false);
            }            
        }
        getData();        
    },[lat,lng])

    const handleAdd = async (e) =>{
        e.preventDefault();       
        if(!cityName || !date) return;

        const city = {
            cityName,
            country,
            date,
            notes,
            emoji:'',
            position:{
                lat,
                lng
            }
        }
        await addCity(city);      
        navigate('/app/cities');  
    }

    {if(isFetching) return <Loader />}
    {if(fetchErr) return<div>{fetchErr}</div>}

  return (
    <form action="#" className={styles.form}>
        <div className="form-group">
            <label htmlFor="city">City name</label>
            <input type="text" name="city" id="city" value={cityName} onChange={e=>setCityName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="date">When did you go to?</label>
            <input type="date" name="date" id="date" onChange={e=>setDate(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" value={notes} onChange={e=>setNotes(e.target.value)}/>
        </div>
        <div className={styles.buttons}>
            <button className='cta' onClick={handleAdd}>Add</button>
            <BackButton />
        </div>
    </form>
  )
}

export default Form;