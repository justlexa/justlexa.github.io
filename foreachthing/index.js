var questionNode = document.querySelector(".questionNode")
var yes = document.querySelector(".yes")
var no = document.querySelector(".no")

var questions = ["Is the sun real?", "Is the moon fake?", "Are you safe?", "Am i in your home?"]

var i = 0

questions.forEach(function(answer) {
    questionNode.innerText = questions[i]
})