// set inital count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns =  document.querySelectorAll(".btn");

// executes function for all buttons
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        // gets each buttons styles
        const styles = e.currentTarget.classList;
        // uses styles to check which button it is
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else(styles.contains("reset")){
            count = 0;
        }
        // changes the numbers color for negative, positive and 0 values
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});