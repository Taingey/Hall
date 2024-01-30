// var index = 0;

// const buttonBg = document.querySelector(".btn_bg");

// buttonBg.addEventListener("click", () => {
//   bgColor();
// });

// function bgColor() {
//   var colorbg = ["red", "yellow", "blue", "black", "white"];
//   document.getElementsByTagName("body")[0].style.background = colorbg[index++];

//   if (index > colorbg.length - 1) {
//     index = 0;
//   }
// }
// console.log(bgColor());

// const buttonBg = document.querySelector(".btn_bg");

// buttonBg.addEventListener("click", () => {
//   changeColor();
// });

// function changeColor() {
//   var hex_numbers = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F"
//   ];

//   let hexcode = "";

//   for (let i = 0; i < 6; i++) {
//     const random_Number = Math.floor(Math.random() * hex_numbers.length);
//     hex_numbers += hex_numbers[random_index];
//   }
//   document.getElementById("hex-code").innerHTML = hexcode;
//   document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
// }

// function example() {
//   var x = 10;
//   if (true) {
//     var y = 20;
//     console.log(x); // 10
//     console.log(y); // 20
//   }
//   console.log(x); // 10
//   console.log(y); // ReferenceError: y is not defined
// }
// console.log(example());




class Taxes{
  constructor(width, height){
    this.fltAssetTotalValue = 0;
    this.fltBaseAssetTag = 0;
    this.fltAssetTax = 0;
    this.width = width;
    this.height = height; 
  };
  funtionTaxes(){
    const fltAssetLand = (width * height) * 750;
    const fltAssetE0 = (width * height) * 250;
    const fltAssetE1 = (width * height) * 200;
    const fltAssetE2 = (width * height) * 150;

    const fltAssetTotalValue = fltAssetLand + fltAssetE0 + fltAssetE1 + fltAssetE2;
    const fltBaseAssetTag = (fltAssetTotalValue * 0.8) - 25000;
    const fltAssetTax = fltBaseAssetTag * 0.001;

    return fltAssetTax;
  };
}
const width = 20;
const height = 4;
const taxes = new Taxes(width, height);
const taxes_Calculator = taxes.funtionTaxes();
console.log(`${taxes_Calculator}$`);