
const words = ["април", "земја", "крт", "знаме", "рака", "птица", "око", "желба", "замок", "топка"];
let secretWord;
let attempts;
const maxAttempts = 5;

function startGame() {
    // Се одбира рандом збор од листата 
    secretWord = words[Math.floor(Math.random() * words.length)];
    
    // Тука се покажуваат првите две букви за старт
    document.getElementById("hint").textContent = `Хинт: ${secretWord.slice(0, 2)}___`;
    
    // Се ресетираат погодоците и пораката
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("resetButton").style.display = "none";
}

function makeGuess() {
    const userInput = document.getElementById("guessInput").value.toLowerCase();
    const messageElement = document.getElementById("message");

    if (!userInput || userInput.length < 3) {
        messageElement.textContent = "Внесете збор со уште барем плус од три букви.";
        return;
    }

    attempts++;

    // Провери дали погодокот е точен 
    if (userInput === secretWord) {
        alert("Браво! Го погодивте зборот  „" + secretWord + "“ во  " + attempts + " обид/а!");
       // messageElement.textContent = `Браво! Го погодивте зборот „${secretWord}“ во ${attempts} обид/а!`;
        document.getElementById("resetButton").style.display = "block";
    } else {
        const remainingAttempts = maxAttempts - attempts;
        if (remainingAttempts > 0) {
            messageElement.textContent = `Не е точен зборот! Обидете се повторно. Имате уште ${remainingAttempts} погодоци останато.`;
        } else {
            alert("Играта заврши! Зборот беше: „" + secretWord + "“."
            );
            document.getElementById("resetButton").style.display = "block";
        }
    }

    // Се прочистува местото за внес на зборот
    document.getElementById("guessInput").value = "";
}

function resetGame() {
    startGame();
}

// Започни ја играта кога ќе се обнови страната 
window.onload = startGame;