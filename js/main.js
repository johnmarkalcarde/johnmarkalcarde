$(document).ready(function () {
    //download cv
    $("#download").click(function (e) {
        e.preventDefault();
        window.location.href = "assets/JohnmarkalcardeCV.pdf";
    });

    //Print CV
    $("#print").click(function (e) {
        e.preventDefault();
        var file = window.location.href = "assets/JohnmarkalcardeCV.pdf";
            print(file);
    });

    //Navigation menu
    $(".btn-navigation li").click(function(){
        $(".btn-navigation li").removeClass("active");
        $(this).addClass("active");
      });

    //Navigation Tabs about
    $("#about").click(function(){
      $('#tab-contact').fadeOut('slow');
      $('#tab-portfolio').fadeOut('slow');
      $('#tab-about').fadeIn('slow');
    });

    //Navigation Tabs contact
    $("#contact").click(function(){
      $('#tab-about').fadeOut('slow');
      $('#tab-portfolio').fadeOut('slow');
      $('#tab-contact').fadeIn('slow');
    });

    //Navigation Tabs portfolio
    $("#portfolio").click(function(){
      $('#tab-about').fadeOut('slow');
      $('tab-contact').fadeOut('slow');
      $('#tab-portfolio').fadeIn('slow');
    });
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
    
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $(".cv-main").fadeIn("slow");
  })


  
});



