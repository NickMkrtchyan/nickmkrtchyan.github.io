




    </script>
    
    <!-- Load JS here for greater good =============================-->
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="js/jquery.ui.touch-punch.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-select.js"></script>
    <script src="js/bootstrap-switch.js"></script>
    <script src="js/flatui-checkbox.js"></script>
    <script src="js/flatui-radio.js"></script>
    <script src="js/flatui-fileinput.js"></script>
    <script src="js/holder.js"></script>
    <script src="js/jquery.tagsinput.js"></script>
    <script src="js/jquery.placeholder.js"></script>
    <script src="js/typeahead.js"></script>
    <script src="bootstrap/js/google-code-prettify/prettify.js"></script>
    <script src="js/application.js"></script>
 <script>

 $(document).ready(function() {
    $(' li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});
 </script>

 <script>
      if ($(window).scrollTop()===0){
      $('#main-nav').removeClass('scrolled');
      }
      else{
        $('#main-nav').addClass('scrolled');    
      }

      $(window).scroll(function(){
        if ($(window).scrollTop()===0){
          $('#main-nav').removeClass('scrolled');
        }
        else{
          $('#main-nav').addClass('scrolled');    
        }
      });
    </script>
    <script src="js/parallax.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.7.2.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <script>
      $(document).ready(function(){
        $('.carousel').carousel({
          interval: 3000
        });
      });
    </script>

    <script>

      $(document).ready(function(){
    $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
          .animate({scrollTop: targetOffset}, 500);
         return false;
        }
      }
    });
  });

    </script>
    
   </body>
</html>
