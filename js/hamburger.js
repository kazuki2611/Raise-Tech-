//  ハンバーガーメニュー
$(function(){

  // $(".is-hamburger").on("click", function() {
  //   $( this ).toggleClass("is-open");
  //   $( ".dropdown" ).toggleClass("is-open");
  //   $( "body" ).toggleClass("is-open");



  // } );
//   $('.is-hamburger').click(function() {
//     $(this).toggleClass('is-open');

//     if ($(this).hasClass('is-open')) {
//         $("dropdown").addClass('is-open');
//     } else {
//         $("dropdown").removeClass('is-open');
//     }
// });
$('.is-hamburger').on('click',function(){
  if($(this).hasClass('is-open')){
    
    $(this).removeClass('is-open');
    
    
   
    $('.p-nav__list').slideUp(200);
    
    
  } else {
    
  
    
    
    $('.p-nav__list').slideDown(100);
    $(this).addClass('is-open');
   
  }
  
  $(window).resize(function() {
    $(".p-nav__list").css('display','');
});
});





});
// $('.dropdown').removeAttr('style');