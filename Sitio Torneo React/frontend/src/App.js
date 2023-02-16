import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Nav from  "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import Button from 'react-bootstrap/Button';


import HomePage from "./pages/HomePage";
import ViernesPage from "./pages/ViernesPage";
import SabadoPage from "./pages/SabadoPage";
import DomingoPage from "./pages/DomingoPage";
import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="Home" element={<HomePage/>}/>
        <Route path="Viernes" element={<ViernesPage/>}/>
        <Route path="Sabado" element={<SabadoPage/>}/>
        <Route path="Domingo" element={<DomingoPage/>}/>
        <Route path="Contacto" element={<ContactoPage/>}/>
        <Route path="Novedades" element={<NovedadesPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}
export default App;
