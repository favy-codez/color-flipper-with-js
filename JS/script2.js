const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// a hex color consists of # and 6 values & the values could be from 0-9 while the letters represents 10-15

btn.addEventListener('click', function(){
    // set up a loop that will generate hex colors, target the body and change the background
    let hexColor = '#';
    // because the hex color must start with #
    // we need to set up a loop that runs 6 times because we have 6 values
    // run the loop until i<6 which means 0-5 which means 6 times; i++ increment by 1
    for(let i=0; i<6; i++){
        // for each iteration add a value from my array, target the array- hex and target the first array number
        hexColor += hex[getRandomNumber()]
    }
    // we want to target the body 
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// we want to set up a fxn that generates a random number 
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}