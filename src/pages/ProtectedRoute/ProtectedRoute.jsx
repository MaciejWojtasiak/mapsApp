import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/Auth';
import { useEffect } from 'react';

function ProtectedRoute({children}) {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuthenticated) navigate('/');
  },[isAuthenticated,navigate])

  return children;
}

export default ProtectedRoute;