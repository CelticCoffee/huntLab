$(document).ready(function(){
  $('#cueArticle2').click(function() {
    $('#article2part2').toggle('slow');
    $('#closeArticle2').toggle();
    $(this).toggle();
  })


  $('.references').click(function(){
  $('#genotypeReferences').toggle('slow');
})

  $('#closeArticle2').click(function(){
    $('#article2part2').toggle('slow');
    $('#genotypeReferences').hide();
    $('#cueArticle2').toggle();
    $(this).toggle();
  })

  $('#cueArticle3').click(function() {
    $('#article3part2').toggle('slow');
    $('#closeArticle3').toggle('slow');
    $(this).toggle();
  })

  $('#closeArticle3').click(function(){
    $('#article3part2').toggle('slow');
    $('#cueArticle3').toggle();
    $(this).toggle();
  })

  $('#cueArticle4').click(function(){
    $('#article4part2').toggle('slow');
    $('#closeArticle4').toggle('slow');
    $(this).toggle();
  })

  $('#closeArticle4').click(function(){
    $('#article4part2').toggle('slow');
    $('#cueArticle4').toggle();
    $(this).toggle();
  })

  $('#cueArticle5').click(function(){
    $('#article5part2').toggle('slow');
    $('#closeArticle5').toggle('slow');
    $(this).toggle();
  })

  $('#closeArticle5').click(function(){
    $('#article5part2').toggle('slow');
    $('#cueArticle5').toggle();
    $(this).toggle();
  })

  $('#cueArticle6').click(function(){
    $('#article6part2').toggle('slow');
    $('#closeArticle6').toggle('slow');
    $(this).toggle();
  })

  $('#closeArticle6').click(function(){
    $('#article6part2').toggle('slow');
    $('#cueArticle6').toggle();
    $(this).toggle();
  })






})
