const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement= document.getElementById('question')

const answerButtonsElement= document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort(()=> Math.random()-.5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText= question.question
    question.answers.forEach(answer=> {
        const button= document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){

}


// Array for questions
const questions = [{
    question: "What day is Chick-fil-A closed?",
    answers: [
        {text: "Monday", correct: false}, {text:"Tuesday", correct: false},{text:"Saturday", correct: false},{text:"Sunday", correct: true}]
}, {
    question: "whats up"
}]

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//divs : start, question, timer 
// var timer = 31

// $("#start").on("click", function () {
//     $("#question").text(questions[0].question);
//     //timer
//     setInterval(countdown,1000)
    
    

// })
// function countdown(){
//     timer--
//     $("#timer").text(timer)
    
// }
// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score