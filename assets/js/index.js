$(document).ready(function(){
  $(".lander-text").fadeIn(1000);

  // Main text-carousel
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var carouselText = ["SOFTWARE", "HARDWARE", "ADVANCED", "PORTFOLIO", "EXPLORATIVE", "BLOG"];
  var counter = 0;
  var carouselElement = $('.text-carousel');
  setTimeout(carouselChangeText, 2000);

  // Carousel Function
  function carouselChangeText() {
    $(carouselElement).slideUp(1000, function() {
      vowels.includes(carouselText[counter].charAt(0).toLowerCase()) ? $('.sub-2-1').fadeIn() : $('.sub-2-1').fadeOut();
      this.innerHTML = carouselText[counter];
      counter = ++counter % carouselText.length;
      $(this).slideDown(1000, carouselChangeText)
    })
  }
})
