let homeScoreEl = document.getElementById("score-home")
let homeScore = 0

let guestScoreEl = document.getElementById("score-guest")
let guestScore = 0

//Home score functions
function deductHome(points) {
    if (homeScore >0) {
        homeScore += points
    }

    homeScoreEl.textContent = homeScore
}

function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
}


//Away score functions
function deductGuest(points) {
    if (guestScore > 0) {
        guestScore += points
    }

    guestScoreEl.textContent = guestScore
}

function addGuest (points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
}

//Create a function to clear scores
function clearScores() {
    guestScore = 0
    homeScore = 0

    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore

    time = startingMinutes *60
    countdownEl.textContent = startingMinutes + ":00"
}

//countdown timer
//create a constant variable for starting minutes and convert it to seconds with a second variable
const startingMinutes = 20
let time = startingMinutes * 60

//grab HTML element
const countdownEl = document.getElementById("countdown")

setInterval(updateCountdown, 1000)

//create a function to update our countdown element and decrement the timer
function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds

    countdownEl.textContent = `${minutes}:${seconds}`
    time--
}
