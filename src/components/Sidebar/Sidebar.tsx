import style from './Sidebar.module.css';
import AppNav from '../AppNav/AppNav';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={style.sidebar}>
        <div className={style.logo}>MapsApp</div>
        <AppNav />
        <Outlet />
        <footer>&copy; Copyright 2024</footer>
    </div>
  )
}

export default Sidebar