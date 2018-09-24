$(document).ready(function() {

  // Main text-carousel
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var carouselText = ["SOFTWARE", "HARDWARE", "ADVANCED", "PORTFOLIO", "EXPLORATIVE"];
  var counter = 0;
  var carouselElement = $('.text-carousel');
  setTimeout(carouselChangeText, 2000);

  $('.down-icon').hover(function() {
    $(this).css('color', 'rgb(0, 112, 255)');
  }, function(){
    $(this).css('color', 'white');
  })

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.nav-bg').removeClass('nav-bg');
    $('.lander-image').addClass('lander-mobile');

    $(window).scroll(
        {oldTop: 0},
        function () {
        var newTop = $(window).scrollTop();
        if (newTop < this.oldTop) {
          $(".navbar").fadeIn(500, () => this.oldTop = newTop);
        } else {
          $(".navbar").fadeOut(500, () => this.oldTop = newTop);
        }
    });

  } else {
    $('.navbar-nav').hide();
    $('.navbar').hover(function() {
      $('.navbar-nav').stop().fadeIn();
    }, function(){
      $('.navbar-nav').stop().fadeOut();
    });
  }

  $('.downjs-1').click(function() {
    $('html, body').animate({ scrollTop: $('.projects-container').offset().top }, 'slow');
  })

  $(".down-icon").hover(function () {
    $(this).find('.down-arrow-text').stop().animate({width:'toggle'},350);
  });

  // Carousel Function
  function carouselChangeText() {
    $(carouselElement).slideUp(1000, function() {
      vowels.includes(carouselText[counter].charAt(0).toLowerCase()) ? $('.sub-2-1').fadeIn() : $('.sub-2-1').fadeOut();
      this.innerHTML = carouselText[counter];
      counter = ++counter % carouselText.length;
      $(this).slideDown(1000, carouselChangeText);
    })
  }
})
