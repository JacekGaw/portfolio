function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
} ;



$(document).ready(function(){
   $('#gototop').hide();
   $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
         $('#gototop').fadeIn(500);
      }
      else {
         $('#gototop').fadeOut(500);
      }
   });
   $('#gototop').click(function(){
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
   });
});