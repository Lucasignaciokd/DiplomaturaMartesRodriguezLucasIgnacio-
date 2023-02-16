const ViernesPage = (props) => {
    return (
        <main className="holder">
            <h2>Buenas jugadores, en esta seccion habra toda la informacion respecto a cada torneo, actualizado fecha a fecha.
            Los torneos de los Viernes se juega de 20 a 1, en Stanford Bridge. Los Sabados se juega de 20 a 00 en Parque de los Princepes y los Domingo de 14 a 18 en Santiago Bernabeu.
        </h2>
        <h1>Viernes</h1>
        <table>
            
            <thead>
                <tr>
                    <th>Posicion</th> <th>Equipo</th> <th>Puntos</th> <th>DF</th> <th>GF</th> <th>GC</th>
                </tr> 
            </thead>
            <tr>
                <td>1</td>
                <td>Argentina</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td><td>Boca</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>3</td><td>Barcelona</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>4</td><td>Chelsea</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>5</td><td>Flamengo</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>6</td><td>Borussia Dortmund</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>7</td><td>Manchester City</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
            <tr>
                <td>8</td><td>Brasil</td><td>0</td><td>0</td><td>0</td><td>0</td>
            </tr>
        </table>

        

        <table>
            <thead>
                <tr>
                    <th>GOLEADORES</th>
                </tr> 
            </thead>
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
      <img class="d-block w-100" src="img/ViernesF1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/ViernesF2" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img/ViernesF3" alt="Third slide"/>
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
        

        
        

        <div><img src="img/large_thumbnail.jpg" alt="Stanford Bridge"></img></div>

        <div><img src="img/argentina.jpg" alt="Argentina" srcset="Argentina"></img></div>
        <div><img src="img/barcelona2009.jpg" alt="Barcelona" srcset="Barcelona"></img></div>
        <div><img src="img/boca2001.jpg" alt="Boca" srcset="Boca"></img></div>
        <div><img src="img/brasil.jpg" alt="Brasil" srcset="Brasil"></img></div>
        <div><img src="img/chelsea2012.jpg" alt="Chelsea" srcset="Chelsea"></img></div>
        <div><img src="img/city.jpg" alt="Manchester City" srcset="Manchester City"></img></div>
        <div><img src="img/dortmund2013.jpg" alt="Borussia Dortmund" srcset="Borussia Dortmund"></img></div>
        <div><img src="img/flamengo2019.jpg" alt="Flamengo" srcset="Flamengo"></img></div>
       
    


        </main>
    );
}

export default ViernesPage;