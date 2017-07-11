
// function Player(player1) {
//   this.player1 =
// }

// var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
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
