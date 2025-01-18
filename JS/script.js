window.onload = () => {
   $("#newOpulento").hide();

   const daysValue = document.querySelector("#days");
   const hoursValue = document.querySelector("#hours");
   const minutesValue = document.querySelector("#minutes");
   const secondsValue = document.querySelector("#seconds");

   function updateCountdown() {
      // Find the distance between now and the count down date
      let distance = new Date("Apr 24, 2025 22:00:00").getTime() - new Date().getTime();

      // Time calculations for days, hours, minutes, and seconds
      daysValue.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
      hoursValue.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutesValue.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      secondsValue.innerText = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
         clearInterval(x); // ferma loop
         $("#newOpulento").show();
         $(".countdown-timer-container").hide();
         document.querySelector("#video").play();
      }
   }

   const x = setInterval(updateCountdown, 1000);
}

function initOrologi() {
   window.onscroll = ()=>{
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
   };
}
