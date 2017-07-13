//back-end logic
var currentScore = 0;

function Player(name, turn, roll, score, identifier) {
  this.name = name;
  this.turn = turn;
  this.roll = roll;
  this.score = score;
  this.identifier = identifier;
}
//TO DO: change roll to player prototype
//TO DO: make it so that we change turns...
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
//MAKE GAME AN OBJECT< EACH PLAYER IS AN ASPECT OF THAT OBJECT
//front-end logic

$(document).ready(function() {
  $(".blank").submit(function(event) {
      event.preventDefault();
      var player1 = new Player($("input#newPlayer1").val(),true,0,"player-one-score");
      var player1 = new Player($("input#newPlayer1").val(),true,0,"player-one-score");

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
