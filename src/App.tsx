import { BrowserRouter as Router , Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
// import axios from "axios";
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
import Country from "./components/Country/Country";
import Form from "./components/Form/Form";
import CountriesList from "./components/CountriesList/CountriesList";


function App() {  

  // const handleDelete = (id) => {
  //   setCities(prevState => prevState.filter(city=>city.id != id));
  // }
  
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
              <Route index element={<Navigate replace to="cities"/>} />
              <Route path="cities" element={<CityList />}/>
              {/* <Route path="cities/:id" element={<City  />}/> */}
              <Route path="countries/:country" element={<Country />}/>
              <Route path="countries" element={<CountriesList />}/>
              <Route path="form" element={<Form />}/>
            </Route>            
            <Route path="*" element={<PageNotFound />}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
