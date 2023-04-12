const clicks = document.getElementById('clicks');
const clickButton = document.getElementById('click-button');
const autoClickerButton = document.getElementById('auto-clicker');
let clickCount = 0;
let autoClickerCount = 0;

clickButton.addEventListener('click', () => {
  clickCount += 1 + autoClickerCount;
  clicks.innerText = clickCount;
});

autoClickerButton.addEventListener('click', () => {
  if (clickCount >= 10) {
    clickCount -= 10;
    autoClickerCount++;
    clicks.innerText = clickCount;
    autoClickerButton.innerText = `Auto Clicker (${autoClickerCount})`;
    setInterval(() => {
      clickCount += autoClickerCount;
      clicks.innerText = clickCount;
    }, 1000);
    autoClickerButton.disabled = true;
  } else {
    alert("You don't have enough clicks to buy an auto clicker!");
  }
});

setInterval(() => {
  if (clickCount >= 10 && autoClickerCount === 0) {
    autoClickerButton.style.display = "inline-block";
  }
}, 100);