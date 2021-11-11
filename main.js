let h1 = document.querySelector("h1");
//Array.from turns the information from the HTML page into an array 
const numberedButtons = Array.from(document.querySelectorAll(".btn-primary"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const allButtons = Array.from(document.querySelectorAll(".button"));
const equalButton = document.querySelector("#Calculator__Equals");
const clearButton = document.querySelector("#Calculator__Clear");



numberedButtons.map(button  => { 
    button.addEventListener("click", (buttons) => {
        h1.innerText += buttons.target.innerText;  
})
});

operatorButtons.map(button  =>{ 
  button.addEventListener("click", (buttons) => {
    h1.innerText += buttons.target.innerText;
})
});

clearButton.addEventListener('click', function() {
    h1.innerHTML = '';
});
