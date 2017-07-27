
function cargaPagina(){
    
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('.carousel').carousel({
  interval:2000
})
}


$(document).ready(function(){
    cargaPagina();
})
