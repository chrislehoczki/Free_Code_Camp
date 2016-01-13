
// Set up controls for options
   $("#XorO").show();
   $("#computerQuestion").hide();
   $("#reset").hide();
   $(".board").hide();
   $("footer").hide();

//VARIABLES
var playerTurn = "X"; //default as X
var computerTurn = "O";
var buttons = document.getElementsByClassName("game"); // button array to use for draw function

//VARIABLES FOR AI WIN/BLOCK CHECK
var arrayCounter = 0;
var emptyCounter = 0;
var position;

//FUNCTIONS

//FUNCTION CREATE RANDOM NUMBER
function randomNumber() {
    return Math.floor(Math.random() * 8);
  } //end of function

// FUNCTION to check if 2 boxes in a line have "value", then "output" a certain value into the empty box
function fillInResponse(array, value, output) { 
        for (i = 0; i < 3; i++) { //go through each array value
            if (array[i].text().indexOf(value) >= 0) {
              arrayCounter += 1;
            } else if (array[i].text().indexOf(playerTurn) < 0 && array[i].text() !== computerTurn) {
              emptyCounter += 1;
              position = i;
            }
          }
          if (arrayCounter === 2 && emptyCounter === 1) {
            array[position][0].innerHTML = output;
            return true;
          }// end of horizontal check
      arrayCounter = 0;
      emptyCounter = 0;
}

// FUNCTION check horizontal, vertical and diagonal lines for potential WIN or BLOCK: checkValue = value to check for, either computer or player.

function addResponse(checkValue) { 
  
  // create arrays of diagonals
         var buttonArrayD1 = [];
         var buttonArrayD2 = [];
      
      buttonArrayD1.push($("#0_0"))
      buttonArrayD1.push($("#1_1"))
      buttonArrayD1.push($("#2_2"))
      
      buttonArrayD2.push($("#2_0"))
      buttonArrayD2.push($("#1_1"))
      buttonArrayD2.push($("#0_2"))

      var booleanCheck;
  
    //Check diagonal1 for WIN/BLOCK
      booleanCheck = fillInResponse(buttonArrayD1, checkValue, computerTurn);
      if (booleanCheck) {
        return true; // return from function
        }
  
      //Check diagonal2 for WIN/BLOCK
      booleanCheck = fillInResponse(buttonArrayD2, checkValue, computerTurn);
      if (booleanCheck) {
        return true; // return from function
        }
  
          //Check diagonal1 for WIN/BLOCK
      booleanCheck = fillInResponse(buttonArrayD1, checkValue, computerTurn);
      if (booleanCheck) {
        return true; // return from function
        }
  
  // Loop to check horizontal and vertical lines for WIN/BLOCK
        for (j = 0; j < 3; j++) {
          //button arrays for horizontal, vertical diagonals
          buttonArrayH = [];
          buttonArrayV = [];
          
          //push to horizontal array
          buttonArrayH.push($("#0_" + j));
          buttonArrayH.push($("#1_" + j));
          buttonArrayH.push($("#2_" + j));

          //push to vertical array
          buttonArrayV.push($("#" + j + "_0"));
          buttonArrayV.push($("#" + j + "_1"));
          buttonArrayV.push($("#" + j + "_2"));
 
          //CHECK HORIZONTAL
             booleanCheck = fillInResponse(buttonArrayH, checkValue, computerTurn);
      if (booleanCheck) {
        return true; // return from function
        }
          //CHECK VERTICAL
     booleanCheck = fillInResponse(buttonArrayV, checkValue, computerTurn);
      if (booleanCheck) {
        return true; // return from function
        }   
        } //end of loop
        return false;
      } // end of function

//FUNCTION BLOCK FORK

function blockFork() {
  if ($("#1_0").text() === playerTurn && $("#0_1").text() === playerTurn) {
    $("#0_0").text(computerTurn);
  }
}

// FILL CENTER IF FREE
function fillCenter() {
  if ($("#1_1").text() === "") {
     $("#1_1").text(computerTurn)
     return true;
  }
    return false;
}

