const createPasswordBtn = document.querySelector("#create-password")
const form = document.querySelector("form")
const passwordInput = document.querySelector("#password-input")

let CREATED_PASSWORD = ""

const passwordCharacterTypesObj = {
    upperCase: "upperCase",
    lowerCase: "lowerCase",
    number: "number",
    symbol: "symbol"
}

const passwordCharacterTypes = [
    passwordCharacterTypesObj.upperCase,
    passwordCharacterTypesObj.lowerCase,
    passwordCharacterTypesObj.number,
    passwordCharacterTypesObj.symbol
]
const Helper = {
    getRandomNumBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    addCharacter(character) {
        CREATED_PASSWORD+=character
    },

    getRandomCharacter(characterType) {
        if(passwordCharacterTypesObj.lowerCase == characterType) {
            const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            const randomInt = Helper.getRandomNumBetween(0, alphabet.length - 1)
            return alphabet[randomInt]
        } else if (passwordCharacterTypesObj.upperCase == characterType) {
            const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            const randomInt = Helper.getRandomNumBetween(0, alphabet.length - 1)
            return alphabet[randomInt]
          
        } else if (passwordCharacterTypesObj.number == characterType) {
            const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const randomInt = Helper.getRandomNumBetween(0, number.length - 1)
            return number[randomInt]
    
        } else if (passwordCharacterTypesObj.symbol == characterType) {
            const symbol = ["_", ".", "@", "!", "#", "£", "$", "§", "%", "&", "/", "(", ")", "{", "}", "[", "]", "?", "=", "*", "+", "-", ";"];
            const randomInt = Helper.getRandomNumBetween(0, symbol.length - 1)
            return symbol[randomInt]
        } 
    }
}



//listeners

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

createPasswordBtn.addEventListener("click", async() => {
    CREATED_PASSWORD=""

    const characterLength =  Number(await prompt("How many characters do you want"))


    for(let i = 0; i < characterLength; i++) {

        const randomInt = Helper.getRandomNumBetween(0, passwordCharacterTypes.length - 1)

        const characterType = passwordCharacterTypes[randomInt]
        const character = Helper.getRandomCharacter(characterType)
        Helper.addCharacter(character)
        
    }

    passwordInput.value = CREATED_PASSWORD

    
})
