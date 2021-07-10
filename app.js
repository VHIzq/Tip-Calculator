//Creación de la app
let app = () => {
let bill = document.getElementById("bill-count").value;//Input the bill amount
let rate = document.getElementById("rate").value; // Input the quality of service
let Numpeople = document.getElementById("people").value; //Input the number of diners
//Calculate the tip depending the service experience
let tip = (bill * rate ) / Numpeople;
tip = Math.round(tip * 100) / 100;
tip = tip.toFixed(2);
document.getElementById("tip").innerHTML = tip;
}
document.getElementById("calculate").onclick = function(){
  app();  
};