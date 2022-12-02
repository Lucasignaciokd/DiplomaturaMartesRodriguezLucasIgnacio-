import React  from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div>
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros por estos medios</p>
            <ul>
                <li> <i class="fa-sharp fa-solid fa-phone"></i> Telefono:11246060 </li>
                <li><i class="fa-sharp fa-solid fa-envelope"></i> Email: torneos.kd@gmail.com</li>
                <li><i class="fa-sharp fa-solid fa-at"></i> Instagram:Torneos.kd</li>
                <li><i class="fa-sharp fa-solid fa-paper-plane"></i> Facebook: TorneosKD</li>
            </ul>
        </div>
    


        </main>
    );
}

export default ContactoPage;