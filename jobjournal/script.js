const next = document.querySelector("#next")
const back = document.querySelector("#back")
const daytitle = document.querySelector("#day")
const entry = document.querySelector("#entry")

let pages = ["I got to open up some phones, disconnect the batteries and then throw them in the pile. A couple tablets too. I didnt do much else but near the end of the day I also uninstalled an antivirus off a customers computer with some help."]

let day = 0

// Setting up text for day and journal entry automatically for ease of use
function setup() {
    let dayCount = day + 1
    daytitle.innerText = "Day " + dayCount
    entry.innerText = pages[day]
}
setup()

// Goes to the next journal entry and updates day number
function goNext() {
    day++;
    if(day < pages.length) {
        let dayCount = day + 1
        daytitle.innerText = "Day " + dayCount
        entry.innerText = pages[day]
    } else {
        day = pages.length-1
    }
}

// Goes back a journal entry and updates day number
function goBack() {
    day--;
    if(day > -1) {
        let dayCount = day + 1
        daytitle.innerText = "Day " + dayCount
        entry.innerText = pages[day]
    } else {
        day = 0
    }
}

next.addEventListener("click", goNext)
back.addEventListener("click", goBack)