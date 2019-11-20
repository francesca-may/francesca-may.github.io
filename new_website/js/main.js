//Nav movement
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 40) { // check if user scrolled more than 50 from top of the browser window
          $("header .container").css({
            "transform" : "scale(.85)"
          })
          $("header").css({
              "padding" : ".3em"
          })
      } else {
          $("header .container").css({
            "transform" : "scale(1)"
          })
          $("header").css({
              "padding" : "1em"
          })
      }
    });
  });