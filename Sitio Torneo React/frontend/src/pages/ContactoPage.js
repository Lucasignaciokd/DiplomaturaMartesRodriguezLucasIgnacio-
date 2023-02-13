import {useState} from "react";
import axios from "axios";

const ContactoPage = (props) => {
    return ( 
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>   
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>   
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>  
                <p class="acciones"><input type= "Submit" value="Enviar"/>
                </p>      
                </form>         
            </div>
            <div class="datos">
                <h2>Otras vias de Comunicacion</h2>
                <p> Tambien puede contactarse con nosotros usando los siguientes medios</p> <ul>
                <li> <i class="fa-sharp fa-solid fa-phone"></i> Telefono:11246060 </li>
                <li><i class="fa-sharp fa-solid fa-envelope"></i> Email: torneos.kd@gmail.com</li>
                <li><i class="fa-sharp fa-solid fa-at"></i> Instagram:Torneos.kd</li>
                <li><i class="fa-sharp fa-solid fa-paper-plane"></i> Facebook: TorneosKD</li>
            </ul>
        
            </div>
        </main>

    )
}

export default ContactoPage;