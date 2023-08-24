const next = document.querySelector("#next")
const back = document.querySelector("#back")
const daytitle = document.querySelector("#day")
const entry = document.querySelector("#entry")

let pages = ["I got to open up some phones, disconnect the batteries and then throw them in the pile, A couple tablets too. I didnt do much else but near the end of the day I also uninstalled an antivirus off a customers computer with some help.", "More phone opening for them to be recycled. I also got to take some hard drives out of some stuff but slow day otherwise.", "I opened a single tablet the entire day, sometimes there just isn't work to do.", "I tested a customers hard drive on their PC because it was supposed to have a problem, but I didnt find anything. After that, I was fixing a printer by using the cleaning software thing and then testing if the ink was coming out properly, but I didnt quite get it fully cleaned before having to leave so I didn't miss my bus"]

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