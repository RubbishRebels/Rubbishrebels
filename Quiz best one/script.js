const questions = [
    {
        question: "Plastic kerstbal",
        path: "./img/kerstbal.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Fruit/groente netje",
        path: "./img/netje.jpeg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Nagellak remover (leeg)",
        path: "./img/nagellak.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Bierdopje",
        path: "./img/bierdopje.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Piepschuim",
        path: "./img/piepschuim.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Chipszak",
        path: "./img/chipszak.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Deo bus (leeg)",
        path: "./img/deo.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Plastic wegwerp beker",
        path: "./img/plasticbeker.jpeg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Sticker",
        path: "./img/stickers.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "plastic speelgoed",
        path: "./img/speelgoed.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Markeerstift",
        path: "./img/markeerstift.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Aluminiumfolie",
        path: "./img/aluminium.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Drankpak (leeg)",
        path: "./img/drankpak.png",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Composteerbaar-plastic",
        path: "./img/bioplastic.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Saus fles (leeg)",
        path: "./img/saus.png",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Tandpasta tube (leeg)",
        path: "./img/tandpasta.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Doordrukstrips (leeg)",
        path: "./img/kauwgum.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "Aluminium koffie cupje",
        path: "./img/koffiecups.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "CD",
        path: "./img/cd.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Kartonnen wegwerpbekertje",
        path: "./img/bekerkarton.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Blik",
        path: "./img/blik.png",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "chipskokers",
        path: "./img/chips.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "waxinelichtcupjes",
        path: "./img/waxine.jpg",
        answers: [
            {text:"Rest", correct: false},
            {text:"Plastic", correct: true},
        ]
    },
    {
        question: "zwembandje",
        path: "./img/zwemband.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    },
    {
        question: "Schroef",
        path: "./img/schroef.jpg",
        answers: [
            {text:"Rest", correct: true},
            {text:"Plastic", correct: false},
        ]
    }
    
];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(questions);

  console.log(questions);
  console.log(questions.length);

let answers = [];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("question-img");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    const questionCounterText = document.getElementById('questionCounter');
    questionCounterText.innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    if (currentQuestion.path){
    imageElement.src = currentQuestion.path
    imageElement.style.display = "block";
    }
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    imageElement.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    // Remember answer data
    answers[currentQuestionIndex] = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        console.log(score);
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/*function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}*/

function storeData() {
    localStorage.setItem("mostRecentScore", score);
    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        const questionCounterText = document.getElementById('questionCounter');
        questionCounterText.innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
    }else{
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('/end.html');
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

/* HUD */
