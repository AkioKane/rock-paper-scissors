document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button-simbol');

    buttons.forEach(button => {
        button.addEventListener('click', function playSelection(event) {
            const buttonId = event.target.id;
            return GetHumanChoice(buttonId);
        });
    });
});

function GetComputerChoice(max) {
    return Math.floor(Math.random() * max) + 1;
}

function GetHumanChoice(humanChoice) {
    console.log(
        "\n1 - Rock\n" +
        "2 - Papper\n" +
        "3 - Scissors"
    );

    let choiceHuman = humanChoice;
    let result = 0
    
    if (choiceHuman == "rock") {
        result =  1;
    }
    if (choiceHuman == "paper") {
        result = 2;
    }
    if (choiceHuman == "scissors") {
        result = 3;
    }

    return playRound(result, GetComputerChoice(3))
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("Ничья");
    }

    else if (
        humanChoice == 1 && computerChoice == 2 || 
        humanChoice == 2 && computerChoice == 3 ||
        humanChoice == 3 && computerChoice == 1
    ) {
        humanScore += 1;
        console.log(`Human score: ${humanScore}\n` + `Computer Score: ${computerScore}`);
        return console.log("Human win!");
    }

    else if (
        humanChoice == 1 && computerChoice == 3 || 
        humanChoice == 2 && computerChoice == 1 ||
        humanChoice == 3 && computerChoice == 2
    ) {
        computerScore += 1;
        console.log(`Human score: ${humanScore}\n` + `Computer Score: ${computerScore}`);
        return console.log("Computer win!");
    }
    console.log(`Human score: ${humanScore}\n` + `Computer Score: ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;

