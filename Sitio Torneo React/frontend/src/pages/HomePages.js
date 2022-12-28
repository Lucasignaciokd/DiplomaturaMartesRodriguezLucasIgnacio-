const HomePages= (props) => {
    return(
        <main className="holder">

        <div>
        <img src="img/Sergio-Ramos-864695.jpg" alt="Magia"></img>
        </div>
         <div class="columnas">
        <section class="bienvenidos">
            <h2>Bienvenidos Magicos <i class="fa-sharp fa-solid fa-hand"></i></h2>
            <p>Torneos Kd es un torneo dedicados a aquellos jugadores que se toman el futbol como estilo de vida, siendo amateurs con mayor preocupacion que los profesionales.</p>
        </section>
        <section class="sedes">
            <h2>Sedes <i class="fa-sharp fa-solid fa-location-dot"></i></h2>
            <p>Tenemos Sedes en Wembley, Bernabeu, Bombonera, Allianz Arena</p>
        </section>
        </div>    

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                <p>Es un torneo para jugadores profesionales</p>
                </div>
            <div className="Testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span class="cita"> Buen torneo!</span>
                    <span class="autor">La Brujita Veron</span>
                </div>
            </div>
            </div>
             
        </main>
    )
}

export default HomePages;