let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScorePts = 0
let guestScorePts = 0

function add1pointhome(){
  homeScorePts += 1
  homeScore.textContent = homeScorePts
}

function add2pointshome(){
  homeScorePts += 2
  homeScore.textContent = homeScorePts
}

function add3pointshome(){
  homeScorePts += 3
  homeScore.textContent = homeScorePts
}

function add1pointguest(){
  guestScorePts += 1
  guestScore.textContent = guestScorePts
}

function add2pointsguest(){
  guestScorePts += 2
  guestScore.textContent = guestScorePts
}

function add3pointsguest(){
  guestScorePts += 3
  guestScore.textContent = guestScorePts
}

function newgame(){
  homeScore.textContent = 0
  guestScore.textContent = 0
  homeScorePts = 0
  guestScorePts = 0
}