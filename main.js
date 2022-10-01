// $(document).ready(function() {
//   $('.flipTimer').flipTimer({

//   // count up or countdown
//   direction: 'down',

//   // the target date
//   date: 'October 08, 2022 09:30:00',

//   // callback works only with direction = "down"
//   callback: function() { alert('times up!'); }

//   });
//   });

document.addEventListener("DOMContentLoaded", () => {
  let timer_ = 1665199800; //unix timestamp
  let flipdown = new FlipDown(timer_).start().ifEnded(() => {
    document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
  });
});
