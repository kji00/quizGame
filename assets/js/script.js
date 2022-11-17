var qAnda = [
    {
        question: "What year was javascript created?",
        choices: ["2000", "2001", "1997", "1995"],
        answer: 4
    },

    {
        question: "What will the following code return in value: 3 < 7",
        choices: ["true", "false", "NaN", "alert"],
        answer: 1
    },

    {
        question: "What file extension does Javascript have",
        choices: [".java", ".js", ".javascript", ".html"],
        answer: 2
    },

    {
        question: "What HTML element do we use to link a .js file",
        choices: ["class", "link", "script", "@import"],
        answer: 3
    },

    {
        question: "How do you create a function in JavaScript",
        choices: ["function = myFunction()", "function myFunction()", "function", "var function"], 
        answer: 2
    },

    {
        question: "What event occurs when the user clicks on an HTML element?",
        choices: ["mouseover", "alert", "action", "onclick"],
        answer: 4
    },

    {
        question: "How do you declare a variable in JavaScript?",
        choices: ["jsVar = ", "v jsVar: ", "--jsVar: (var)", "var jsVar = "],
        answer: 4
    },

    {
        question: "Where is the correct place to insert Javascript on a webpage?",
        choices: ["inside the <body>", "insdide the <head>", "inside <head> & <body>", "inside <footer>"],
        answer: 3
    },

    {
        question: "What is the correct commenting syntax in JavaScript?",
        choices: ["/*Comment*/", "<!--Comment-->", "#Comment", "Comment = "],
        answer: 1
    },

    {
        question: "What does a 'for' loop do?",
        choices: ["repeats forever", "used only in functions", "repeats until a specific condition evaluates to false", "only exist in Python"],
        answer: 3
    }

]

var questionEl = document.querySelector("#questions");
var listEl = document.querySelectorAll("ol button"); 
var startEl = document.querySelector("#start-game");

//get questions from the the qAnda array
function getQuestions(question){
    for (var i = 0; i < question.length; i++){
        var objCount = question[i];
        questionEl.textContent = question[i].question;
        for (let x = 0; x < listEl.length; x++){
            listEl[x].innerHTML = objCount.choices[x]
            };

        };
    };


//start game button unhides questions and answers portion and hides the start the quiz game button
startEl.addEventListener("click", function(event){
    var element = event.target;
    
    if (element.matches("#start-game")){
        var gameState = element.getAttribute("data-state");
        var qState = element.getAttribute("data-state");
        if (gameState === "show"){
            element.setAttribute("data-state", "hidden")
            document.getElementById("game").style.display = "none";
        }
    }
})
