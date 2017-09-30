$(document).ready(function(){
  $(".lander-text").fadeIn(1000);

  var carouselText = ["SOFTWARE", "HARDWARE", "RESUME", "BLOG"];
  var counter = 0;
  var carouselElement = $('.text-carousel');
  setTimeout(carouselChangeText, 2000);

////////////////////////////////////////////////////////////////////////////////
//                                  Functions                                 //
////////////////////////////////////////////////////////////////////////////////

  // Carousel Function
  function carouselChangeText() {
    $(carouselElement).slideUp(1000, function() {
      this.innerHTML = carouselText[counter];
      counter = ++counter % carouselText.length;
      $(this).slideDown(1000, carouselChangeText)
    })
  }
})
