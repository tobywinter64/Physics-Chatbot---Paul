const questions = {    // This is the array used to define what topics I want, and what questions I want to be asked. 
    equations: [
        { question: "What is the equation for kinetic energy?", answer: "Ek = 0.5 x m x v^2" },
        { question: "What is the equation for gravitational potential energy?", answer: "GPE = m x gfs x h" },
        { question: "What is the equation for elastic energy? ", answer: "Ee = 0.5 x k x e^2" },
        { question: "What is the equation for power?", answer: "P = w/t" },
        { question: "What is the equation for work done?", answer: "W = f x d" },
        { question: "What is the equation for force?", answer: "F = m x a" },
        { question: "What is the equation for density?", answer: "P = m/v" },
        { question: "What is the equation for pressure?", answer: "P = f/a" },
    ],
    units: [
        { question: "What is the unit for power?", answer: "W" },
        { question: "What is the unit for density?", answer: "kg/m^3" },
        { question: "What is the unit for force?", answer: "N" },
        { question: "What is the unit for work done?", answer: "J" },
        { question: "What is the unit for energy?", answer: "J" },
        { question: "What is the unit for time?", answer: "s" },
        { question: "What is the unit for distance?", answer: "m" },
        { question: "What is the unit for mass?", answer: "Kg" },
    ],
};

let currentQuestionIndex = 0;
let currentCategory = document.getElementById('categorySelect').value;
let currentQuestion = questions[currentCategory][currentQuestionIndex];

const chatbox = document.getElementById('questionBox');
const userInput = document.querySelector('#Request input');

document.getElementById('categorySelect').addEventListener('change', function() {
    currentCategory = this.value;
    currentQuestionIndex = 0;
    currentQuestion = questions[currentCategory][currentQuestionIndex];
    displayQuestion();
});

function displayQuestion() {
    chatbox.value = `Question: ${currentQuestion.question}`;
}

displayQuestion();

document.querySelector('#Request form').addEventListener('submit', (event) => {
    event.preventDefault();
    const userAnswer = userInput.value.trim();

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        chatbox.value += `\nResponse: Well done!`;
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions[currentCategory].length) {
            chatbox.value += `\nYou've answered all questions in this category!`;
            return;
        }
        currentQuestion = questions[currentCategory][currentQuestionIndex];
        displayQuestion();
    } else {
        chatbox.value += `\nResponse: Incorrect, try again.`;
    }

    userInput.value = '';
});
