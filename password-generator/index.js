const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOne = document.getElementById("password1-el")
let passwordTwo = document.getElementById("password2-el")

function getRandomCharacter(){
    let randomCharacters = Math.floor(Math.random() * characters.length)
    return characters[randomCharacters]
}

function generateRandomPassword(){
  let randompassword = ""
  for (let i = 0; i < passwordLength; i++){
    randompassword += getRandomCharacter()
  }
  return randompassword
}

function generate(){
  passwordOne.textContent = generateRandomPassword()
  passwordTwo.textContent = generateRandomPassword()
}
