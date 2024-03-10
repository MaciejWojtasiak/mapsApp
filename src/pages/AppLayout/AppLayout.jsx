import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import style from './AppLayout.module.css';

function AppLayout() {
  return (
    <main className={style.app}>
      <Sidebar />
      <Map />
    </main>
  )
}

export default AppLayout;