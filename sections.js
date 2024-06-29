const number_of_tries=6;

function create_word_section() {
    let containerElement = document.getElementById("words-container");
    for (let i=0;i<6;i++) {
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

function create_word_sections2() {
    const parser = new DOMParser();
    let htmlString = `<section class="word d-flex flex-row">
        <div class="letter-box">
            <label></label>
        </div>
        <div class="letter-box">
            <label></label>
        </div>
        <div class="letter-box">
            <label></label>
        </div>
        <div class="letter-box">
            <label></label>
        </div>
        <div class="letter-box">
            <label></label>
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

function sayHello() {
    console.log("Hello from cem");
}

create_word_section()