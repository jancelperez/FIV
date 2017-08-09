var yo = require('yo-yo');
var login = require('../login');
var card = require('../card')

module.exports = function plantilla(cards){
  return yo`
    <div>
      <header>            
        <div class="navbar-fixed">
          <nav class="navegacion">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo right-align"><img class="logo" src="logo.png" alt=""></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="#">| Nuestra empresa</a></li>
                <li><a href="#">| Contactenos</a></li>
                <li><a class="waves-effect waves-light  modal-trigger" href="#modal1">Iniciar secion</a></li>
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
      ${login}    
      <section>
        <div class="slider">
          <ul class="slides">
            <li>
              <img class="fondo" src="fondo1.jpg">
              <div class="caption center-align">
                <h3>Fotocopiadoras del valle</h3>
                <h5 class="light grey-text text-lighten-3">Conocenos aqui</h5>
              </div>
            </li>
            <li>
              <img class="fondo" src="fondo2.jpg">
              <div class="caption left-align">
                <h3>Atencion personalizada</h3>
                <h5 class="light grey-text text-lighten-3">Con nuestros mejores profecionales.</h5>
              </div>
            </li>
            <li>
              <img class="fondo" src="fondo6.jpg">
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
      <section>
        <div class="section">
          <div class="container texto">
              <div class="row">
                <div class="col hide-on-small-only m12 l10 ofset-l2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque officia labore, rem magnam illum laudantium, vel dolorum molestiae quia esse alias nulla quisquam ea tenetur</p>
                </div>
                <div class="row">
                  <div class="col s12">
                    <div class="row">
                      <form class="col s12 m8 l10">
                        <div class="input-field col col s12 m8 l10">
                          <i class="material-icons prefix fa fa-search"></i>
                          <input type="text" id="autocomplete-input" class="autocomplete">
                          <label for="autocomplete-input">Buscar Maquinas</label>
                        </div>
                      </form> 
                    </div>
                  </div>
                </div>
              </div> 
          </div>
          <div class="container subtitulo">
            <div class="section">
              <h5>Nuevos productos en el 2017</h5>
            </div>
            <div class="divider"></div> 
          </div>  
          <div class="container">
              <div class="row">  
                ${cards.map(function(pic){
                  return card(pic);
                })}
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="fotocopiadora1.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="scaner1.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="toner1.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="scaner2.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="fotocopiadora2.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="toner2.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="toner3.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="scaner3.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="fotocopiadora3.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="impresora1.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="impresora2.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6 l4">
                  <div class="card small">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="impresora3.jpg">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>        
        </div>
      </section>
    </div>`
}