// GO IN OPPOSITE CORNER FROM PLAYER INPUT
function oppositeCorner() {
  var diagonal1 = [];
  var diagonal2 = [];
    
      diagonal1.push($("#0_0"))
      diagonal1.push($("#1_1"))
      diagonal1.push($("#2_2"))
      
      diagonal2.push($("#2_0"))
      diagonal2.push($("#1_1"))
      diagonal2.push($("#0_2"))


      //check if opposite corner is playerTurn, if so add value

      if (diagonal1[0].text() === playerTurn && diagonal1[2].text() === "") {
        diagonal1[2].text(computerTurn)
        return true;
      }
        if (diagonal1[2].text() === playerTurn && diagonal1[0].text() === "") {
        diagonal1[0].text(computerTurn)
        return true;
      }
     if (diagonal2[0].text() === playerTurn && diagonal2[2].text() === "") {
        diagonal2[2].text(computerTurn)
        return true;
      }
        if (diagonal2[2].text() === playerTurn && diagonal2[0].text() === "") {
        diagonal2[0].text(computerTurn)
        return true;
      }


  // FAILSAFE TO STOP FORK FROM PLAYER

    if (diagonal1[0].text() === playerTurn && diagonal1[1].text() === computerTurn && diagonal1[2].text() === playerTurn) {
      if ($("#1_0").text() === "") {
        $("#1_0").text(computerTurn)
      }
      else if ($("#2_1").text() === "") {
        $("#2_1").text(computerTurn)
       
      }
      else if ($("#1_2").text() === "") {
        $("#1_2").text(computerTurn)
      }
      else if ($("#0_1").text() === "") {
        $("#0_1").text(computerTurn)
      }
      return true;
    }


   if (diagonal2[0].text() === playerTurn && diagonal2[1].text() === computerTurn && diagonal2[2].text() === playerTurn) {
      if ($("#1_0").text() === "") {
        $("#1_0").text(computerTurn)
      }
      else if ($("#2_1").text() === "") {
        $("#2_1").text(computerTurn)
       
      }
      else if ($("#1_2").text() === "") {
        $("#1_2").text(computerTurn)
      }
      else if ($("#0_1").text() === "") {
        $("#0_1").text(computerTurn)
      }
      return true;
    }
  
  
  
    //if a corner is empty - add value
 
  if (diagonal1[0].text() === "") {
        diagonal1[2].text(computerTurn)
        return true;
      }
  
  if (diagonal1[2].text() === "") {
        diagonal1[0].text(computerTurn)
        return true;
      }
  
  if (diagonal2[0].text() === "") {
        diagonal2[2].text(computerTurn)
        return true;
      }
  
  if (diagonal2[2].text() === "") {
        diagonal2[0].text(computerTurn)
        return true;
      }

    return false;  
}


//FUNCTION to check for winning lines
function checkWin(player) {
  
  // CHECK VERTICAL LINES
  for (i=0; i < 3; i++){ //start loop
     if ($("#"+ i + "_0").text() === player && $("#"+ i + "_1").text() === player && $("#"+ i + "_2").text() === player) { //checks each if all have same value
   if (player === playerTurn)  {
  alert("Congratulations. You won.");
      } 
   else if (player === computerTurn) {
     alert("Oh dear, you lost...");
   }
      
  $(".game").text("");
             if ($("#computer").hasClass("selected")) {
     $("#1_1").text(computerTurn);
   }
  }
}

// CHECK HORIZONTAL LINES
  for (i=0; i < 3; i++){ //start loop
     if ($("#"+ "0_" + i).text() === player && $("#"+ "1_" + i ).text() === player && $("#"+ "2_" + i ).text() === player) { //checks each if all have same value
   if (player === playerTurn)  {
  alert("Congratulations. You won!");

      } 
   else if (player === computerTurn) {
     alert("Oh dear, you lost... Try again!");

   }
      
  $(".game").text("");
       if ($("#computer").hasClass("selected")) {
     $("#1_1").text(computerTurn);
   }
  }
}

//CHECK DIAGONALS
     if ($("#0_0").text() === player && $("#1_1").text() === player && $("#2_2").text() === player) { //checks each if all have same value
   if (player === playerTurn)  {
  alert("Congratulations. You won!");

      } 
   else if (player === computerTurn) {
     alert("Oh dear, you lost... Try again!");

   }
      
  $(".game").text("");
       if ($("#computer").hasClass("selected")) {
     $("#1_1").text(computerTurn);
   }
  }
  
   if ($("#2_0").text() === player && $("#1_1").text() === player && $("#0_2").text() === player) { //checks each if all have same value
   if (player === playerTurn)  {
  alert("Congratulations. You won!");

      } 
   else if (player === computerTurn) {
     alert("Oh dear, you lost... Try Again!");

   }
      
  $(".game").text("");
     if ($("#computer").hasClass("selected")) {
     $("#1_1").text(computerTurn);
   }
  }
}

