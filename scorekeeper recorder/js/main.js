var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var buttonOne = document.querySelector(".buttonOne");
var buttonTwo = document.querySelector(".buttonTwo");
var Reset = document.querySelector(".Reset");
var counter = document.querySelector("input");
var p = document.querySelector("p span");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameover = false;
var winnScore = 5;
counter.addEventListener("change", function () {
    winnScore = Number(counter.value);
    p.innerHTML = winnScore;
    reset();
});
if (buttonOne) {
    buttonOne.addEventListener("click", function () {
        if (!gameover) {
            playerOneScore++;
            playerOne.innerHTML = playerOneScore;
            if (winnScore === playerOneScore) {
                playerOne.classList.add("winner");
                gameover = true;
            }
        }
    })
}
if (buttonTwo) {
    buttonTwo.addEventListener("click", function () {
        if (!gameover) {
            playerTwoScore++;
            playerTwo.innerHTML = playerTwoScore;
            if (winnScore === playerTwoScore) {
                playerTwo.classList.add("winner");
                gameover = true;
            }
        }
    })
}

function reset() {

    playerOneScore = 0;
    playerTwoScore = 0;
    playerTwo.innerHTML = playerTwoScore;
    playerOne.innerHTML = playerOneScore;
    playerOne.classList.remove("winner");
    playerTwo.classList.remove("winner");
    gameover = false;

}

if (Reset) {
    Reset.addEventListener("click", function () {
        reset();
    })
}
