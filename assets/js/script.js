var qAnda = [
    {
        question: "What year was javascript created?",
        choices: ["2000", "2001", "1997", "1995"],
        answer: "1995"
    },

    {
        question: "What will the following code return in value: 3 < 7",
        choices: ["true", "false", "NaN", "alert"],
        answer: "true"
    },

    {
        question: "What file extension does Javascript have",
        choices: [".java", ".js", ".javascript", ".html"],
        answer: ".js"
    },

    {
        question: "What HTML element do we use to link a .js file",
        choices: ["class", "link", "script", "@import"],
        answer: "script"
    },

    {
        question: "How do you create a function in JavaScript",
        choices: ["function = myFunction()", "function myFunction()", "function", "var function"],
        answer: "function myFunction()"
    },

    {
        question: "What event occurs when the user clicks on an HTML element?",
        choices: ["mouseover", "alert", "action", "onclick"],
        answer: "onclick"
    },

    {
        question: "How do you declare a variable in JavaScript?",
        choices: ["jsVar = ", "v jsVar: ", "--jsVar: (var)", "var jsVar = "],
        answer: "var jsVar = "
    },

    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        choices: ["global variable", "local variable", "Both of the above", "None of the above"],
        answer: "global variable"
    },

    {
        question: "What are variables used for in JavaScript Programs?",
        choices: ["Storing numbers, dates, or other values", "Used in calling a function", "Varying randomly", "None of the above"],
        answer: "Storing numbers, dates, or other values"
    },

    {
        question: "What does a 'for' loop do?",
        choices: ["repeats forever", "used only in functions", "repeats until a specific condition evaluates to false", "only exist in Python"],
        answer: "repeats until a specific condition evaluates to false"
    }

]

var questionEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");
var listEl = document.querySelectorAll("ol button");
var startEl = document.querySelector("#start-game");
var mainGameEl = document.querySelector("#main-game");

var correct = "";

var count = 0;

//get questions from the the qAnda array
function getQuestions(quiz) {
    console.log(quiz);
    questionEl.textContent = quiz.question;
    console.log(quiz.answer);
  
    for (let x = 0; x < listEl.length; x++) {
      listEl[x].innerHTML = quiz.choices[x];
    }
  }
  
  function getAnswers(event) {
    var element = event.target;
    var correctAnswer = qAnda[count].answer;
    console.log(correctAnswer);
    var chosenAnswer = element.innerHTML;
  
    if (chosenAnswer === correctAnswer) {
      console.log("correct");
      correctAnswer = "";
    } else {
      console.log("wrong");
      correctAnswer = "";
    }
  
    count++;
    if (count >= qAnda.length){
        return;
    } else {
        getQuestions(qAnda[count]);
    }
  }

answerEl.onclick = getAnswers;

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
    getQuestions(qAnda[count]);
})