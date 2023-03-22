function init(){
    $(document).ready(function () {
        $("#newOpulento").hide();
     });

     var pag = document.getElementById('pagina');
     function cambiaSfondo() {
        var body = document.getElementsById("pagina");
        body.style.backgroundColor = "white";
     }

     var countDownDate = new Date("Mar 27, 2023 13:00:00").getTime();
     const daysValue = document.querySelector("#days");
     const hoursValue = document.querySelector("#hours");
     const minutesValue = document.querySelector("#minutes");
     const secondsValue = document.querySelector("#seconds");

     // Update the count down every 1 second
     var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        daysValue.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursValue.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesValue.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        secondsValue.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
           clearInterval(x);
           window.onload = cambiaSfondo;
           $("#newOpulento").show();
           $(".countdown-timer-container").hide();
        }
     }, 1000);
}



function initOrologi(){
    window.onscroll = function () { scrollbar() };

    function scrollbar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
}