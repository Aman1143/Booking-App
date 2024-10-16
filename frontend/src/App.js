import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Sport from './components/sport/Sport';
import Auth from './pages/auth/Auth';
import SportCenter from './components/centers/SportCenters';
import AddCenter from './components/addCenter/AddCenter';
import AdminCenter from './components/adminCenter/AdminCenter';

function App() {
  const token = JSON.stringify(localStorage.getItem('token'));
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Auth />} />
        <Route path="/sportCenter/:center_id" element={token ? <SportCenter /> : <Auth />} />
        <Route path="/sport/:sport_id" element={token ? <Sport /> : <Auth />} />
        <Route path="/authentication" element={<Auth />} />
        <Route path="/addCenter" element={token ? <AddCenter /> : <Auth />} />
        <Route path="/adminCenters" element={token ? <AdminCenter /> : <Auth />} />
      </Routes>
    </>
  );
}

export default App;
