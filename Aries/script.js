const numPages = 5;
console.log("yes")
function createBook() {
  
  for (var i = 1; i <= numPages; i++) {
    var $page = $('<div id="page_' + i + '" class="page">');
    if (i != 1 && i != numPages)
    {
      $page.click(function(e) {
        $(this).prev('.page').find('.popup_a').toggleClass('hide');
        $(this).toggleClass('flip');
        $(this).find('.popup_a').toggleClass('hide');
        $(this).find('.popup_b').toggleClass('hide');
        $(this).next('.page').find('.popup_b').toggleClass('hide');
      });
    }
    
    if (i < numPages)
    {
      var $popup = $('<div id="popup_' + i + '" class="popup popup_a">');
      if (i > 1)
      {
        $popup.addClass('hide'); 
      }
      $page.append($popup);
    }
    
    if (i > 1) {  
      $popup = $('<div id="popup_' + i + '_b" class="popup popup_b">');
      if (i > 2)
      {
        $popup.addClass('hide');
      }
      $page.append($popup);
    }
    
    $('#book').append($page);
  }
  
};

$(document).ready(function() {
  
  createBook();
  
});