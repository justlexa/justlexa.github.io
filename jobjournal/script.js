const next = document.querySelector("#next")
const back = document.querySelector("#back")
const daytitle = document.querySelector("#day")
const entry = document.querySelector("#entry")

let pages = ["I got to open up some phones, disconnect the batteries and then throw them in the pile, A couple tablets too. I didnt do much else but near the end of the day I also uninstalled an antivirus off a customers computer with some help.",
"More phone opening for them to be recycled. I also got to take some hard drives out of some stuff but slow day otherwise.",
"I opened a single tablet the entire day, sometimes there just isn't work to do.",
"I tested a customers hard drive on their PC because it was supposed to have a problem, but I didnt find anything. After that, I was fixing a printer by using the cleaning software thing and then testing if the ink was coming out properly, but I didnt quite get it fully cleaned before having to leave so I didn't miss my bus",
"I setup a pc and a laptop for the company, doing stuff like downloading windows updates and drivers aswell as using Ninite to setup a bunch of useful applications easily.",
"More work trying to sort out a printer for most of the day. I didnt end up getting it working and somehow running the printer cleaning stuff made it work even worse than it was before. I didnt do much else before that.",
"There was literally no work for me to do so I ended up going home early since there was no point in me just sitting around doing nothing. There was some talk about me getting to try and improve a company program, which im interested in. They have to wipe the customer data first though, so I haven't got to see it yet.",
"Once again had barely any work, and went home early.",
"I set up a laptop again, went home early.",
"I set up 2 laptops with windows updates and Ninite, not much else. Might get my hands on a program for setting up customers, without any customer data of course.",
"Set up a laptop once again and delivered a package.",
"Same as last day except I went to buy some coffee stuff instead of delivering a package."]

let day = 0
let dayAdd = 0
let weekFix = 0

// Setting up text for day and journal entry automatically for ease of use
function setup() {
    daytitle.innerText = "21.8"
    entry.innerText = pages[day]
}
setup()


// Goes to the next journal entry and updates day number
function goNext() {
    day++;
    if(day < pages.length) {
        if(day % 5 == 0){
            weekFix = weekFix + 2
            console.log("week+2")
        }
        dayAdd = day + weekFix
        let dayMonth = 21 + dayAdd
        if(dayMonth < 32) {
            dayMonth = dayMonth + ".8"
        } else {
            dayMonth = dayMonth - 31 + ".9"
        }
        daytitle.innerText = dayMonth
        entry.innerText = pages[day]
    } else {
        day = pages.length-1
    }
}

// Goes back a journal entry and updates day number
function goBack() {
    day--;
    if(day > -1) {
        if((day - 4) % 5 == 0){
            weekFix = weekFix - 2
            console.log("week-2")
        } 
        dayAdd = day + weekFix
        let dayMonth = 21 + dayAdd
        if(dayMonth < 32) {
            dayMonth = dayMonth + ".8"
        } else {
            dayMonth = dayMonth - 31 + ".9"
        }
        daytitle.innerText = dayMonth
        entry.innerText = pages[day]
    } else {
        day = 0
    }
}

next.addEventListener("click", goNext)
back.addEventListener("click", goBack)