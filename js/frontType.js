document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    Typed.new('#interest', {
        strings: ["web designer", "web developer", "graphic designer", "dog lover"],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});