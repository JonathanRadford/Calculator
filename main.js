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

//function that responds to the Equal button being clicked after using an operator
findAnswer = () => {
  //created a variable answer to send information to
  let answer;
  //created three seperate variables and stored which buttons and which operator have been used after .split turned them into an array
  const numbers = h1.innerHTML.split(" " + operator + " ")
  //stored the two number strings from the array
  const number1 = numbers[0]
  const number2 = numbers[1]

  //if the numbers at [0] and [1] are not equal to an empty string then the if else statement comes into play
  if (numbers[0] != " " && numbers[1] != " "){
    //if the operator button clicked is a string equal to "/" it divides, if not then it carries out the other statement if that one is true
    if(operator === "/"){
      answer = Number(number1) / Number(number2);
    } else if (operator === "*"){
      answer = Number(number1) * Number(number2);
    } else if (operator === "-"){
      answer = Number(number1) - Number(number2);
   }  else if (operator === "+"){
      answer = Number(number1) + Number(number2);
  } else {
     return
   }
   return h1.innerHTML = answer;
} 
}
