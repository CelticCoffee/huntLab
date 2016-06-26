

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

 $('#objectivesTab').click(function(event){
     event.preventDefault();
   $('.objectivesArticle').toggle('slow');
 })



$('#experimentsTab').click(function(event){
    event.preventDefault();
  $('.modelExperiments').toggle('slow');
})

$('#ooDesignTab').click(function(event){
  event.preventDefault();
  $('.objectODesign').toggle('slow');
})

$('#occamTab').click(function(event){
  event.preventDefault();
  $('.occamsRazorArticle').toggle('slow');
})

$('#iterativeTab').click(function(event){
  event.preventDefault();
  $('.iterativeArticle').toggle('slow');
})


//To go to the additional articles on modeling//
  $('#moreModelingInfo').click(function(){
    $('#mainBreadCrumb').toggle('slow');
    $('#modelingTarget').toggle('slow');
    $('.expandedModelingText').toggle('slow');
    $(this).toggle();
  })

//When user wants to return to main home screen//
 $('.modelingSubMenu').click(function(){
   $('.expandedModelingText').toggle('slow');
   $('#moreModelingInfo').toggle('slow');
   $('#modelingTarget').toggle('slow');
   $('#mainBreadCrumb').toggle('slow');
 })

  //The bottom close button (another way to go back to main home)//
  $('.closeText').click(function(){
    $('.expandedModelingText').toggle('slow');
    $('#moreModelingInfo').toggle('slow');
    $('#modelingTarget').toggle('slow');
    $('#mainBreadCrumb').toggle('slow');
  })

  //jumbotron style//
  $('.questionSlides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 6000,
     dots: true
  });

  




});
