// function calculateDiameter(radius){
//     return 2 * radius;
// }

// function calculateArea(radius){
//     return 1.14 * Math.pow(radius, 2);
// }

// function calculateCircumference(radius){
//     return 1.14 * calculateDiameter(radius);
// }

// function main(){
//     let radius = parseFloat(prompt("Enter the radius of the circle : "));

//     let diameter = calculateDiameter(radius);
//     let area = calculateArea(radius);
//     let circumference = calculateCircumference(radius);

//     console.log("Diameter of the circle : " + diameter);
//     console.log("Area of the circle : " + diameter);
//     console.log("Circumference of the circle : " + circumference);
// }

// main();

// const rockButton = document.querySelector(".rock");
// const paperButton = document.querySelector(".paper");
// const scissorsButton = document.querySelector(".scissors");
// const resaltDisplay = document.querySelector(".result");
// const resultScore = document.querySelector("#result_score");
// const choices = ["rock", "paper", "scissors"];

// rockButton.addEventListener("click", function () {
//   playGame("rock");
// });

// paperButton.addEventListener("click", function () {
//   playGame("paper");
// });

// scissorsButton.addEventListener("click", function () {
//   playGame("scissors");
// });

// function computerChoice() {
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function playGame(playerChoise) {
//   const computerPlayer = computerChoice();
//   const player = playerChoise.toLowerCase();

//   let results = "";

// if (player === computerPlayer) {
//   result = "You Tie!";
// } else if (
//   (player === "Rock" && computerPlayer === "Scissors") ||
//   (player === "Paper" && computerPlayer === "Rock") ||
//   (player === "Scissors" && computerPlayer === "Paper")
// ) {
//   result = "You Win!";
// } else {
//   result = "Computer Wins!";
// }

//   if (player === "rock") {
//     if (computerPlayer === "rock") {
//       results = "You Tie";
//     } else if (computerPlayer === "paper") {
//       results = "You Lose";
//     } else if (computerPlayer === "scissors") {
//       results = "You Win!";
//     }
//   } else if (player === "paper") {
//     if (computerPlayer === "rock") {
//       results = "You Win!";
//     } else if (computerPlayer === "paper") {
//       results = "You Tie!";
//     } else if (computerPlayer === "scissors") {
//       results = "You Lose";
//     }
//   } else if (player === "scissors") {
//     if (computerPlayer === "rock") {
//       results = "You Lose";
//     } else if (computerPlayer === "paper") {
//       results = "You Win!";
//     } else if (computerPlayer === "scissors") {
//       results = "You Tie";
//     }
//   }

//   resultScore.innerHTML = `You: ${results}`;
//   resaltDisplay.innerHTML = `
//     <span>You</span>
//     <img src="${player}.png" width="80" />
//     <img src="${computerPlayer}.png" width="80" />
//     <span>Computer</span>.
//     `;
// }

// function playGame(playMove) {
//   const computerMove = compterRadom();

//   let result = "";

//   if (playMove === "Rock") {
//     if (computerMove == "Rock") {
//       result = "You Tie";
//     } else if (computerMove === "Paper") {
//       result = "You Lose";
//     } else if (computerMove === "Scissors") {
//       result = "You Win!";
//     }
//   } else if (playMove === "Paper") {
//     if (computerMove === "Rock") {
//       result = "You Win!";
//     } else if (computerMove === "Paper") {
//       result = "You Tie!";
//     } else if (computerMove === "Scissors") {
//       result = "You Lose";
//     }
//   } else if (playMove === "Scissors") {
//     if (computerMove === "Rock") {
//       result = "You Lose";
//     } else if (computerMove === "Paper") {
//       result = "You Win!";
//     } else if (computerMove === "Scissors") {
//       result = "You Tie";
//     }
//   }

//   alert(`You Pick ${playMove}, Computer Pick ${computerMove}, ${result}`);
// }

// function compterRadom() {
//   const radomIndex = Math.floor(Math.random());

//   let computerMove = "";

//   if (radomIndex >= 0 && radomIndex < 1 / 3) {
//     computerMove = "Rock";
//   } else if (radomIndex >= 1 / 3 && radomIndex < 2 / 3) {
//     computerMove = "Paper";
//   } else if (radomIndex > 2 / 3 && radomIndex < 1) {
//     computerMove = "Scissor";
//   }

//   return computerMove;
// }

// shipping Primery

// const jsButtom = document.querySelector(".js-buttom");

// jsButtom.addEventListener("click", () => {
//   submitButton();
// });

// function submitButton() {
//   const inputTage = document.querySelector(".js-input");
//   let cost = Number(inputTage.value);
//   if (cost <= 40) {
//     cost += 10;
//   }
//   document.querySelector(".js-total").innerHTML = `$${cost}`;
// }

// const headsButton = document.querySelector(".heads");
// const tailsButton = document.querySelector(".tails");
// const output = document.querySelector(".output");
// headsButton.addEventListener("click", () => {
//   output.innerHTML = `You Choose: heads`;
// });

// tailsButton.addEventListener("click", () => {
//   output.innerHTML = `You Choose: Tails`;
// });

// const jsButtom = document.querySelector(".js-buttom");
// const jsInput = document.querySelector(".js-input");
// const jsTotal = document.querySelector(".js-total");

// jsButtom.addEventListener("click", () => {
//   SubmitButton();
// });

// SubmitButton = () => {
//   let text = String(jsInput.value);
//   console.log(cost);

//   jsTotal.innerHTML = `Your Name is: ${text}`;
// };

// List Name

// const inputName = document.querySelector(".input_name");
// const inputDate = document.querySelector(".input_date");
// const clickButton = document.querySelector(".click_button");
// const result = document.querySelector(".result");
// clickButton.addEventListener("click", () => {
//   submitName();
// });

// const listTodo = [
//   {
//     name: "",
//     date: ""
//   }
// ];

// function submitList() {
//   let html = "";
//   for (let i = 0; i < listTodo.length; i++) {
//     const valueObject = listTodo[i];
//     const { name, date } = valueObject;
//     const resultHtml = `
//           <div>${name} </div>
//           <div>${date} </div>
//           <button onclick='
//             listTodo.splice(${i}, 1)
//             submitList()
//           '>Delete</button>
//       `;
//     html += resultHtml;
//   }
//   result.innerHTML = `${html}`;
// }

// function submitName() {
//   const name = inputName.value;
//   const date = inputDate.value;
//   listTodo.push({
//     name,
//     date
//   });
//   inputName.value = "";
//   submitList();
// }

// function arrayFunction(arrayIndex) {
//   const numArray = [];
//   for (let i = 0; i < arrayIndex.length; i++) {
//     const arrayNum = arrayIndex[i];
//     numArray.push(arrayNum * 2);
//   }
//   console.log(numArray);
// }
// arrayFunction([1, 1, 3]);
// arrayFunction([2, 3, 2]);

// const array = [5, 6, 8, 1, 9, 2, 4, 3, 7];
// const arraySort = array.sort();
// arraySort.map((item, i) => {
//   console.log(`${i}: ${item}`);
// });

const textElement = document.querySelector(".text_element");

textElement.style.color = "yellow";
