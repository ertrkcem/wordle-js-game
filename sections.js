const number_of_tries=6;

function create_word_sections() {
    let containerElement = document.getElementById("words-container");
    for (let i = 0;i < number_of_tries; i++) {
        let sectionElement = document.createElement("section");
        sectionElement.className = "word d-flex flex-row";

        for (let i = 0; i < 5; i++) {
            let labelElement = document.createElement("label")
            labelElement.className = "letter";
            labelElement.innerHTML = "";

            let divElement = document.createElement("div")
            divElement.className = "letter-box";
            divElement.appendChild(labelElement);

            // console.log(divElement)
            sectionElement.insertAdjacentElement("beforeend", divElement)
        }

        // console.log(sectionElement);

        containerElement.insertAdjacentElement("beforeend", sectionElement);
    }
}

create_word_sections()


// this side is not used now
// here is the same functionality without dynamic element creation
// this is taking the htmlString into account to create whole section element with its childs under
function create_word_sections_alternative() {
    const parser = new DOMParser();
    let htmlString = `<section class="word d-flex flex-row">
        <div class="letter-box">
            <label class="letter"></label>
        </div>
        <div class="letter-box">
            <label class="letter"></label>
        </div>
        <div class="letter-box">
            <label class="letter"></label>
        </div>
        <div class="letter-box">
            <label class="letter"></label>
        </div>
        <div class="letter-box">
            <label class="letter"></label>
        </div>
    </section>`
    sectionElement = parser.parseFromString(htmlString, "text/html");
    console.log(sectionElement.body.firstChild);

    let containerElement = document.getElementById("words-container");
    for (let i = 0; i < number_of_tries; i++) {
        console.log(containerElement);
        containerElement.insertAdjacentHTML("beforeend", htmlString)
    }
}
