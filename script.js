let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score") 
const compScorePara = document.querySelector("#comp-score") 
// to generate comp choice(random fun gives any random no. between 0 to 1)
// to get any random no. between 0 and then number we multiply ===>  math.random()*(number+1) 
// and we apply floor fun to get theinteger value
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game draw. play again!";
    msg.style.backgroundColor="blue";
}


// to show winner
const showWinner = (userWin , userChoice ,CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you won.");
        msg.innerText = `you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose.");
        msg.innerText = `you lose ${userChoice} beats your ${CompChoice}`;
        msg.style.backgroundColor="red";
    }
}


// random choice made by the computer
const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    // generate comp choice
    const CompChoice = genCompChoice();
    console.log("comp choice=", CompChoice);

    if (userChoice == CompChoice) {
        // draw case
        drawGame();
    }
    else {
        userWin = true;
        if (userChoice == "rock") {
            // comp can choose paper or scissor(not draw case)
            userWin = CompChoice === "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            // comp can choose rock  or scissors(not draw case)
            userWin = CompChoice === "scissors" ? false : true;
        }
        else {
            // comp can choose rock  or scissors(not draw case)
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , CompChoice);
    }

};


// choice for the user
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
