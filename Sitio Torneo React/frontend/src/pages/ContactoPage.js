import {useState} from "react";
import axios from "axios";

const ContactoPage = (props) => {

    const initialForm= {
        nombre:"",
        email:"",
        telefono: "",
        mensaje:"",
    }
    
    const[sending,setSending]= useState(false);
    const[msg,setMsg]= useState("");
    const[formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg("");
        setSending(true)
        const response = await
        axios.post("http://localhost:3000/api/contacto",formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm)
        }
    }

 return (
        <main className="holder">
            <div>
            <h2>Contacto Rapido</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="mail" value={formData.email} onChange={handleChange}></input>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/></p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
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