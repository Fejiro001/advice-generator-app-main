let adviceNumber = document.querySelector("#advice-number");
let adviceText = document.querySelector("#advice");
let adviceButton = document.querySelector(".advice-button");
let dice = document.querySelector(".dice");

let apiURL = "https://api.adviceslip.com";

// Fetch the data from the API URL
async function fetchData() {
    let response = await fetch(`${apiURL}/advice`);
    let data = await response.json();
    displayAdvice(data);
}

// Displays the data in our website
function displayAdvice(data) {
    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = '"' + data.slip.advice + '"';
}

// Changes to a new advice text and corresponding id number on clicking
adviceButton.addEventListener('click', () => {
    fetchData();

    // adds animation anytime the button is clicked
    setTimeout(() => {
        dice.classList.add("rollDice");
    }, 20);
    dice.classList.remove("rollDice");
});