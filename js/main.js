window.onload = function () {
    //'use strict';
    $('h1').textillate({
        in: {
            effect: 'tada',
            sync: false
        }
    });
    $('#name').textillate({
        initialDelay: 400,
        in: {
            effect: 'swing',
            sync: false
        }
    });
    
    document.getElementById("btn").addEventListener("click", function () {
        window.location.assign("https://github.com/francesca-may");
    })
    
};