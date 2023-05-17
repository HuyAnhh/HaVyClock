const timeEle = document.querySelectorAll(".time")

const Daily = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

setInterval(() => {
    const date = new Date;
    timeEle[0].innerHTML = Daily[date.getDay()]; 
    timeEle[1].innerHTML = date.getHours();
    timeEle[2].innerHTML = date.getMinutes();
    timeEle[3].innerHTML = date.getSeconds();
}, 1000);

const handleNext = document.querySelector(".nextBtn");
const bgImg = document.querySelector(".vyClock")

handleNext.addEventListener("click", () => {
    let random = Math.floor((Math.random() * 7) + 1);
    bgImg.style.backgroundImage = 'url(Vy'+random+'.jpg)';
})

const handleSpecial = document.querySelector(".specialBtn");
const handleClock = document.querySelector(".container");
const handleLove = document.querySelector(".love")
handleSpecial.addEventListener("click", () => {
    handleClock.style.display = "none";
    handleLove.style.display = "inline-block"
})