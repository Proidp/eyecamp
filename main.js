$(document).ready(function() {
  $('.flipTimer').flipTimer({ 
  
  // count up or countdown
  direction: 'down', 
  
  // the target date
  date: 'October 08, 2022 09:30:00', 
  
  // callback works only with direction = "down"
  callback: function() { alert('times up!'); }
  
  
  });
  });