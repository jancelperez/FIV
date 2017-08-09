var yo = require('yo-yo');        
        
module.exports= function(imagen){
      return yo`
                <div class="col s12 m6 l4">
                    <div class="card small">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${imagen.url}">
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
                </div>`
}
