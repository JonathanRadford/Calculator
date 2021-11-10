let h1 = document.querySelector("h1");
const numberedButtons = Array.from(document.querySelectorAll(".btn-primary"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const allButtons = Array.from(document.querySelectorAll(".buttons"));
const equalButton = document.querySelector("#Calculator__Equals");
const clearButton = document.querySelector("#Calculator__Clear");

numberedButtons.map(button  => { 
    button.addEventListener("click", (buttons) => {
        h1.innerText = buttons.target.innerText;
        console.log(buttons.target.innerText);
      
})
});

operatorButtons.map(button  =>{ 
  button.addEventListener("click", (buttons) => {
    console.log(buttons.target.innerText);
    h1.innerText = buttons.target.innerText;
})
});

clearButton.addEventListener('click', function() {
    h1.innerHTML = '';
});

equalButton.addEventListener('click', function() {
  h1.innerHTML = '';
});
