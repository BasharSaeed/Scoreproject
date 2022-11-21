    let homeEl = document.getElementById("scoreHome-El")  
    let guestEl = document.getElementById("scoreGuest-El")
    let homescore = 0
    let guestScore = 0
function homePlus1(){
  homescore +=1
  homeEl.textContent = homescore
 
}

function homePlus2(){
 homescore +=2
  homeEl.textContent = homescore
}

function homePlus3(){
    homescore +=3
  homeEl.textContent = homescore
}

function guestPlus1(){
    guestScore +=1
    guestEl.textContent = guestScore
}
function guestPlus2(){
    guestScore +=2
    guestEl.textContent = guestScore
}
function guestPlus3(){
    guestScore +=3
    guestEl.textContent = guestScore
}

