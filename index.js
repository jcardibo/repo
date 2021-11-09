//Array for computer
const arr = ['rock', 'paper', 'scissor']
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//createElement////////////////////////////////////////////////////////////////////////////////////////////////
//Create playDiv
const playDiv = document.createElement('div')
    //Create text in playDiv
const gameStatusText = document.createElement('h1')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BTN value
const btn = document.querySelectorAll('button')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Container Div
const divContainer = document.querySelector("#container")

//User container
const divUserContainer = document.querySelector("#userContainer")
const userTextContainer = document.querySelector("#userTextContainer")
const h2UserScore = document.querySelector("#userScore")

//Computer Container
const divComputerContainer = document.querySelector("#computerContainer")
const computerTextContainer = document.querySelector("#computerTextContainer")
const h2ComputerScore = document.querySelector('#computerScore')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//misc. var
let computerScore = 0
let userScore = 0
let round = 0

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Computer and userInput
function computerOutput() {
    let computerPlay = arr[Math.floor(Math.random() * 3)];
    return computerPlay
}



//Play module
function play(userInput, computerPlay) {
    let userStatus = ''
    if (userInput == "rock") {
        // computer rock = draw
        if (computerPlay == 'rock') {
            userStatus = "Draw"
        }
        // computer scissor =  win
        else if (computerPlay == 'scissor') {
            userScore++
            userStatus = 'You win'
        }
        // computer paper = loose
        else if (computerPlay == "paper") {
            computerScore++
            userStatus = "You loose"
        } else {
            userStatus = "err"
        }
    } else if (userInput == "scissor") {
        // computer rock = loose
        if (computerPlay == 'rock') {
            computerScore++
            userStatus = "You loose"
        }
        // computer scissor =  drwa
        else if (computerPlay == 'scissor') {
            return 'Draw'
        }
        // computer paper = win
        else if (computerPlay == "paper") {
            userScore++
            userStatus = "You win"
        } else {
            userStatus = "err"
        }
    } else if (userInput == "paper") {
        // computer rock = win
        if (computerPlay == 'rock') {
            userScore++
            userStatus = "You win"
        }
        // computer scissor =  loose
        else if (computerPlay == 'scissor') {
            computerScore++
            userStatus = 'You loose'
        }
        // computer paper = win
        else if (computerPlay == "paper") {
            userStatus = "Draw"
        } else {
            userStatus = 'err'
        }
    } else {
        return 'err'
    }
    return userStatus
}

// // game module
function playRound(userChoice) {
    if (round <= 5) {
        let userStatus = play(userChoice, computerOutput())
        if (userStatus == "You win") {
            addPlayDiv('win')
            updateScore(userScore, computerScore)
            round++
        } else if (userStatus == "You loose") {
            addPlayDiv('loose')
            updateScore(userScore, computerScore)
            round++
        } else if (userStatus == "Draw") {
            addPlayDiv('draw')
            updateScore(userScore, computerScore)
            round++
        }
    } else {
        if (computerScore > userScore) {
            finalGameState('computer')
        } else if (userScore > computerScore) {
            finalGameState('user')
        } else {
            finalGameState('draw')
        }
    }

}



//PlayDiv 
function addPlayDiv(status) {
    divContainer.insertBefore(playDiv, divComputerContainer)
    playDiv.appendChild(gameStatusText)
    playDiv.setAttribute("id", 'playdiv')
    if (status == "win") {
        gameStatusText.textContent = "win"
        checkPlayDivClass('divwin')
    } else if (status == "loose") {
        gameStatusText.textContent = "Loose"
        checkPlayDivClass('divloose')
    } else if (status == 'draw') {
        gameStatusText.textContent = "Draw"
        checkPlayDivClass('divdraw')
    } else {
        return "Error!"
    }
}

function removePlayDiv() {
    divContainer.removeChild(playDiv)
}

function checkPlayDivClass(classToChange) {
    const elementToSelect = document.querySelector('#playdiv')
    if (elementToSelect.classList.contains('divloose')) {
        elementToSelect.classList.remove('divloose')
        elementToSelect.classList.add(classToChange)
    } else if (elementToSelect.classList.contains('divwin')) {
        elementToSelect.classList.remove('divwin')
        elementToSelect.classList.add(classToChange)
    } else if (elementToSelect.classList.contains('divdraw')) {
        elementToSelect.classList.remove('divdraw')
        elementToSelect.classList.add(classToChange)
    } else {
        elementToSelect.classList.add(classToChange)
    }
}

function updateScore(userScore, computerScore) {
    h2ComputerScore.textContent = computerScore
    h2UserScore.textContent = userScore
}

function finalGameState(winner) {
    if (winner == 'computer') {
        gameStatusText.textContent = "Computer wins score is " + computerScore + " for computer and " + userScore + " for user"
    } else if (winner == 'user') {
        gameStatusText.textContent = "User wins score is " + computerScore + " for computer and" + userScore + " for user"
    } else {
        gameStatusText.textContent = "Draw! score is " + computerScore + " for computer and" + userScore + " for user"
    }
}