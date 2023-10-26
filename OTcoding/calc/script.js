const laskin = document.querySelector("#laskin")
const toimitus = document.querySelector("#toimitus")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const thr = document.querySelector("#thr")
const fou = document.querySelector("#fou")
const fiv = document.querySelector("#fiv")
const six = document.querySelector("#six")
const sev = document.querySelector("#sev")
const eig = document.querySelector("#eig")
const nin = document.querySelector("#nin")
const zer = document.querySelector("#zer")
const dot = document.querySelector("#dot")
const clear = document.querySelector("#clear")
const calculatebtn = document.querySelector("#calculate")


// Lisää numerot
one.addEventListener("click", function(){
    laskin.value = laskin.value + "1"
});

two.addEventListener("click", function(){
    laskin.value = laskin.value + "2"
});

thr.addEventListener("click", function(){
    laskin.value = laskin.value + "3"
});

fou.addEventListener("click", function(){
    laskin.value = laskin.value + "4"
});

fiv.addEventListener("click", function(){
    laskin.value = laskin.value + "5"
});

six.addEventListener("click", function(){
    laskin.value = laskin.value + "6"
});

sev.addEventListener("click", function(){
    laskin.value = laskin.value + "7"
});

eig.addEventListener("click", function(){
    laskin.value = laskin.value + "8"
});

nin.addEventListener("click", function(){
    laskin.value = laskin.value + "9"
});

zer.addEventListener("click", function(){
    laskin.value = laskin.value + "0"
});

// Lisää pisteen
dot.addEventListener("click", function(){
    laskin.value = laskin.value + "."
});

// Poistaa kaiken laskimesta
clear.addEventListener("click", function(){
    laskin.value = ""
});

// Lisää laskutoimituksen laskimeen (esim. + tai -)
function toimitukset() {
    if (toimitus.value == "+") {
        laskin.value = laskin.value + "+"
        toimitus.value = ""
    } else 
    if (toimitus.value == "-") {
        laskin.value = laskin.value + "-"
        toimitus.value = ""
    } else
    if (toimitus.value == "*") {
        laskin.value = laskin.value + "*"
        toimitus.value = ""
    } else
    if (toimitus.value == "/") {
        laskin.value = laskin.value + "/"
        toimitus.value = ""
    }
}
// Poistaa laskutoimituksesta ekan jutun joka ärsytti mua
toimitus.value = ""

function calculate() {
    var balls = eval(laskin.value)
    if (balls != undefined) {
        laskin.value = balls
    }
}