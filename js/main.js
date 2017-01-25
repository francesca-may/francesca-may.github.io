var $;

$(document).ready(function () {
    'use strict';
    $("#home").on("click", function () {
        location.assign("index.html");
    });
    $("#contact").on("click", function () {
        location.assign("contact.html");
    });
    $("#projects").on("click", function () {
        location.assign("projects.html");
    });
    $("#about").on("click", function () {
        location.assign("about.html");
    });
    
    $(function () {
        $('.jcarousel').jcarousel({
        // Configuration goes here
            center: true,
            animation: {
                duration: 400,
                easing: 'linear',
            }
        });
    });
    
    $('.jcarousel-prev').click(function () {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function () {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
    
});