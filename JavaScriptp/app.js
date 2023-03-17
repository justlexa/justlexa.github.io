/**/
const toggleBtn = document.querySelector(".sidebar-toggle");
const CloseBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");
// this is the button you use to open the sidebar. (you can also close it with this if you want)
toggleBtn.addEventListener("click", function () {
 console.log(sidebar.classList);
 console.log(main.classList);
sidebar.classList.toggle("show-sidebar");
main.classList.toggle("move-main");
});
// this is the red X you use to close the sidebar. 
CloseBtn.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
  main.classList.remove("move-main");
});