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
     getClickedNum(button)
})})

//on click the Operator Buttons find the button from the array and perform the function getClickedOperator
operatorButtons.map(button  => { 
  button.addEventListener("click", (button) => {
    getClickedOperator(button)
})})

//On click the clear button returns an empty string to H1
clearButton.addEventListener('click', function() {
  h1.innerHTML = ' ';
});

//this stores the clicked number and concatenates it to another if pressed
getClickedNum = (button) => {
  const clickedNumber = button.target.innerHTML;
   h1.innerHTML += clickedNumber;
}

//this takes the two strings either side of the operator
getClickedOperator = (button) =>{
    clickedOperator = button.target.innerHTML;
    h1.innerHTML += " " + clickedOperator + " ";
};

//on click equals returns the getAnswer function
equalButton.addEventListener("click", () => getAnswer())

getAnswer = () => {
  let result;
  //takes the numbers and combines them with the clicked operator
  const numbersList = h1.innerHTML.split(" " + clickedOperator + " ");
  //takes the numbers from the array
  const number1 = numbersList[0]
  const number2 = numbersList[1]
  
  if(numbersList[0] != "" && numbersList[1] != ""){
      switch(clickedOperator){
        case "/":
          result = number1 / number2;
          break;
          case "*":
          result = number1 * number2;
          break;
          case "-":
          result = number1 - number2;
          break;
          case "+":
          result = number1 + number2;
          break;
      }
  } else {
  return;
  }
  h1.innerHTML = result;
  };
  
  
  