$(function(){




  $(".dropdown").hover(
    function() {
      $(".dropdown-menu", this).stop().slideDown(200);
      $(this).addClass('dropdown-btn-open');
    },
    function() {
      $(".dropdown", this).stop().slideUp(100);
      $(this).removeClass('dropdown-btn-open');
    }
  );




})

