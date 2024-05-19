function GetComputerChoice(max) {
    return Math.floor(Math.random() * max) + 1;
}

function GetHumanChoice() {
    console.log(
        "\n1 - Rock\n" +
        "2 - Papper\n" +
        "3 - Scissors"
    );

    let number = prompt("Send number!");
    
    if (number == 1) {
        return 1;
    }
    if (number == 2) {
        return 2;
    }
    if (number == 3) {
        return 3;
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Ничья");
        playRound(GetHumanChoice(), GetComputerChoice(3));
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

function playGame(rounds) {
    for (i=0; i<=rounds; i++) {
        const humanSelection = GetHumanChoice();
        const computerSelection = GetComputerChoice(3);
        playRound(humanSelection, computerSelection);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(5)