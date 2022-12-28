import HomePages from "../../pages/HomePages";
import React  from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Nav= (props) => {
    return (
        <nav>
            <div>
            <ul>
                <li><NavLink to="/Home" className={({ isActive }) => isActive ? "activo" : undefined }
                >Home</NavLink></li>
                <li><NavLink to= "/Viernes" className={({ isActive }) => isActive ? "activo" : undefined }
                >Viernes</NavLink></li>
                <li><NavLink to= "/Sabado" className={({ isActive }) => isActive ? "activo" : undefined }
                >Sabado</NavLink></li>
                <li><NavLink to= "/Domingo" className={({ isActive }) => isActive ? "activo" : undefined }
                >Domingo</NavLink></li>
                <li><NavLink to= "/Contacto" className={({ isActive }) => isActive ? "activo" : undefined }
                >Contacto</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;