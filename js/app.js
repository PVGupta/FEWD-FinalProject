$(document).ready (function(){

  $(".icon").click(function(event){
    event.preventDefault();
  })

 //trigger the 3 bars to toggle classes
  $(".icon").click(function(){
    $("#nav").fadeToggle(400);
    $("#top-line").toggleClass("top-transform");
    $("#middle-line").toggleClass("mid-transform");
    $("#bottom-line").toggleClass("bottom-transform");
    $('#nav li').velocity("transition.slideRightIn", { display: 'block',stagger: 200 })
    $('#nav p').velocity("transition.slideRightIn", { display: 'block',stagger: 200 })
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

//for the image animation
var winHeight = $(window).height();
var animate = $('.appear');

$(window).scroll(function () {
  runAnimation();
})

function runAnimation () {
  var scrolled = $(window).scrollTop();
  animate.each(function () {
    var singleAnim = $(this);
    if (singleAnim.hasClass('visible')) {
      return true;
    }

    var topAnim = singleAnim.offset().top;
    if (scrolled > (topAnim - (winHeight * .6))) {
      singleAnim.addClass('visible');
    }
  })
}

})//closing bracket
