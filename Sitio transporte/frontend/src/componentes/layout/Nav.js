import HomePages from "../../pages/HomePages";
import React  from "react";
import { Link } from "react-router-dom";

const Nav= (props) => {
    return (
        <nav>
            <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to= "/Viernes">Viernes</Link></li>
                <li><Link to= "/Sabado">Sabado</Link></li>
                <li><Link to= "/Domingo">Domingo</Link></li>
                <li><Link to= "/Contacto">Contacto</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;