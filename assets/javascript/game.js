$(document).ready(function() {
    var currentGuess = "";
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".guessesLeft").text(guessesLeft);
    var userGuesses = [];
    var possibleGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess = "";

    function checkGuess() {
        $(".currentGuess").text(currentGuess);
        $(".computerGuess").text(computerGuess);

        if (currentGuess === computerGuess) {
            wins += 1;
            $(".wins").text(wins);
            alert("You win!");
            clearGame();
        }

        else if (guessesLeft > 0) {
        guessesLeft -= 1;
        $(".guessesLeft").text(guessesLeft);
        userGuesses.push(currentGuess);
        $(".userGuesses").text(userGuesses);

        }
    };

    function clearGame() {
        currentGuess = "";
        guessesLeft = 9;
        userGuesses = [];
    };

    document.onkeyup = function(event) {
        currentGuess = event.key;
        computerGuess = possibleGuesses[Math.floor(Math.random() * possibleGuesses.length)];
        if ((possibleGuesses.indexOf(currentGuess) != -1) && (guessesLeft > 0) && (userGuesses.indexOf(currentGuess) === -1)) {
            
            checkGuess();
            
        }

        else if (guessesLeft > 1){
            $(".currentGuess").text(currentGuess + " is invalid.");
        }

        else {
            $(".currentGuess").text("You lose!");
            losses += 1;
            $(".losses").text(losses);
            clearGame();
        }
    }
})