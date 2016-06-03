$(document).ready (function(){

  $("#collapse-menu").click(function(event){
    event.preventDefault();
  })

 //trigger the 3 bars to toggle classes
  $(".icon").click(function(){
    $("#nav").fadeToggle(400);
    $("#top-line").toggleClass("top-transform");
    $("#middle-line").toggleClass("mid-transform");
    $("#bottom-line").toggleClass("bottom-transform");
  });

//   //to minimise overlay with esc
  $(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $("#nav").fadeOut(500);
    $("#top-line").removeClass("top-transform");
    $("#middle-line").removeClass("mid-transform");
    $("#bottom-line").removeClass("bottom-transform");
  }
});


})//closing bracket
