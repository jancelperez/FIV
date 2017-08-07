var yo = require('yo-yo');

module.exports = yo`
    <div>
      <header>            
        <div class="navbar-fixed">
          <nav class="navegacion">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo right-align hide-on-small-only "><img class="logo" src="logo.png" alt=""></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="#">| Nuestra empresa</a></li>
                <li><a href="#">| Contactenos</a></li>
                <li><a class="waves-effect waves-light  modal-trigger" href="#">Iniciar secion</a></li>
              </ul>  
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>      
              <ul id="mobile-demo" class="side-nav">
                <li><a href="#l">Iniciar Seccion</a></li>
                <li><a href="#">Contactenos</a></li>
                <li><a href="#">Nuestra empresa</a></li>
                <li><a href="#">Otros servicios</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>    
    
      <section>
        <div class="slider">
          <ul class="slides">
            <li>
              <img src="fondo3.jpg">
              <div class="caption center-align">
                <h3>Fotocopiadoras del valle</h3>
                <h5 class="light grey-text text-lighten-3">Conocenos aqui</h5>
              </div>
            </li>
            <li>
              <img src="fondo4.jpg">
              <div class="caption left-align">
                <h3>Atencion personalizada</h3>
                <h5 class="light grey-text text-lighten-3">Con nuestros mejores profecionales.</h5>
              </div>
            </li>
            <li>
              <img src="fondo5.jpg">
              <div class="caption right-align">
                <h3>Pequeñas y Grandes empresas</h3>
                <h5 class="light grey-text text-lighten-3">Clientes satisfechos</h5>
              </div>
            </li>
          </ul>
        </div>   
      </section>

      <section  class="section service">
        <div class="container">
          <div class="row">
            <div class="col s12 m4">
              <div class="center promo">
                <a href="#"><i class="fa fa-shopping-cart fa-5x efecto" aria-hidden="true"></i></a>  
                <h4 class="color-subtitulos center">Ventas</h4>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="center promo">
                <a href="#"><i class="fa fa-handshake-o fa-5x efecto" aria-hidden="true"></i></a>
                <h4 class="color-subtitulos center">Alquiler</h4>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="center promo">
                <a href="#"><i class="material-icons fa-5x efecto">build</i></a>
                <h4 class="color-subtitulos center">Servicio tecnico</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="divider"></div>
        
        <div class="section">
          <div class="container texto">
            <div class="row">
              <div class="col hide-on-small-only m12 l10 ofset-l2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque officia labore, rem magnam illum laudantium, vel dolorum molestiae quia esse alias nulla quisquam ea tenetur</p>
              </div>
              <div class="row">
                <div class="col s12">
                  <div class="row">
                    <form class="col s12">
                      <div class="input-field col s12">
                        <i class="material-icons prefix fa fa-search"></i>
                        <input type="text" id="autocomplete-input" class="autocomplete">
                        <label for="autocomplete-input">Buscar Maquina</label>
                      </div>
                    </form> 
                  </div>
                </div>
              </div>
            </div> 
          </div>
          
          
          
            <div class="carousel">
              <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
              <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
              <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
              <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
              <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
            </div>
          </div>
          <div class="divider"></div>
        
    </div>`

