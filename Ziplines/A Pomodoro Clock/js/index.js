
$(document).ready(function () { 
  
   // VARIABLES  
  var myTimer; //timer variable to clearinterval
  var $workTime = parseInt($("#work").text()); //takes shown value and updates workTime
  var $breakTime = parseInt($("#break").text()); // takes shown value  updates breakTime
  var seconds = $workTime * 60; // declare global variable first - get seconds
  var currentMinutes; // declare global variable first for clock
  var currentSeconds; // declare global variable first for clock
    
  //BUTTON CLICK HANDLERS 
  $("#upWork").click(function() {  
      $workTime += 1;
      seconds = $workTime * 60;
      $("#work").text($workTime);
      $("#timerText").text($workTime + ":00");
  }); // adds 1 to work time

  $("#downWork").click(function() { 
    if ($workTime > 0) {
      $workTime -= 1;
      seconds = $workTime * 60
       $("#work").text($workTime);
      $("#timerText").text($workTime + ":00")
      }
  }); // takes 1 from work time
    
  $("#upBreak").click(function() {  
      $breakTime += 1;
       $("#break").text($breakTime);
  });  // adds 1 to break time

  $("#downBreak").click(function() { 
    if ($breakTime > 0) {
      $breakTime -= 1;
      
       $("#break").text($breakTime);
      }
  }); // takes 1 from work time
    
  function startTimer() {
    currentMinutes = parseInt(seconds / 60, 10); //gets rounded minutes
    currentSeconds = parseInt(seconds % 60, 10); // gets seconds left in minute
    
    if (currentMinutes < 10) {  //adds 0 to minutes for display
      currentMinutes = "0" + currentMinutes;
    }
    
    if (currentSeconds < 10) { //adds 0 to seconds for display
      currentSeconds = "0" + currentSeconds;
    }
    
    $("#timerText").text(currentMinutes + ":" + currentSeconds); // adds to display
      
    if (seconds > 0){  //take away 1 from seconds to countdown
      seconds = seconds -1;
    }

    else if (seconds <= 0) { // when seconds reaches 0 - 1.play sound, 2. stop interval, 3. start break
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
      var audio = new Audio(wav);
  		audio.play(); 
      clearInterval(myTimer);
      seconds = $breakTime * 60;

      myTimer = setInterval(function(){ startTimer() }, 1000);

      if (seconds <= 0) {
        clearInterval(myTimer);
      }

    }

  }


  $("#start").click(function() {  // button to start
    clearInterval(myTimer);
  myTimer = setInterval(function(){ startTimer() }, 1000);
  });

    
  $("#stop").click(function() { // button to stop
  clearInterval(myTimer);
  });

    
  $("#reset").click(function() { // button to reset timer
  clearInterval(myTimer);
  $workTime = parseInt($("#work").text());
  seconds = $workTime * 60;
    if ($workTime < 10) {
      $workTime = "0" + $workTime;
    }
  $("#timerText").text($workTime + ":00");
  });

  
});