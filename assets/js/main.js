$(document).ready(
    //Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    }),

    //Smooth scroll on mainMenu items
    $('a[href^="#work"] , a[href^="#about"] , a[href^="#contact"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - 50 }, 900);
    }),
    //Scroll higher to get to page top
    $('a[href^="#hero"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - 110 }, 900);
    }),
);