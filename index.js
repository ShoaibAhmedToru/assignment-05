// heart
let count = 0;
const loveCount = document.getElementById("love-count");
const loveIcons = document.getElementsByClassName("hardPng");

for (const icon of loveIcons) {
  icon.addEventListener("click", function () {
    count++;
    loveCount.textContent = count;
  });
}

// coinss
let coins = 100;
const coinDisplay = document.getElementById("coin-count");
const callButtons = document.querySelectorAll(".call-btn");
const callCost = 20;

// call historu
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (coins >= callCost) {
      coins -= callCost;
      coinDisplay.textContent = coins;

      const card = btn.closest(".bg-white");
      const serviceName = card.querySelector("h2").innerText;
      const serviceNumber = card.querySelector("h1").innerText;

      // alllert
      alert(`Calling ${serviceName} ${serviceNumber}...`);

      //currenttime
      const currentTime = new Date().toLocaleTimeString();

      //history
      const historyItem = document.createElement("p");
      historyItem.textContent = `${serviceName} - ${serviceNumber} (${currentTime})`;
      historyList.prepend(historyItem); 
    } else {
      alert("You don't have enough coins.");
    }
  });
});

// clearhistory
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// copy btn
let copyCount = 0;
const copyDisplay = document.querySelector("#copy-count span");
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".bg-white");
    const number = card.querySelector("h1").innerText;

    //copy clip
    navigator.clipboard.writeText(number)
      .then(() => {
        copyCount++;
        copyDisplay.textContent = copyCount;
        alert(`Number ${number} copied!`);
      })
      .catch(() => {
        alert("Failed to copy.");
      });
  });
});
