var qAnda = [
    {
        question: "What year was javascript created?",
        choices: ["2000", "2001", "1997", "1995"],
        answer: 3
    },

    {
        question: "What will the following code return in value: 3 < 7",
        choices: ["true", "false", "NaN", "alert"],
        answer: 0
    },

    {
        question: "What file extension does Javascript have",
        choices: [".java", ".js", ".javascript", ".html"],
        answer: 1
    },

    {
        question: "What HTML element do we use to link a .js file",
        choices: ["class", "link", "script", "@import"],
        answer: 2
    },

    {
        question: "How do you create a function in JavaScript",
        choices: ["function = myFunction()", "function myFunction()", "function", "var function"],
        answer: 1
    },

    {
        question: "What event occurs when the user clicks on an HTML element?",
        choices: ["mouseover", "alert", "action", "onclick"],
        answer: 3
    },

    {
        question: "How do you declare a variable in JavaScript?",
        choices: ["jsVar = ", "v jsVar: ", "--jsVar: (var)", "var jsVar = "],
        answer: 3
    },

    {
        question: "Where is the correct place to insert Javascript on a webpage?",
        choices: ["inside the body", "inside the head", "inside head & body", "inside footer"],
        answer: 1
    },

    {
        question: "What is the correct commenting syntax in JavaScript?",
        choices: ["/*Comment*/", "<!--Comment-->", "#Comment", "Comment = "],
        answer: 0
    },

    {
        question: "What does a 'for' loop do?",
        choices: ["repeats forever", "used only in functions", "repeats until a specific condition evaluates to false", "only exist in Python"],
        answer: 2
    }

]

var questionEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");
var listEl = document.querySelectorAll("ol button");
var startEl = document.querySelector("#start-game");
var mainGameEl = document.querySelector("#main-game");
var count = 0;

//get questions from the the qAnda array
function getQuestions(quiz) {
    questionEl.textContent = quiz.question;
    var correctAnswer = quiz.choices[quiz.answer];
    console.log(correctAnswer)

    for (let x = 0; x < listEl.length; x++) {
        listEl[x].innerHTML = quiz.choices[x]
    };

    answerEl.addEventListener("click", function (event) {
        var element = event.target;
        
        if (element.matches(".box")) {
            var chosenAnswer = element.textContent;
            if (chosenAnswer === correctAnswer){
                console.log('correct');
                count++;
            } else {
                console.log("wrong");
                count++;
            }
        }
        
        getQuestions(qAnda[count]);
    })
}


function getAnswers() {

}

//start game button unhides questions and answers portion and hides the start the quiz game button
startEl.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#start-game")) {
        var state = element.getAttribute("data-state");
        if (state === "show") {
            element.setAttribute("data-state", "hidden")
            document.getElementById("game").style.display = "none";
            mainGameEl.style.display = "block";
        }
    }
    getQuestions(qAnda[0]);
})

