$(function(){


  

  
  $(".p-nav-list__item").hover(
    function() {
      
      $(".p-dropdownMenu", this).stop().slideDown(200);
      $(this).addClass('p-nav-list__item-open');
      $(".c-plus a").addClass("on");
     
    },
    function() {
      $(".p-dropdownMenu", this).stop().slideUp(100);
      $(this).removeClass('p-nav-list__item-open');
      $(".c-plus a").removeClass("on");
      
    });
   
 
  

 
});



 
  
  
  
  
  
  
  
  
  
  


