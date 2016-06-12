
console.log('testingJs')

$(document).ready(function() {
  $('div.list-group').click(function(){
    $('div.list-group-item-text', this).toggle('slow');
    console.log(this);

  })
});
