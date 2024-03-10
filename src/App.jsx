import { BrowserRouter as Router , Routes, Route, Navigate} from "react-router-dom";
import { lazy,Suspense } from 'react'
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import CityList from "./components/CityList/CityList";
import City from './components/City/City';
import Country from "./components/Country/Country";
import Form from "./components/Form/Form";
import CountriesList from "./components/CountriesList/CountriesList";
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import LoaderFull from "./components/LoaderFull/LoaderFull";

const Homepage = lazy(()=> import("./pages/Homepage/Homepage"));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout/AppLayout'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const Product = lazy(() => import('./pages/Product/Product'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));

function App() {    
  return (
    <div>      
      <Router>
        <Navigation />
        <Suspense fallback={<LoaderFull/>}>
          <Routes>         
              <Route index element ={<Homepage />}/>
              <Route path="product" element={<Product />}/>
              <Route path="pricing" element={<Pricing />}/>
              <Route path="login" element={<LoginPage />}/>
              <Route path="app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>               
                <Route index element={<Navigate replace to="cities"/>} />
                <Route path="cities" element={<CityList />}/>
                <Route path="cities/:id" element={<City  />}/>
                <Route path="countries/:country" element={<Country />}/>
                <Route path="countries" element={<CountriesList />}/>
                <Route path="form" element={<Form />}/>              
              </Route>            
              <Route path="*" element={<PageNotFound />}/>
          </Routes>
         </Suspense>
      </Router>
    </div>
  )
}

export default App
