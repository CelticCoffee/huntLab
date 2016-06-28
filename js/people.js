
//animates the top of the people page//
$(document).ready(function() {
  if(screen.width > 413) {
  $('.huntLabInterestsOne').fadeOut(5000, function(){
    $('.secondLab').fadeIn(4000);
    $('.secondLab').fadeOut(5000,function(){
       $('.people').fadeIn(4000);
  });
  });
}
  else {
    $('.huntLabInterestsOne').addClass('sneaky');
  }
  $('.moreHunt').click(function() {
    $('.huntBioContinued').toggle('slow');
  })


});
