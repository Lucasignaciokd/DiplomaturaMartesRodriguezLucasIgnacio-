
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Nav from  "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePages from "./pages/HomePages";
import Viernes from "./pages/Viernes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="Home" element={<HomePages/>}/></Route>
        <Route path="Viernes" element={<Viernes/>}/></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}
export default App;
