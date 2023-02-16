import React  from "react";


const DomingoPage = (props) => {
    return (
        <main className="holder">
             <h2>Buenas jugadores, en esta seccion habra toda la informacion respecto a cada torneo, actualizado fecha a fecha.
            Los torneos de los Viernes se juega de 20 a 1, en Stanford Bridge. Los Sabados se juega de 20 a 00 en Parque de los Princepes y los Domingo de 14 a 18 en Santiago Bernabeu.
        </h2>
        <h1>Domingo</h1>
        <table>
            
            <thead>
                <tr>
                    <th>Posicion</th> <th>Equipo</th> <th>Puntos</th> <th>DF</th> <th>GF</th> <th>GC</th>
                </tr> 
            </thead>
            <tr>
                <td>1</td><td>Bayern Munich</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>2</td><td>Francia</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>3</td><td>Barcelona</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>4</td><td>PSG</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>5</td><td>Liverpool</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>6</td><td>Juventus</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>7</td><td>Real Madrid</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>8</td><td>Santos</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
        </table>

        

        <table>
            <thead>
                <tr>
                    <th>Posicion</th> <th>Nombre</th> <th>Goles</th> <th>Equipo</th>
                </tr> 
            </thead>
            <tr>
                <td>1</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>2</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>3</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>4</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>5</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>6</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>7</td><td>-</td><td>-</td><td>-</td>
            </tr>
            <tr>
                <td>8</td><td>-</td><td>-</td><td>-</td>
            </tr>
        </table>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img/domingof1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/domignf2" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/f3domingo" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        


       
        
        <div><img src="img/98.jpg" alt="Santiago Bernabeu"></img></div>
        <div><img src="img/barcelona2019.jpg" alt="Barcelona" srcset="Barcelona"></img></div>
        <div><img src="img/bayern2013.jpg" alt="Bayern Munich" srcset="Bayern Munich"></img></div>
        <div><img src="img/francia2018.jpg" alt="Francia" srcset="Francia"></img></div>
        <div><img src="img/juventus.jpg" alt="Juventus" srcset="Juventus"></img></div>
        <div><img src="img/liverpool2019.jpg" alt="Liverpool" srcset="Livepool"></img></div>
        <div><img src="img/psg.jpeg" alt="Psg" srcset="Psg"></img></div>
        <div><img src="img/realmadrid2017.jpg" alt="Real Madrid" srcset="Real Madrid"></img></div>
        <div><img src="img/santos2011.jpg" alt="Santos" srcset="Santos"></img></div>

        </main>
    );
}

export default DomingoPage;