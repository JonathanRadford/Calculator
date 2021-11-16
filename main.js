//all the selectors turned into variables
const currentSum = document.querySelector("#current-input")
//Array.from turns the information from the HTML page into an array 
const numberedButtons = Array.from(document.querySelectorAll(".btn-primary"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const equalButton = document.querySelector("#Calculator__Equals");
const clearButton = document.querySelector("#Calculator__Clear");
const percentage = document.querySelector("Calculator__Percentage");

//on click the numbered Buttons find the button from the array
numberedButtons.map(number  => { 
  number.addEventListener("click", (e) => {
    const number = e.target.innerHTML;
    currentSum.innerHTML += number;
})})

//on click the Operator Buttons find the button from the array
operatorButtons.map(operator  => { 
  operator.addEventListener("click", (button) => {
    findOperator(button)
})})

//this takes the two strings either side of the operator
findOperator = (e) =>{
  operator = e.target.innerHTML;
  currentSum.innerHTML += " " + operator + " ";
};

//On click the clear button returns an empty string to currentSum
clearButton.addEventListener('click', () => {
  currentSum.innerHTML = ' ';
});

//on click equals performs the getAnswer function
equalButton.addEventListener("click", () => findAnswer())

//function that responds to the Equal button being clicked after using an operator
findAnswer = () => {
  let answer = " ";
  //created three seperate variables and stored which buttons and which operator have been used after .split turned them into an array
  const numbers = currentSum.innerHTML.split(" " + operator + " ")
  //stored the two number strings from the array
  const number1 = numbers[0]
  const number2 = numbers[1]

  //if the numbers at [0] and [1] are not equal to an empty string then the if else statement comes into play
  if (numbers[0] != " " && numbers[1] != " "){
    //if the operator button clicked is a string equal to "/" it divides, if not then it carries out the a statement if it fits the criteria
    if(operator === "/"){
      answer = Number(number1) / Number(number2);
    } else if (operator === "%"){
      answer = (Number(number1) / 100 ) * Number(number2);
    } else if (operator === "*"){
      answer = Number(number1) * Number(number2);
    } else if (operator === "-"){
      answer = Number(number1) - Number(number2);
   }  else if (operator === "+"){
      answer = Number(number1) + Number(number2);
  } else {
     return
   }
   return currentSum.innerHTML = answer;
} 
}
