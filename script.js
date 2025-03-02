let userScore=0;
let compScore=0;
const choices= document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const genCompChoice= () => {
    const options = ["Rock", "Paper", "Scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}
const drawGame = () => {
    msg.innerText = "Game was draw. Play Again!";
    msg.style.backgroundColor = "#227a88";
}
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}
let playGame= (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach(( choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}));
