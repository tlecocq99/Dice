// Simulate loading screen

window.onload = function() {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

        document.getElementById("main-content").classList.remove("hidden");

    }, 2000); // 2 seconds loading delay

};



// Dice roller function with rolling animation

function rollDice(sides) {

    let dice = document.getElementById("dice");

    let resultDisplay = document.getElementById("result");



    let rollTimes = 10; // Number of times to cycle through dice faces

    let currentRoll = 0;

    

    let interval = setInterval(() => {

        let randomRoll = Math.floor(Math.random() * sides) + 1;

        updateDiceFace(randomRoll);

        currentRoll++;

        if (currentRoll >= rollTimes) {

            clearInterval(interval);

            let finalResult = Math.floor(Math.random() * sides) + 1;

            updateDiceFace(finalResult);

            resultDisplay.textContent = `You rolled a ${finalResult}!`;

        }

    }, 100);

}



// Function to update the dice face visually

function updateDiceFace(number) {

    let dice = document.getElementById("dice");

    dice.innerHTML = ""; // Clear previous dots



    let dotPositions = {

        1: ["one"],

        2: ["two", "five"],

        3: ["two", "six", "five"],

        4: ["two", "three", "four", "five"],

        5: ["two", "three", "four", "five", "six"],

        6: ["two", "three", "four", "five", "one", "six"]

    };



    let positions = dotPositions[number] || ["one"];



    positions.forEach(pos => {

        let dot = document.createElement("div");

        dot.classList.add("dot", pos);

        dice.appendChild(dot);

    });



    // Add a little rotation effect

    dice.style.transform = `rotate(${Math.random() * 360}deg)`;

}



// Chat functionality

function sendMessage(event) {

    if (event.key === "Enter") {

        let input = document.getElementById("chat-input");

        let message = input.value.trim();

        if (message !== "") {

            let chatMessages = document.getElementById("chat-messages");

            let newMessage = document.createElement("p");

            newMessage.textContent = message;

            chatMessages.appendChild(newMessage);

            input.value = "";

            chatMessages.scrollTop = chatMessages.scrollHeight;

        }

    }

}

// Ensure button click also sends message
document.getElementById("send-button").addEventListener("click", () => sendMessage({ key: "Enter" }));