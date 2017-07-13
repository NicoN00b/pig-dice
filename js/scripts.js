
function Player(player1) {
  this.player = playerName;
  this.score = score;
  this.turnScore = turnScore;
}

Player.prototype.rollDie = function(){
  var rollScore = 0
  var diceArray = []
  var dice1 = Math.floor(Math.random() * (7 - 1)+1);
  var dice2 = Math.floor(Math.random() * (7 - 1)+1);
  // This might be a good alternative: var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  if (dice1 !== 1 && dice2 !== 1){
    var totalDice = dice1 + dice2;
    rollScore = totalDice;
  } else {
    rollScore = 0 ;
    this.turnScore;
    this.turnScore += 0;
    return "Womp Womp Womp";
  }

  diceArray(dice1, dice2);
  return diceArray;
};

Player.prototype.hold = function() {
  this.score += this.turnScore
  this.turnScore = 0;
}


//
// Player2
//
// Dice
//
// Score
//
// $(document).ready(function); {
//   $('button').click(function(event) {
//     event.preventDefault();
//
//
//   });
// });
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
});
