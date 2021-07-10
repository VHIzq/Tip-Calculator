//Creating the app
let app = () => {
let bill = document.getElementById("bill-count").value;//Input the bill amount
let rate = document.getElementById("rate").value; // Input the quality of service
let Numpeople = document.getElementById("people").value; //Input the number of diners
//Validate input
if(bill == "" || rate == 0){
  alert("Please, enter values");
  return;
}
//Calculating the tip depending the service experience
let tip = (bill * rate ) / Numpeople;
tip = Math.round(tip * 100) / 100; //round to two decimal places
tip = tip.toFixed(2); // With two digits after decimal point
document.getElementById("tip").innerHTML = tip;
}
document.getElementById("calculate").onclick = function(){
  app();  
};