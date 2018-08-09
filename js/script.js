 function AnimacionScroll() {
     /**
      * Animacion Scroll vinculo
      *    clase activa para efecto "aAnimate"
      */
     $('body').on('click', '.aAnimate', function () {
         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top
         }, 500);
         //return false;
     });

     /**
      * layout__work
      *  => Animacion img
      **/

     $(' #da-thumbs > li ').each(function () {
         $(this).hoverdir();
     });
 }

 function MasonryCustom() {
     // Masonry grid setup
     $(".grid").masonry({
         itemSelector: ".grid__item",
         columnWidth: ".grid__sizer",
         gutter: 15,
         percentPosition: true
     });
     // Image replacement handler
     $(document).on("click", ".js-button", function () {
         var imageSrc = $(this).parents(".grid__item").find("img").attr("src");
         $(".js-download").attr("href", imageSrc);
         $(".js-modal-image").attr("src", imageSrc);
         $(document).on("click", ".js-heart", function () {
             $(this).toggleClass("active");
         });
     });
 }


 (function () {

     AnimacionScroll();
     MasonryCustom();

 })();