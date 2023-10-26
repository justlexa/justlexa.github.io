const taskbtn = document.getElementById("taskbtn")
const itemlist = document.getElementById("itemlist")

taskbtn.addEventListener("click", function addTask() {
    var newtask = document.getElementById("newtask")
    var li = document.createElement('li');
    itemlist.appendChild(li);
    li.setAttribute('class', 'list-group-item');
    li.innerHTML = newtask.value;
})