document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        { question: "What is the capital of France?", answers: ["Berlin","Madrid","Paris","Rome"], correct: 2},
        { question: "Which planet is known as the Red Planet?", answers: ["Earth","Mars"," Jupiter"," Venus"], correct: 1 },
        { question: "Who wrote the play Romeo and Juliet?", answers: [" Charles Dickens","William Shakespeare"," Mark Twain","Jane Austen"], correct: 1 },
        { question: "What is the largest ocean on Earth?", answers: ["Atlantic Ocean","Indian Ocean "," Arctic Ocean"," Pacific Ocean"], correct: 3 },
        { question: "Which is the longest river in the world?", answers: [" Amazon River "," Nile River "," Yangtze River","Mississippi River"], correct: 1 },
        { question: "How many continents are there in the world?", answers: [" 5 ","6 "," 7 "," 8 "], correct: 2 },
        { question: "What is the chemical symbol for gold?", answers: ["Au","Ag","Fe","Hg"], correct: 0 },
        { question: "Which country is famous for the Great Wall?", answers: [" India "," China "," Japan","Russia"], correct: 1 },
        { question: "How many bones are there in an adult human body?", answers: ["200","206","210"," 215"], correct: 1 },
        { question: "Which gas do plants absorb from the atmosphere for photosynthesis?", answers: ["Oxygen","Carbon Dioxide"," Nitrogen "," Hydrogen"], correct: 1 }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Get all elements
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const retryButton = document.getElementById("retry");
    const quizContainer = document.getElementById("quiz");

    // Load the first question
    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showResults();
            return;
        }

        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        answersElement.innerHTML = "";

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.classList.add("answer-btn");
            button.onclick = () => selectAnswer(index);
            answersElement.appendChild(button);
        });
    }

    // Handle answer selection
    function selectAnswer(selectedIndex) {
        if (selectedIndex === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    // Show results when quiz is over
    function showResults() {
        console.log("Quiz ended. Showing results..."); // Debugging
        document.getElementById("quiz").classList.add("hidden");
        resultContainer.classList.remove("hidden");
    
        // Ensure scoreElement is updated
        if (scoreElement) {
            scoreElement.innerText = "You scored " + score + " out of " + quizData.length + "!";
        } else {
            console.log("Error: scoreElement not found.");
        }
    }
    

    // Restart the quiz
    retryButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });

    loadQuestion();
});