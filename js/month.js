// Grabbing all of the different text sections that need to be edited
var monthNode = document.querySelector("#monthNode")
var quadrantNode = document.querySelector("#quadrantNode")
var textNode = document.querySelector("#textNode")

// Prompts user to input a month
var userMonth = prompt("What month were you born?")
// Error message for if the month wasnt inputted
if (userMonth == null) {
    textNode.innerHTML = "<h1>Please input a month.</h1>"
}
var monthLower = userMonth.toLowerCase()

// Checks which quadrant of the year the input month was in
if(monthLower == "december" || monthLower == "january" || monthLower == "february") {
    monthNode.innerText = userMonth
    quadrantNode.innerText = "Winter"
} else 
if(monthLower == "march" || monthLower == "april" || monthLower == "may") {
    monthNode.innerText = userMonth
    quadrantNode.innerText = "Spring"
} else if(monthLower == "june" || monthLower == "july" || monthLower == "august") {
    monthNode.innerText = userMonth
    quadrantNode.innerText = "Summer"
} else if(monthLower == "september" || monthLower == "october" || monthLower == "november") {
    monthNode.innerText = userMonth
    quadrantNode.innerText = "Autumn"
} else {    // Error message for if the month wasnt valid
    console.error("Not a valid month")
    textNode.innerHTML = "<h1>That is an invalid month.</h1>"
}