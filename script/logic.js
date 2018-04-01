// Questions
var question = [{
  question: "What Company Developed and Published Fortnite?",
  answers: ["Paradox Interactive","Epic Games","Activision","Mojang"],
  correctAnswer: "Epic Games"
}, {
  question: "When was Fortnite released for Early Access?",
  answers: ["April 14, 2015","September 25, 2016","July 25, 2017","January 2, 2018"],
  correctAnswer: "July 25, 2017"
}, {
  question: "What is Fortnite Battle Royale?",
  answers: ["A First Person Shooter","A creative Puzzle game","A strategic Military Game","Online Battle Arena for 100 players"],
  correctAnswer: "Online Battle Arena for 100 players"
}, {
  question: "Which is NOT a location in Battle Royale?",
  answers: ["Rusty Ranch","Tilted Towers","Sandy Shores","Dusty Depot"],
  correctAnswer: "Rusty Ranch"
}, {
  question: "What is the digital currency of Fortnite?",
  answers: ["Battle Bucks","Victory Tokens","V-Bucks","V-Sauce"],
  correctAnswer: "V-Bucks"
}, {
  question: "What popular game is similar to Fortnite Battle Royale?",
  answers: ["Player Unknown Battlegrounds","Overwatch","Destiny 2","Paragon"],
  correctAnswer: "Player Unknown Battlegrounds"
}, {
  question: "What item do you earn after your first victory in Battle Royale?",
  answers: ["A Taunt Dance","A Pinata","A Pickaxe","An Umbrella"],
  correctAnswer: "An Umbrella"
}, {
  question: "Which item was temporarily taken out due to a gamebreaking bug?",
  answers: ["The Impulse Grenade","The Boogie Bomb","Flash Grenade","Fart in a Jar"],
  correctAnswer: "The Boogie Bomb"
}, {
  question: "Which tier of weapon is the best?",
  answers: ["Green","White","Purple","Yellow"],
  correctAnswer: "Yellow"
}, {
  question: "Which platform is Fortnite NOT available on?",
  answers: ["Mobile Phone","Nintendo Switch","Xbox One","PC"],
  correctAnswer: "Nintendo Switch"
}];

// Game
var game = {

        //Variables
        correctScore:0,
        incorrectScore:0,
        results: ["You Eliminated that Question!", "You were Eliminated, Try again."],

        // Functions
        start: function() {
                // Add start button
                $('#graphic').html('<button id="start">READY UP</button>');

                $('#start').unbind().click(function() {

                  $('#start').remove();

                  game.askQuestion();
                })
        },

        askQuestion: function() {

            $('#answer').append("<div id='ans-one'></div>");
            $('#answer').append("<div id='ans-two'></div>");
            $('#answer').append("<div id='ans-three'></div>");
            $('#answer').append("<div id='ans-four'></div>");

            $('#question').html(question[0].question);

            var ansOne = question[0].answers[0]
            $('#ans-one').html(ansOne);

            var ansTwo = question[0].answers[1]
            $('#ans-two').html(ansTwo);

            var ansThree = question[0].answers[2]
            $('#ans-three').html(ansThree);

            var ansFour = question[0].answers[3]
            $('#ans-four').html(ansFour);

            var correct = question[0].correctAnswer;

            $('#ans-one').unbind().click(function() {

                userGuess = ansOne;
                game.checkGuess(userGuess, correct);
            })

            $('#ans-two').unbind().click(function() {

                userGuess = ansTwo;
                game.checkGuess(userGuess, correct);
            })

            $('#ans-three').unbind().click(function() {

                userGuess = ansThree;
                game.checkGuess(userGuess, correct);
            })

            $('#ans-four').unbind().click(function() {

                userGuess = ansFour;
                game.checkGuess(userGuess, correct);
            })

          },

          checkGuess: function(userGuess,correct) {

            if (userGuess === correct){

              $('#question').html(game.results[0]);

              game.correctScore++;

              $('#ans-one').remove();
              $('#ans-two').remove();
              $('#ans-three').remove();
              $('#ans-four').remove();

              $('#answer').html("<p>Number of Questions Right: " + game.correctScore + "</p>" +
                                  "<p>Number of Questions Wrong: " + game.incorrectScore + "</p>");

              var correctImg = '<img src="https://media.giphy.com/media/iMBEVqJRJkEQC5EGa2/giphy.gif" width="480px" height="270px"/>';
              $('#graphic').html(correctImg)


              game.pause();

          }

          else {

              $('#question').html(game.results[1]);

              game.incorrectScore++;

              $('#ans-one').remove();
              $('#ans-two').remove();
              $('#ans-three').remove();
              $('#ans-four').remove();

              // $('#answer').html("The correct answer was "+ correct);

              $('#answer').html("<p>The correct answer was: "+ correct + "</p>" +
                                  "<p>Number of Questions Right: " + game.correctScore + "</p>" +
                                    "<p>Number of Questions Wrong: " + game.incorrectScore + "</p>");

              var correctImg = '<img src="https://thumbs.gfycat.com/MelodicFinishedEmperorpenguin-size_restricted.gif" width="480px" height="270px"/>';
              $('#graphic').html(correctImg);


              game.pause();
          }
      },

      pause: function() {

            setTimeout(function(){ game.nextQuestion(); }, 4000);
      },

      nextQuestion: function() {

            $('#answer').empty();
            $('#graphic').empty();

            question.shift();

            if(question.length === 0) {
              game.finished();
            }

            else {
              game.askQuestion();
            }
      },

      finished: function() {

        if (game.correctScore > 5){

          $('#question').html("Victory Royale!");
          $('#answer').html("<p>Number of Questions Right: " + game.correctScore + "</p>" +
                              "<p>Number of Questions Wrong: " + game.incorrectScore + "</p>");

          $('#graphic').html('<img src="https://thumbs.gfycat.com/QuickMediumAsiaticmouflon-size_restricted.gif"      width="480px" height="270px"/>' +
                                  '<button id="reset">Play Again!</button>');

          $('#reset').unbind().click(function() {

                      $('#reset').remove();
                        game.reset();
            })
        }

        else {

          $('#question').html("So close!");
          $('#answer').html("<p>Number of Questions Right: " + game.correctScore + "</p>" +
                              "<p>Number of Questions Wrong: " + game.incorrectScore + "</p>");

          $('#graphic').html('<img src="https://thumbs.gfycat.com/FinishedAchingKissingbug-size_restricted.gif"      width="480px" height="270px"/>' + '<button id="reset">Try again?</button>');

          $('#reset').unbind().click(function() {

              $('#reset').remove();
              game.reset();
          })
        }
      },


      reset: function() {

            location.reload();
      },





// Close game
};

game.start();
