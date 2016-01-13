//VARIABLES
var buttons = ["red", "green", "yellow", "blue"]; //array to match with random number
var sequence = []; //sequence for computer
var playerChoices = [] // sequence for player
var intervalId; //interval for first stage of button lighting - repeated
var timeoutId; // interval called for each button lighting - forces break between two same buttons.
var interval = 1000; //default length of time between button lighting

//AUDIO

var red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

var green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');

var yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');

var blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

//FUNCTIONS 

//random number between 0-3
function randomNumber() {
  console.log(Math.floor(Math.random() * 4));
    return Math.floor(Math.random() * 4);
  } //end of function

//remove light colours from buttons
function removeClass() {
   $(".gamebtn").removeClass("lightred lightyellow lightblue lightgreen");
}

//add new button to array
function addNew() {
    sequence.push(buttons[randomNumber()]);
    console.log(sequence);
  }

//play appropriate sound based on id
 function playSound(id) {
  if (id === "red") {
    red.play();
  }
  if (id === "green") {
    green.play();
  }
  if (id === "yellow") {
    yellow.play();
  }
  if (id === "blue") {
    blue.play();
  }
 };


//go through each button and highlight every second
  function runGame(addValue) {
  $("#instructions").hide();
  playerChoices = []; //remove last player attempt
  clearInterval(intervalId); //remove any timing
  addValue; //add new value to sequence
  
  
    
  //Interval to run through array and highlight colours
  var i = 0;
  intervalId = setInterval(function() {
    //remove class
   removeClass();
    $("#sequenceLength span").html("<p>" + sequence.length + "</p>") // add count html
  
    //highglight button and play sound
    timeOutId = setTimeout(function() { 
    $("#" + sequence[i-1]).addClass("light" + sequence[i-1]);
    playSound(sequence[i-1]);
    }, 200);
    i = i+1; //go to next in sequence
  }, interval);
    
  }


//end game and reset defaults
function endGame() {
  removeClass();
  clearInterval(intervalId);
  sequence = [];
  playerChoices = [];
  counter = [];
  $("#sequenceLength span").html("<p>" + sequence.length + "</p>")
  console.log(sequence)
  console.log(playerChoices)
  }

//START GAME
$("#start").click(function() {
  endGame(); 
  runGame(addNew());
});

//STOP GAME
$("#stop").click(function() {
  endGame();
})

//STRICT PLAY
$("#strict").click(function() {
  $(this).toggleClass("selected");
})

//GAME BUTTONS
$(".gamebtn").click(function() {
  
  //RESET
  clearInterval(intervalId); //clear interval from last round
  removeClass(); //all button colours normal
  
    //push button id on to playerChoices array
  var $buttonId = $(this).attr("id")
  playerChoices.push($buttonId);
  console.log(playerChoices)
  
  //play sound for corresponding id
  playSound($buttonId);
  
  $(this).addClass("light" + $buttonId);
  //highlight button
  setTimeout(function() {
    removeClass();
  }, 300)
  

  //use a boolchecker
  var boolCheck = true;
  
  
  //loop through each value in player array, if doesn't match, game over.
  var counter = 0;
  for (i=0; i < playerChoices.length; i++) {
  if (playerChoices[i] === sequence[i]) {
  counter += 1;
  continue;
}
  else if ($("#strict").hasClass("selected")) {
    endGame(); 
    $("span").text("X");
    runGame(addNew());
  }  
  else { 
  console.log(playerChoices);
  $("span").text("X");
  runGame(); //run game again without adding new value.
  boolCheck = false;
  }
}
  
  if (playerChoices.length === 20) {
    alert("Congratulations you beat the game!")
    endGame();
  }
  
  if (sequence.length >= 4) {
    interval = 900;
  }
 
  if (sequence.length >= 8) {
    interval = 750;
  }
  
  if (sequence.length >= 12) {
    interval = 600;
  }
  
  //if sequence is guessed right, get another go.
  if (counter === sequence.length && boolCheck === true) {
    $("span").html("&#10004");
    counter = 0;
    runGame(addNew());
  }
  
  
});// end of button click handler

//START OF PAGE LOAD -instructions fadeout
  $(".instructions").click(function() {
    $(this).fadeOut("slow");
  })