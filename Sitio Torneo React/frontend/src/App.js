import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Nav from  "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePages from "./pages/HomePages";
import PagViernes from "./pages/PagViernes";
import PagSabado from "./pages/PagSabado";
import PagDomingo from "./pages/PagDomingo";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="Home" element={<HomePages/>}/>
        <Route path="Viernes" element={<PagViernes/>}/>
        <Route path="Sabado" element={<PagSabado/>}/>
        <Route path="Domingo" element={<PagDomingo/>}/>
        <Route path="Contacto" element={<ContactoPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}
export default App;
