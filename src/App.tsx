import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import PageNotFound from './pages/PageNotFound';
import AppLayout from "./pages/AppLayout";
import LoginPage from "./pages/LoginPage";
import './App.css';

function App() {
  
  return (
    <div>      
      <Router>
        <Navigation />
         <Routes>         
            <Route path="/" element ={<Homepage />}/>
            <Route path="product" element={<Product />}/>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="app" element={<AppLayout />}/>
            <Route path="*" element={<PageNotFound />}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
