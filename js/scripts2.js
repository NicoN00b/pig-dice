//back-end logic
var currentScore = 0;

function Player(name, turn, roll, score) {
  this.name = name;
  this.turn = turn;
  this.roll = roll;
  this.score = score;
}

function roll() {
  var randomRoll = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  };
  var currentRoll = randomRoll(1,6);
  $("#currentRoll").text(currentRoll);
  if(currentRoll === 1) {
    currentScore = 0;
    this.turn = false;
  } else {
    currentScore += currentRoll;
  }
  $("#totalScore").text(currentScore);
};
// var player1 = new Player(("#newPlayer1"),totalScore);
// var player2 = new Player(("#newPlayer2"),);

// function Turn(die1, die2) { <---attribute on player, each player should have a boolean turn attribute
//   this.die1 = die1;
//   this.die2 = die2;
// }


// if (die1 !== 1 && die2 !== 1){
//   var totalDice = die1 + die2;
//   rollScore = totalDice;
// } else {
//   rollScore = 0 ;
//   this.turnScore;
//   this.turnScore += 0;
//   return "Womp Womp Womp";
// }

//front-end logic

$(document).ready(function() {
  $(".blank").submit(function(event) {
      event.preventDefault();
      var input1 = $("input#newPlayer1").val();
      var input2= $("input#newPlayer2").val();
      $("#show-player1").show();
      $(".Player1").text(input1);
      $("#show-player2").show();
      $(".Player2").text(input2);
  });
  $("#roll").click(function() {
    roll();
  });
});
