import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import {CitiesContextProvider} from './context/CitiesContext.jsx';
import {UserContextProvider} from './context/Auth.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <CitiesContextProvider>
        <App />
      </CitiesContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
