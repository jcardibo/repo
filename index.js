const arr = initArr()
let userScore = 1
let computerScore = 1


//Initialiaze Array
function initArr() {
    const arr = ['rock', 'paper', 'scissor']
    return arr
}

// Computer and userInput
function computerOutput() {
    let computerPlay = arr[Math.floor(Math.random() * 3)];
    return computerPlay
}

function userInput() {
    let userInput = prompt("Rock, Paper, Scissor").toLowerCase();
    const verifiedUserInput = checkInput(userInput)
    return verifiedUserInput
}


//Play module
function play(userPlay, computerPlay) {
    if (userPlay == "rock") {
        // computer rock = draw
        if (computerPlay == 'rock') {
            return "Draw"
        }
        // computer scissor =  win
        else if (computerPlay == 'scissor') {
            userScore++
            return 'You win'
        }
        // computer paper = loose
        else if (computerPlay == "paper") {
            computerScore++
            return "You loose"
        } else {
            return "err"
        }
    } else if (userPlay == "scissor") {
        // computer rock = loose
        if (computerPlay == 'rock') {
            computerScore++
            return "You loose"
        }
        // computer scissor =  drwa
        else if (computerPlay == 'scissor') {
            return 'Draw'
        }
        // computer paper = win
        else if (computerPlay == "paper") {
            userScore++
            return "You Win"
        } else {
            return "err"
        }
    } else if (userPlay == "paper") {
        // computer rock = win
        if (computerPlay == 'rock') {
            userScore++
            return "You win"
        }
        // computer scissor =  loose
        else if (computerPlay == 'scissor') {
            computerScore++
            return 'You loose'
        }
        // computer paper = win
        else if (computerPlay == "paper") {
            return "Draw"
        } else {
            return 'err'
        }
    } else {
        return 'err'
    }
}

// game module
function game() {
    let round = 0
    let userPlay = userInput
    let computerPlay = computerOutput
    while (round != 5) {
        console.log(play(userPlay(), computerPlay()))
        round++
    }
    if (computerScore > userScore) {
        console.log("Computer wins score is " + computerScore + " for computer and" + userScore + " for user")
    } else if (userScore > computerScore) {
        console.log("User wins score is " + computerScore + " for computer and" + userScore + " for user")
    } else {
        console.log("Draw! score is " + computerScore + " for computer and" + userScore + " for user")
    }

}



function checkScore(userScore, computerScore) {
    // 2 var
    // track score
    //record score
    //increment
    //si win ++

}
//combine computer and userinput

// Verification module
function checkInput(userInput) {
    let status;
    while (status != true) {
        if (userInput == arr.find(item => item == userInput)) {
            status = true
            return userInput
        } else {
            userInput = prompt("Re enter value!").toLowerCase()
            status = false
        }
    }
}