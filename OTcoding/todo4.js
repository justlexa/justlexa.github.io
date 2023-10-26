const taskbtn = document.getElementById("taskbtn")
const removebtn = document.getElementById("removebtn")
const itemlist = document.getElementById("itemlist")
var curId = 0;

taskbtn.addEventListener("click", function addTask() {
    var newtask = document.getElementById("newtask")
    var li = document.createElement('li');
    itemlist.appendChild(li);
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', curId);
    li.innerHTML = newtask.value + '<button class="bg-danger rounded border-0 mx-2 text-white" onclick="remove(' + curId + ')">Poista</button>';
    curId++;
})

removebtn.addEventListener("click", function removeTask() {
    itemlist.removeChild(itemlist.lastElementChild)
})

function remove(id) {
    document.getElementById(id).remove();
}