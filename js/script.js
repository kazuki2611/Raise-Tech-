$(function(){


  

  
  $(".dropdown-btn,.menu-icon .accordion a").hover(
    function() {
      
      $(".dropdown-menu", this).stop().slideDown(200);
      $(this).addClass('dropdown-btn-open, ');
      $(".menu-icon .accordion a").addClass("on");
      // $(".menu-icon .accordion a").not(this).removeClass("on");
    },
    function() {
      $(".dropdown-menu", this).stop().slideUp(100);
      $(this).removeClass('dropdown-btn-open');
      $(".menu-icon .accordion a").removeClass("on");
      
    });
   
  // });
  // $(function() {
  //   // アイコンを囲うaタグの指定
  //   var toggles = $('.menu-icon .accordion a');
  //   //アイコンをクリックでクラスの切替え
  //   toggles.hover( function (event) {
  //     event.preventDefault(); 
  //     toggles.toggleClass("on");
  //   });
  // });
  // $(function () {
  //   //中のコンテンツを隠す
    
    //タイトルがクリックされたら
    // $(".dropdown-btn").hover(function () {
    //   $(".menu-icon .accordion a").addClass("on");

    //   //クリックしたjs-accordion-title以外の全てのopenを取る
    //   $(".menu-icon .accordion a").not(this).removeClass("on");
    //   //クリックされたtitle以外のcontentを閉じる
    //   $(".dropdown-btn").not(this).next().slideUp(300);
    //   //thisにopenクラスを付与
    //   // $(this).toggleClass("on");
    //   //thisのcontentを展開、開いていれば閉じる
    //   // $(this).next().slideToggle(300);
    // });
   
      //コンテンツを非表示に
    
      //タイトルがクリックされたら
      
      /* 下記でもOK
       $(".accordion-content").css("display", "none");
       $(".js-accordion-title").click(function () {
         $(".js-accordion-title").not(this).removeClass("open").next().slideUp(300);
         $(this).toggleClass("open").next().slideToggle(300);
       });
       */
   

 
});



 
  
  
  
  
  
  
  
  
  
  


