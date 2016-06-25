

$(document).ready(function() {
     $('.heroText').hide(0).delay(500).fadeIn(3000);
     $('.heroFollow').hide(0).delay(900).fadeIn(6000);


  $('.heroImage').slick({
    autoplay: true,
    dots: false,
    arrows: false,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear'
 });

});
