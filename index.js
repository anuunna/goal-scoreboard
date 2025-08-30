let homeCount = document.getElementById("home-count")
let homeScore = 0

function homeInc1() {
    homeScore += 1
    homeCount.textContent = homeScore
}
function homeInc2() {
    homeScore += 2
    homeCount.textContent = homeScore
}
function homeInc3() {
    homeScore+= 3
    homeCount.textContent = homeScore
}

let guestCount = document.getElementById("guest-count")

function guestInc1() {
    count += 1
    guestCount.textContent = count
}
function guestInc2() {
    count += 2
    guestCount.textContent = count
}
function guestInc3() {
    count+= 3
    guestCount.textContent = count
}