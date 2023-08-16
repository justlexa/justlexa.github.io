const next = document.querySelector("#next")
const back = document.querySelector("#back")
const daytitle = document.querySelector("#day")
const entry = document.querySelector("#entry")

let pages = ["EXAMPLE DAY NOT REAL wow i did so much in this very real day woadwahwahdh", "DIFFERENT EXAMPLE DAY NOT REAL wow i did so much in this very real day woadwahwahdh", "balls"]

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