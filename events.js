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
// TODO: random word selection from the array above for the selectedWord
let selectedWord = "ninja";
let wordArray = [];
let counter = 0;

// catch all the keyboard events and map the letters to the sections
// document.addEventListener("keydown", (event) => {
// });
document.addEventListener("keydown", handleKeyboard);

function handleKeyboard(event) {
    console.log(event.key)

    // ["w", "a", "d", "a"]
    if (event.key === "Backspace") {
        wordArray.pop()
        // ["w", "a", "d"]
        document.querySelector(`#words-container section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${wordArray.length + 1}) .letter`).innerHTML = ""
        // for (let i = wordArray.length + 1; i <= 5 ; i++) {
        //     document.querySelector(`#words-container section:nth-of-type(1) .letter-box:nth-of-type(${i}) .letter`).innerHTML = ""
        // }
        return
    }

    // there is a bug, user can enter less letters than 5 to match the word
    if (event.key === "Enter") {
        // check if the letters are a match with the selectedWord
        console.log(selectedWord)
        for(let i = 0;i < selectedWord.length;i++) {
            if (selectedWord[i] == wordArray[i]) {
                // alternative function call instead of the operation below
                colorLetterBackground(i, "matched")

                // original way of the solution
                // document.querySelector(`section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${i + 1})`).className = "letter-box matched";
            }
            // if the letter exists in the word
            else if (selectedWord.includes(wordArray[i])) {
                colorLetterBackground(i, "included")
                // document.querySelector(`section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${i + 1})`).className = "letter-box included";
            } else {
                colorLetterBackground(i, "missed")
                // document.querySelector(`section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${i + 1})`).className = "letter-box missed";
            }
        }

        if (checkIfTheGuessIsCorrect()) {
            // Game won
            document.removeEventListener("keydown", handleKeyboard);
            let result = document.getElementById("result");
            // console.log(result)
            result.innerText = "you have won!";
            // console.log(result)
        }

        // go on with the i-th section
        counter++;
        if (counter == number_of_tries) {
            // game over
            // TODO: show a popup, with stats
            // add buttons to replay the game
            document.removeEventListener("keydown", handleKeyboard);
        }
        // reset wordArray = []
        wordArray = []
        return
    }

    let isValid = validateLetter(event.key);
    if (wordArray.length < 5 && isValid) {
        wordArray.push(event.key)

        for (let i = 1; i <= wordArray.length ; i++) {
            document.querySelector(`#words-container section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${i}) .letter`).innerHTML = wordArray[i-1]
        }
    }
}

function checkIfTheGuessIsCorrect() {
    return selectedWord === wordArray.join("");
}

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

function colorLetterBackground(index, className) {
    document.querySelector(`section:nth-of-type(${counter + 1}) .letter-box:nth-of-type(${index + 1})`).className = `letter-box ${className}`;
}