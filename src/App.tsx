import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AppLayout from "./pages/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import CityList from "./components/CityList/CityList";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/CountriesList/CountriesList";

function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      const data = await axios.get(`http://localhost:8000/cities`);
      setCities(data.data);
    }
    getData();
  },[])
  
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
              <Route index element={<CityList cities={cities} />} />
              <Route path="cities" element={<CityList cities={cities} />}/>
              <Route path="countries" element={<CountriesList countries={countries}/>}/>
              <Route path="form" element={<p>Form</p>}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
