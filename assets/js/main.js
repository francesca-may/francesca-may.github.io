$(document).ready(
    //Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    }),

    //Smooth scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - 50 }, 900);
    }),
    $(document).on('click', 'a[href^="#hero"]', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - 110 }, 900);
    })
);