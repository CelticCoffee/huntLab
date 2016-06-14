
console.log('testingJs')

$(document).ready(function() {

  //This opens the different articles//
  $('div.list-group').click(function(){
    $('div.list-group-item-text', this).show('slow');
    console.log(this);
  });

  $('.specialHeader').click(function(){
    $('.specialText').toggle('slow');
  })

  $('.closeArticle').click(function(){
    $('.specialText').toggle('slow');
  })

  $('.secondSpecialHeader').click(function(){
    $('.secondSpecialText').toggle('slow');
  })

  $('.secondCloseArticle').click(function(){
    $('.secondSpecialText').toggle('slow');
  })



});
