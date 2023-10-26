const taskbtn = document.getElementById("taskbtn")
const removebtn = document.getElementById("removebtn")
const itemlist = document.getElementById("itemlist")
var curId = 0;

// Adds a task
taskbtn.addEventListener("click", function addTask() {
    var newtask = document.getElementById("newtask")
    var li = document.createElement('li');
    itemlist.appendChild(li);
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', curId);
    li.innerHTML = newtask.value + '<button class="bg-danger rounded border-0 mx-2 text-white" onclick="remove(' + curId + ')">Poista</button>';
    curId++;
    logStorage()
})

// Removes last task from todo list
removebtn.addEventListener("click", function removeTask() {
    itemlist.removeChild(itemlist.lastElementChild)
    logStorage()
})

// Removes specific task from todo list
function remove(id) {
    document.getElementById(id).remove();
    logStorage()
}

// Logs tasks into localStorage
function logStorage() {
    localStorage.setItem("tasks", itemlist.innerHTML)
}

// Loads saved tasks when opening the page
itemlist.innerHTML = localStorage.getItem("tasks")