var page = require('page');
var empty = require('empty-element');
var plantilla = require('./plantilla')
var title = require('title');


page('/', function(ctx, next){
    title('Fotocopiadoras del valle');
    var main = document.getElementById('main-conteiner');
    
    var card = [
        {
            url:'fotocopiadora1.jpg'
        },
        {
            url:'scaner1.jpg'
        },
        {
            url:'toner1.jpg'
        },
        {
            url:'scaner2.jpg'
        },
        {
            url:'fotocopiadora2.jpg'
        },
        {
            url:'toner2.jpg'
        },
        {
            url:'toner3.jpg'
        },
        {
            url:'scaner3.jpg'
        },
        {
            url:'impresora1.jpg'
        },
        {
            url:'impresora2.jpg'
        },
        {
            url:'impresora3.jpg'
        },
        {
            url:'fotocopiadora3.jpg'
        },
        ]
    empty(main).appendChild(plantilla(card));
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
            "Fotocopiadora Ricoh": 'ricoh.jpg',
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