
//1.listen for click on list-group-item-heading//
//2.toggle the article in that list-group//
$(document).ready() {
  var articleExpand = {
    var article = document.getElementByClassName('list-group');
    var articleTitle = document.getElementsByClassName('list-group-item-heading');
    var articleBody = document.getElementByClassName('list-group-item-text');
    var expand = articleTitle.click()articleBody.toggle('slow');
  }
  

}
