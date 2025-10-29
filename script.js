const questions = [
  
    {
        question: "Which attribute is used to provide an image's alternate text?",
        answers: [
            { text: "title", correct: false },
            { text: "alt", correct: true },
            { text: "src", correct: false },
            { text: "href", correct: false },
        ]
    },
    {
        question: "Which element is used to display tabular data on a webpage?",
        answers: [
            { text: "table", correct: true },
            { text: "list", correct: false },
            { text: "form", correct: false },
            { text: "grid", correct: false },
        ]
    },
    {
        question: "Which attribute is used to open a link in a new browser tab?",
        answers: [
            { text: "target='_blank'", correct: true },
            { text: "open='tab'", correct: false },
            { text: "new='true'", correct: false },
            { text: "tab='yes'", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to display the largest heading?",
        answers: [
            { text: "h1", correct: true },
            { text: "heading", correct: false },
            { text: "h6", correct: false },
            { text: "header", correct: false },
        ]
    },
    {
        question: "Which attribute specifies the URL of an image?",
        answers: [
            { text: "link", correct: false },
            { text: "src", correct: true },
            { text: "alt", correct: false },
            { text: "data", correct: false },
        ]
    },
    {
        question: "Which tag is used to create an unordered list?",
        answers: [
            { text: "ul", correct: true },
            { text: "ol", correct: false },
            { text: "li", correct: false },
            { text: "list", correct: false },
        ]
    },

    // 🎨 CSS Questions
    {
        question: "Which property is used to change the background color of an element?",
        answers: [
            { text: "background-color", correct: true },
            { text: "bg-color", correct: false },
            { text: "color", correct: false },
            { text: "fill", correct: false },
        ]
    },
    {
        question: "Which property controls the text size in CSS?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-weight", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to center elements horizontally?",
        answers: [
            { text: "margin: auto", correct: true },
            { text: "align: center", correct: false },
            { text: "text-align: middle", correct: false },
            { text: "float: center", correct: false },
        ]
    },
    {
        question: "Which unit in CSS is relative to the root element?",
        answers: [
            { text: "em", correct: false },
            { text: "rem", correct: true },
            { text: "px", correct: false },
            { text: "%", correct: false },
        ]
    },
    {
        question: "Which property is used to add shadow to text?",
        answers: [
            { text: "text-shadow", correct: true },
            { text: "font-shadow", correct: false },
            { text: "box-shadow", correct: false },
            { text: "shadow", correct: false },
        ]
    },
    {
        question: "Which CSS property makes the text bold?",
        answers: [
            { text: "font-weight", correct: true },
            { text: "font-style", correct: false },
            { text: "bold-text", correct: false },
            { text: "text-weight", correct: false },
        ]
    },

    // ⚙️ JavaScript Questions
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false },
        ]
    },
    {
        question: "Which method displays a message in the browser’s console?",
        answers: [
            { text: "print()", correct: false },
            { text: "alert()", correct: false },
            { text: "console.log()", correct: true },
            { text: "document.write()", correct: false },
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "#", correct: false },
            { text: "<!--", correct: false },
        ]
    },
    {
        question: "Which operator is used to check both value and type equality?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
            { text: "=", correct: false },
        ]
    },
    {
        question: "What is the output type of the typeof operator?",
        answers: [
            { text: "string", correct: true },
            { text: "boolean", correct: false },
            { text: "number", correct: false },
            { text: "object", correct: false },
        ]
    },
    {
        question: "Which built-in method is used to convert a string to lowercase?",
        answers: [
            { text: "toLowerCase()", correct: true },
            { text: "toSmall()", correct: false },
            { text: "changeCase()", correct: false },
            { text: "lower()", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    });

}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"; 
} 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})

startQuiz();

// const questionElement  = document.getElementById("question");
// const answerButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// let currentQuestionIndex = 0;
// let score = 0;
// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion(){
//     
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     });
// }   

// startQuiz();