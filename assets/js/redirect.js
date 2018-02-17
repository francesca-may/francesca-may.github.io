$(document).ready( function() {

    (function countdown(remaining) {
        if(remaining <= 0)
            window.location.assign("index.html")
            document.getElementById('timer').innerHTML = remaining;
            setTimeout(function(){ countdown(remaining - 1); }, 1000);
        })(10); // 10 seconds

});