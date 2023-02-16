import React  from "react";


const SabadoPage = (props) => {
    return (
        <main className="holder">
             <h2>Buenas jugadores, en esta seccion habra toda la informacion respecto a cada torneo, actualizado fecha a fecha.
            Los torneos de los Viernes se juega de 20 a 1, en Stanford Bridge. Los Sabados se juega de 20 a 00 en Parque de los Princepes y los Domingo de 14 a 18 en Santiago Bernabeu.
        </h2>
        
        <h1>Sabados</h1>
        <table>
            
            <thead>
                <tr>
                    <th>Posicion</th> <th>Equipo</th> <th>Puntos</th> <th>DF</th> <th>GF</th> <th>GC</th>
                </tr> 
            </thead>
            <tr>
                <td>1</td><td>Argentina</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>2</td><td>Boca</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>3</td><td>Barcelona</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>4</td><td>Brasil</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>5</td><td>Inter</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>6</td><td>Francia</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>7</td><td>Milan</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>8</td><td>Real Madrid</td><td>0</td><td>0</td><td>0</td><td>0</td>
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
                <td></td>8<td>-</td><td>-</td><td>-</td>
            </tr>
        </table>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img/Sabadof1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/sabadof2" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/sabadof3" alt="Third slide"/>
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
        


        <div><img src="img/stadium-paris-saint-germain.jpg" alt="Parque de los Principes"></img></div>
        <div><img src="img/argentina1986.jpg" alt="Argentina" srcset="Argentina"></img></div>
        <div><img src="img/Barcelona2015.jpg" alt="Barcelona" srcset="Barcelona"></img></div>
        <div><img src="img/boca2003.jpg" alt="Boca" srcset="Boca"></img></div>
        <div><img src="img/brasil.jpg" alt="Brasil" srcset="Brasil"></img></div>
        <div><img src="img/francia.jpg" alt="Francia" srcset="Francia"></img></div>
        <div><img src="img/inter.jpg" alt="Inter" srcset="Inter"></img></div>
        <div><img src="img/RealMadrid.jpg" alt="Real Madrid" srcset="Real Madrid"></img></div>
        <div><img src="img/milan2007.jpg" alt="Milan" srcset="Milan"></img></div>
       
    


        </main>
    );
}

export default SabadoPage;