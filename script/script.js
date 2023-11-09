let adviceNumber = document.querySelector("#advice-number");
let adviceText = document.querySelector("#advice");
let adviceButton = document.querySelector("#advice-button");
let dice = document.querySelector(".dice");

let apiURL = "https://api.adviceslip.com";

// Fetch the data from the API URL
async function fetchData() {
    let response = await fetch(`${apiURL}/advice`);
    let data = await response.json();
    // console.table(data);
    displayAdvice(data);
}

// Displays the data in our website
function displayAdvice(data) {
    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = '"' + data.slip.advice + '"';
}

// Shows a new advice on loading the website
window.addEventListener('load', () => fetchData());

// Changes to a new advice text and corresponding id number on clicking
adviceButton.addEventListener('click', () => {
    fetchData();

    // adds animation anytime the button is clicked
    setTimeout(() => {
        dice.classList.add("rollDice");
    }, 20);
    dice.classList.remove("rollDice");
});