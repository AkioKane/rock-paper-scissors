let humanScore = 0
let computerScore = 0

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button-simbol');

    buttons.forEach(button => {
        button.addEventListener('click', function playSelection(event) {
            const buttonId = event.target.id;
            let game = new Game(humanScore, computerScore)
            return game.getHumanChoice(buttonId);
        });
    });
});

class Game {
    construcor(humanScore, computerScore) {
        this.humanScore = humanScore;
        this.computerScore = computerScore;

    }

    getComputerChoice(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    getHumanChoice(humanChoice) {
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
    
        return this.playRound(result, this.getComputerChoice(3))
    }

    playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return console.log("Ничья");
        }
    
        else if (
            humanChoice == 1 && computerChoice == 2 || 
            humanChoice == 2 && computerChoice == 3 ||
            humanChoice == 3 && computerChoice == 1
        ) {
            this.humanScore += 1;
            console.log(`Human score: ${this.humanScore}\n` + `Computer Score: ${this.computerScore}`);
            return console.log("Human win!");
        }
    
        else if (
            humanChoice == 1 && computerChoice == 3 || 
            humanChoice == 2 && computerChoice == 1 ||
            humanChoice == 3 && computerChoice == 2
        ) {
            this.computerScore + 1;
            console.log(`Human score: ${this.humanScore}\n` + `Computer Score: ${this.computerScore}`);
            return console.log("Computer win!");
        }
        console.log(`Human score: ${this.humanScore}\n` + `Computer Score: ${this.computerScore}`)
    }
}