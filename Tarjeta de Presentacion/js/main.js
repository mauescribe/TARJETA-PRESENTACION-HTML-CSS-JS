/* --------------------------------------- */
/*                 slider banner          */
/*-------------------------------------  */

$(document).ready(function () {
  var banner = {
    padre: $("#banner"),
    numeroSlides: $("#banner").children(".slider").length,
    posicion: 1,
  }
  var informacion = {
    padre: $("#info"),
    numeroSlides: $("#info").children(".slider").length,
    posicion: 1,
  }
  banner.padre.children(".slider").first().css({
    left: 0
  });
  informacion.padre.children(".slider").first().css({
    left: 0
  });
  var altoBanner = function () {
    var alto = banner.padre.children(".slider").outerHeight();
    banner.padre.css({
      height: alto + "px"
    });
  }
    var altoInformacion = function () {
      var alto = informacion.padre.children(".activo").outerHeight();
      informacion.padre.animate({
        height: alto + "px"
      });
    }
   
  altoBanner();
  altoInformacion();
  

  $(window).resize(function () {
    altoBanner();
    altoInformacion();
  });
$('#info').children('.slider').each(function () {
  $('#botones').append('<span>');
});
$('#botones').children('span').first().addClass('activo');


  /* --------------------------------------- */
  /*                  banner                */
  /*-------------------------------------  */
  /*          boton de siguiente          */

  /* queremos acceder al id y que cuando haga cick sobre la flecha se ejecute la siguiente funcion */

  $("#siguiente").on("click", function (e) {
    e.preventDefault();
    if (banner.posicion < banner.numeroSlides) {
      banner.padre.children().not(".activo").css({
        left: "100%",
      });

      $("#banner .activo")
        .removeClass("activo")
        .next()
        .addClass("activo")
        .animate({
          left: "0",
        });

      $("#banner .activo").prev().animate({
        left: "-100%",
      });
      banner.posicion = banner.posicion + 1;
    } else {
      $("#banner .activo").animate({
        left: "-100%",
      });
      banner.padre.children().not(".activo").css({
        left: "100%",
      });
      $("#banner .activo").removeClass("activo");
      banner.padre.children(".slider").first().addClass("activo").animate({
        left: "0",
      });
      banner.posicion = 1;
    }
  });

  /* --------------------------------------- */
  /*                  banner                */
  /*-------------------------------------  */
  /*          boton de anterior           */

  $("#anterior").on("click", function (e) {
    e.preventDefault();
    if (banner.posicion > 1) {
      banner.padre.children().not(".activo").css({
        left: "-100%",
      });

      $("#banner .activo").animate({
        left: "100%",
      });

      $("#banner .activo")
        .removeClass("activo")
        .prev()
        .addClass("activo")
        .animate({
          left: 0,
        });
      banner.posicion = banner.posicion - 1;
    } else {
      banner.padre.children().not(".activo").css({
        left: "-100%",
      });
      $("#banner .activo").animate({
        left: "100%",
      });
      $("#banner .activo").removeClass("activo");
      banner.padre.children().last().addClass("activo").animate({
        left: 0,
      });
      banner.posicion = banner.numeroSlides;
    }
  });


  /* -------------------------------------------- */
  /*                  informacion                */
  /*--------------------------------------------*/
  /*              boton de siguiente           */

  /* queremos acceder al id y que cuando haga cick sobre la flecha se ejecute la siguiente funcion */

  $("#info-siguiente").on("click", function (e) {
    e.preventDefault();
    if (informacion.posicion < informacion.numeroSlides) {
      informacion.padre.children().not(".activo").css({
        left: "100%",
      });

      $("#info .activo")
        .removeClass("activo")
        .next()
        .addClass("activo")
        .animate({
          left: "0",
        });

      $("#info .activo").prev().animate({
        left: "-100%",
      });

      $('#botones').children('.activo').removeClass('activo').next().addClass('activo');
      informacion.posicion = informacion.posicion + 1;


    } else {
      $("#info .activo").animate({
        left: "-100%",
      });
      informacion.padre.children().not(".activo").css({
        left: "100%",
      });
      $("#info .activo").removeClass("activo");
      informacion.padre.children(".slider").first().addClass("activo").animate({
        left: "0",
      });


      $('#botones').children('.activo').removeClass('activo');
      $('#botones').children('span').first().addClass('activo');


      informacion.posicion = 1;
    }
    altoInformacion()
    
  });

  /* --------------------------------------- */
  /*                  informacion                */
  /*-------------------------------------  */
  /*          boton de anterior           */

  $("#info-previo").on("click", function (e) {
    e.preventDefault();
    if (informacion.posicion > 1) {
      informacion.padre.children().not(".activo").css({
        left: "-100%",
      });

      $("#info .activo").animate({
        left: "100%",
      });

      $("#info .activo")
        .removeClass("activo")
        .prev()
        .addClass("activo")
        .animate({
          left: 0,
        });

        $('#botones').children('.activo').removeClass('activo').prev().addClass('activo');

      informacion.posicion = informacion.posicion - 1;
    } else {
      informacion.padre.children().not(".activo").css({
        left: "-100%",
      });
      $("#info .activo").animate({
        left: "100%",
      });
      $("#info .activo").removeClass("activo");
      informacion.padre.children().last().addClass("activo").animate({
        left: 0,
      });
      $('#botones').children('.activo').removeClass('activo');
      $('#botones').children('span').last().addClass('activo');
      informacion.posicion = informacion.numeroSlides;
    }
  });

  
});
