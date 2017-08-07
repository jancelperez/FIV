var page = require('page');
var empty = require('empty-element');
var plantilla = require('./plantilla')
var title = require('title');


page('/', function(ctx, next){
    title('Fotocopiadoras del valle');
    var main = document.getElementById('main-conteiner');
    empty(main).appendChild(plantilla);
}); 

 $(function(){
        $(".button-collapse").sideNav();
        $('.modal').modal();
        $('.slider').slider({
            indicators: false,
            height:420
        });
      $('input.autocomplete').autocomplete({
        data: {
            "Fotocopiadora Ricoh": null,
            "Fotocopiadora HP": null,
            "Fotocopiadora Epson": null,
            "Fotocopiadora Canon": 'https://placehold.it/250x250',
            "Impresora Kodak": null,
            "Impresora Fujitsu": null,
            "Impresora Epson": null,
            "Impresora Sony": null,
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        })
        $('.carousel').carousel();
});