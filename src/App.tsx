import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AppLayout from "./pages/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import CityList from "./components/CityList/CityList";
import City from './components/City/City';
import CountriesList from "./components/CountriesList/CountriesList";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      const data = await axios.get(`http://localhost:8000/cities`);
      setCities(data.data);     
    }
    getData();
  },[])

  const handleDelete = (id) => {
    setCities(prevState => prevState.filter(city=>city.id != id));
  }
  
  return (
    <div>      
      <Router>
        <Navigation />
         <Routes>         
            <Route index element ={<Homepage />}/>
            <Route path="product" element={<Product />}/>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="app" element={<AppLayout />}> 
              <Route index element={<CityList cities={cities} handleDelete={handleDelete}/>} />
              <Route path="cities" element={<CityList cities={cities} handleDelete={handleDelete}/>}/>
              <Route path="cities/:id" element={<City cities={cities} />}/>
              <Route path="countries" element={<CountriesList cities={cities}/>}/>
              <Route path="form" element={<p>Form</p>}/>
            </Route>
            
            <Route path="*" element={<PageNotFound />}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
