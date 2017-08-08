var yo = require('yo-yo');

module.exports = yo`
    <div id="modal1" class="modal">
        <div class="modal-content">
            <div class="row">
                <header>            
                    <div class="navbar-fixed">
                        <nav class="navegacion">
                            <div class="nav-wrapper">
                                <a href="#!" class="brand-logo"><img class="logo" src="logo.png" alt=""></a>
                            </div>
                        </nav>
                    </div>
                </header>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12 input-logo">
                            <input id="email" type="email" class="validate">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row password">
                        <div class="input-field col s12">
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                    </div>
                </form>

                <div class="container">
                    <div class="row olivido">
                        <a class="col s12 center-align" href="#">¿Olvide mi contraseña?</a>
                    </div>    
                </div>
                <a class="bloqueado"   href="#">¿Usuario Bloqueado o Inactivo?</a>    
            </div>
        </div>
        <div class="modal-footer">
            <div class="container"> 
                <a class="btn btn-floating pulse iniciar"><i class="material-icons">person</i></a>
            </div>
        </div>
    </div>`
    // <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat"></a>