function draw() {
    var counter = 0;
    while (counter < 10) {
      
   if (buttons[counter].innerHTML === "X" || buttons[counter].innerHTML === "O") {
     console.log(buttons[counter].innerHTML)
      counter += 1;
    }
    else {
      return;
    }
      if (counter === 9) {
        alert("It's just a draw.. Hit the books and try again.")
        $(".game").text("")
              if ($("#computer").hasClass("selected")) {
     $("#1_1").text(computerTurn);
      
   }
      }
      }
        };//end of draw function

//BUTTON CLICK HANDLERS

// BUTTONS to change defaults

$("#x").click(function() {
  playerTurn = "X";
  computerTurn = "O"
  $(".option1").removeClass("selected");
  $(this).addClass("selected");
  $("h1").text("TIC! TAC!")
  $("#XorO").hide();
  $("#computerQuestion").fadeIn();
})

$("#o").click(function() {
  playerTurn = "O";
  computerTurn = "X";
  $("h1").text("TIC! TAC!")
  $("#XorO").hide();
  $("#computerQuestion").fadeIn();
})

 $("#computer").click(function() {
 $("#1_1").text(computerTurn);
   $("#computer").addClass("selected")
   $("h1").text("TIC! TAC! TOE!")
   $("#computerQuestion").hide();
   $("#reset").fadeIn();
   $(".board").fadeIn();
   $("footer").fadeIn();
})
 
  $("#player").click(function() {
   $(".game").text("");
    $("h1").text("TIC! TAC! TOE!")
    $("#computer").removeClass("selected")
   $("#computerQuestion").hide();
   $("#reset").fadeIn();
   $(".board").fadeIn();
   $("footer").fadeIn();
})

 $("#reset").click(function() {
 $(".game").text("")
 $("#XorO").fadeIn();
 $("#reset").hide();
 $(".board").hide();
 $("footer").hide();
})

// BUTTON to add value into game
$(".game").click(function() {
  console.log($(this).text())

  // IF TRY AND CLICK ON ALREADY CLICKED, GIVE MESSAGE
  if ($(this).text() === "X" || $(this).text() === "O") {
    alert("Already clicked, choose another box");
    return
  }

  //START PLAYER/AI INTERACTION
  else {
    //add human player input
    $(this).text(playerTurn);

    // START AI
    var boolCheck = false;
    
    if (!boolCheck) {
    boolCheck = addResponse(computerTurn); // check for WIN lines
    }
    
    if (!boolCheck) {
    boolCheck = addResponse(playerTurn); // check for BLOCK lines
    }
    
    if (!boolCheck) { 
    boolCheck = fillCenter();
    }
    
    if (!boolCheck) { 
    boolCheck = blockFork();
    }

    if (!boolCheck) { 
    boolCheck = oppositeCorner();
    }


    if (!boolCheck) { // otherwise add random input
      for (i = 0; i < 10; i++) {
        var random = randomNumber();
        if (buttons[random].innerHTML === "X" || buttons[random].innerHTML === "O") {
          continue;
        } else {
          buttons[random].innerHTML = computerTurn;
          break;
        }
      } //end of loop
      
    }// end of if



  } //end of player/AI interaction

    // RUN FUNCTIONS TO CHECK FOR WIN LINE
 checkWin(playerTurn); // check for player win lines
 checkWin(computerTurn); // check for computer win lines

  // IF NO WINS, CHECK FOR DRAW
   if (!checkWin("X") || !checkWin("O")) {
  draw();
    }
  
  
}); //End of game click handler