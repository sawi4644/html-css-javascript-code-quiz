const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)


function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

}

function setNextQuestion(){

}

function selectAnswer(){

}


//Array for questions
// const questions = [{
//     question: "What day is Chick-fil-A closed?",
//     answers: ["Monday", "Tuesday", "Saturday", "Sunday"]
// }, {
//     question: "whats up"
// }]

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