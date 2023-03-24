'use scrict';
//Value
const totalCount = document.getElementById("total-count");
const autoClickerCountDiv = document.getElementById("auto-clicker-count");
const donutMultiplierCountDiv = document.getElementById("donut-multiplier-count");
let donutCount = 0;
let donutMultiplierCount = 0;
let donutMultiplierCost = 10;
let autoClickerCount = 0;
let autoClickerCost = 20;
let incrementRate = 1;
let autoClickerInterval;
totalCount.innerHTML = donutCount;
autoClickerCountDiv.innerHTML = autoClickerCount;
donutMultiplierCountDiv.innerHTML = donutMultiplierCount;
//Increment
const handleIncrement = () => {
    donutCount += incrementRate;
    totalCount.innerHTML = donutCount;
    console.log(donutCount + " donutCount");
};
const handleAutoClicker = () => {
    donutCount += autoClickerCount + (donutMultiplierCount * .2);
    totalCount.innerHTML = donutCount;
    console.log(incrementRate + " incrementRate");
    console.log(donutCount + " donutCount");
}
const handleDonutMultiplier = () => {
    incrementRate = Math.pow(1.2, donutMultiplierCount);
    console.log(incrementRate+ " :IncrementRate"); 
}

//Increment AutoClicker
const purchaseAutoIncrement = () => {
    if (donutCount >= autoClickerCost) {
        donutCount -= autoClickerCost
        autoClickerCount += 1;
        autoClickerCost += Math.floor(autoClickerCost * 0.10);
        console.log(autoClickerCost + " :Cost of Auto Clicker");
        console.log(autoClickerCount +" :Just autoClicker incrementRate")
        autoClickerCountDiv.innerHTML = autoClickerCount;
        totalCount.innerHTML = donutCount;
    }
    else {
        alert('Not enough donuts, cost ' + autoClickerCost + ".");
        return;
    }
    if (!autoClickerInterval) {
        autoClickerInterval = setInterval(handleAutoClicker, 1000)
    }
}
const purchaseDonutMultiplier =() => {
    if(donutCount>= donutMultiplierCost){
        donutCount -= donutMultiplierCost
        donutMultiplierCount += 1;
        donutMultiplierCost += Math.floor(donutMultiplierCost * 0.10);
        console.log(donutMultiplierCost + " :Cost of DonutMultiplier");
        donutMultiplierCountDiv.innerHTML = donutMultiplierCount;
        totalCount.innerHTML = donutCount;
        handleDonutMultiplier();
    }
    else {
        alert('Not enough donuts, cost ' + donutMultiplierCost + ".");
        return;
    }
}

//Click Function
const incrementCount = document.getElementById("increment-count");
incrementCount.addEventListener("click", handleIncrement);

//Auto Click Function
const autoIncrementCount = document.getElementById("auto-increment-count");

autoIncrementCount.addEventListener("click", purchaseAutoIncrement)

//Donut Multiplier Function
const autoDonutMultiplier = document.getElementById("multiplier-increment-count");
autoDonutMultiplier.addEventListener("click", purchaseDonutMultiplier)















