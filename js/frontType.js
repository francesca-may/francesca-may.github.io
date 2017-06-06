
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    Typed.new('#interest', {
        strings: ["Web Design", "Web Development", "UI/UX", "Graphic Design"],
        typeSpeed: 100,
        backDelay: 2000,
        loop: true
    });
});

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});