const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // we want to equate the variable to our fxn getRandomNumber
    const randomNumber = getRandomNumber();
    // we want to target the body and access the style and change background color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// so we want to create a function that generates random numbers between 0-3
function getRandomNumber(){
    // using math.random in js will return numbers between 0-1 so we want to multilply it by our array colors which is 4 so we use colors.length
    // since we now have numbers between 0-3.something we add math.floor to round them to the nearest whole number
    return Math.floor(Math.random() * colors.length);
}