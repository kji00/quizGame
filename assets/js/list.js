var listCount = document.querySelectorAll("li");
var choices = [".java", ".js", ".javascript", ".html"];

console.log(listCount[1]);

for (let x = 0; x < listCount.length; x++){
    document.querySelectorAll("li")[x].innerHTML = choices[x];
}