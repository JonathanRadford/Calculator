let h1 = document.querySelector("h1");
//Array.from turns the information from the HTML page into an array 
const numberedButtons = Array.from(document.querySelectorAll(".btn-primary"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const allButtons = Array.from(document.querySelectorAll(".button"));
const equalButton = document.querySelector("#Calculator__Equals");
const clearButton = document.querySelector("#Calculator__Clear");

equalButton.addEventListener("click", () => getAnswer())

numberedButtons.map(button  => { 
  button.addEventListener("click", (event) => {
     getClickedNum(event)
})})

operatorButtons.map(button  => { 
  button.addEventListener("click", (event) => {
    getClickedOperator(event)
})})

clearButton.addEventListener('click', function() {
  h1.innerHTML = ' ';
});

getClickedNum = button => {
  const clickedNumber = button.target.innerHTML;
   h1.innerHTML += clickedNumber;
}

getClickedOperator = button =>{
   clickedOperator = button.target.innerHTML;
h1.innerHTML += " " + clickedOperator + " ";
};


