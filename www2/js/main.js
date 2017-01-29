var $;
window.onload = $(function () {
    'use strict';
    $('h1').textillate(
        {
            in: {
                effect: 'fadeInDown',
                sync: true,
                delay: 500
            }
        }
    );
    $('p').textillate(
        {
            in: {
                effect: 'fadeInUp',
                sync: true,
                delay: 1200
            },
            callback: function () {
                $('.next').css('visibility', 'visible');
            }
        }
    );
});

function next(){
    window.location = "01.html"
};
function next1(){
    window.location = "02.html"
};