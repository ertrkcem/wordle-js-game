let words = [
    "ninja",
    "spade",
    "pools",
    "drive",
    "relax",
    "times",
    "train",
    "cores",
    "pours",
    "blame",
    "banks",
    "phone",
    "bling",
    "coins"
]
const wordArray = [];
// catch all the keyboard events and map the letters to the sections
document.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "Backspace") {
            wordArray.pop()
            // for (let i = 1; i <= wordArray.length ; i++) {
            //     document.querySelector(`#words-container section:nth-of-type(1) .letter-box:nth-of-type(${i}) .letter`).innerHTML = wordArray[i-1]
            // }
            return
        }

        let isValid = validateLetter(event.key);
        console.log(event.key)
        if (wordArray.length < 5 && isValid) {
            console.log(event.key)
            wordArray.push(event.key)

            for (let i = 1; i <= wordArray.length ; i++) {
                document.querySelector(`#words-container section:nth-of-type(1) .letter-box:nth-of-type(${i}) .letter`).innerHTML = wordArray[i-1]
            }
        }
    })

function validateLetter(letter) {
    // Regular expression to match only letters (uppercase and lowercase)
    const lettersOnlyRegex = /^[A-Za-z]+$/;

    // Test the input against the regular expression
    if (lettersOnlyRegex.test(letter) && letter.length == 1) {
        return true;
    } else {
        return false;
    }
}