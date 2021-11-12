//all the selectors turned into elements
let h1 = document.querySelector("h1");
//Array.from turns the information from the HTML page into an array 
const numberedButtons = Array.from(document.querySelectorAll(".btn-primary"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const allButtons = Array.from(document.querySelectorAll(".button"));
const equalButton = document.querySelector("#Calculator__Equals");
const clearButton = document.querySelector("#Calculator__Clear");


//on click the numbered Buttons find the button from the array and perform the function getClickedOperator
numberedButtons.map(button  => { 
  button.addEventListener("click", (button) => {
     findNumber(button)
})})

//on click the Operator Buttons find the button from the array and perform the function getClickedOperator
operatorButtons.map(button  => { 
  button.addEventListener("click", (button) => {
    findOperator(button)
})})

//On click the clear button returns an empty string to H1
clearButton.addEventListener('click', function() {
  h1.innerHTML = ' ';
});

//this stores the clicked number and concatenates it to another if pressed
findNumber = (button) => {
  const number = button.target.innerHTML;
   h1.innerHTML += number;
}

//this takes the two strings either side of the operator
findOperator = (button) =>{
    operator = button.target.innerHTML;
    h1.innerHTML += " " + operator + " ";
};

//on click equals returns the getAnswer function
equalButton.addEventListener("click", () => findAnswer())

findAnswer = () => {
  let answer;
  //takes the numbers and combines them with the clicked operator in a variables
  const numbers = h1.innerHTML.split(" " + operator + " ");
  //takes the numbers from the array
  const number1 = numbers[0]
  const number2 = numbers[1]
  
  if(numbers[0] != "" && numbers[1] != ""){
      switch(operator){
        case "/":
          answer = number1 / number2;
          break;
          case "*":
          answer = number1 * number2;
          break;
          case "-":
          answer = number1 - number2;
          break;
          case "+":
          answer = number1 + number2;
          break;
      }
  } else {
  return;
  }
  h1.innerHTML = answer;
  };
  
  
  