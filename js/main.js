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
});