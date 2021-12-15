

var questions =[
    {
        question:"What color is an orange?",
        choiceA: "Red",
        choiceB: "Blue",
        choiceC: "Orange",
        choiceD: "Yellow",
        correct: "C"
    },
    {
        question:"What color is an apple?",
        choiceA: "Red",
        choiceB: "Blue",
        choiceC: "Orange",
        choiceD: "Yellow",
        correct: "A"
    },
    {
        question:"What color is a banana?",
        choiceA: "Red",
        choiceB: "Blue",
        choiceC: "Orange",
        choiceD: "Yellow",
        correct: "D"
    },
    {
        question:"What color is a blueberry?",
        choiceA: "Red",
        choiceB: "Blue",
        choiceC: "Orange",
        choiceD: "Yellow",
        correct: "B"
    },
    {
        question:"How many items in a dozen?",
        choiceA: "13",
        choiceB: "100",
        choiceC: "12",
        choiceD: "120",
        correct: "C"
    },
    {
        question:"How many items in a baker's dozen?",
        choiceA: "13",
        choiceB: "100",
        choiceC: "12",
        choiceD: "120",
        correct: "A"
    },
    {
        question:"How many centimeters in a meter?",
        choiceA: "13",
        choiceB: "100",
        choiceC: "12",
        choiceD: "120",
        correct: "B"
    },
    {
        question:"How many yards are in a football field?",
        choiceA: "13",
        choiceB: "100",
        choiceC: "12",
        choiceD: "120",
        correct: "D"
    }
];

var body = document.body;
var highScores = document.getElementById("high-scores");
var startButton = document.getElementById("start");
var question = document.getElementById("question");
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var userAnswer = document.getElementById("userAnswer");
var start = document.getElementById("start-button");
var startContainer = document.getElementById("start-container");
var quizContainer = document.getElementById("quiz-container");
var scoreContainer = document.getElementById("score-container");
var highScore = document.getElementById("highScore");
var timerEl = document.getElementById("timer");
var timeLeft = 80;
var timeInterval;
var score = 0;
var scoreBoard = document.getElementById("scoreBoard");




startButton.addEventListener("click", function() {

    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " Seconds left";

         if (timeLeft === 0 ) {
        quizContainer.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        clearInterval(timeInterval);
        timerEl.textContent = "No time remaining";
         }
    
            
    }, 1000);

    startQuiz();

    endQuiz();

});



function startQuiz() {
    

    for (var i = 0; i < questions.length; i++) {
       var q = questions[currentQuestion];
        question.innerHTML = "<p>" + q.question + "<p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;

        checkAnswer();
    
        
    }
    
    // scoreCounter();
}

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        console.log("correct");
        score++;
        scoreBoard.textContent = "Score: " + score;
    } else {
        console.log("incorrect");
    }

    //if (currentQuestion < lastQuestion) {
       // currentQuestion++;
       // startQuiz();
    //}
}


function endQuiz() {
    if (currentQuestion == lastQuestion) {
        quizContainer.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        clearInterval(timeInterval);
        timerEl.textContent = "Quiz completed in time";
    }

    if (currentQuestion == lastQuestion) {

        

    }
   

    



}

highScores.addEventListener("click", function() {

    startContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");

});







// If the right answer is selected a "correct" message shows in the message div
// If the wrong answer is selected a "correct" message shows in the message div
// The message stays until the next message is displayed

// When highscores is clicked it takes you to the highscore page
