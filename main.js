// costo per km
var costokm = 0.21;
console.log("Costo del biglietto per Km = " + costokm + "€/km");

//Km da percorrere
var km = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km da percorrere = " + km + "Km");
//calcolo costo biglietto per km da percorrere
var costobiglietto = (km * costokm);
console.log("Costo del biglietto = " + costobiglietto + "€");

var eta = parseInt(prompt("Quanti anni hai?"));
console.log("Età = " + eta + " anni");
//Sconto del 20% per i minori di 18anni
var scontominori = costobiglietto - ((costobiglietto * 20)/100);

//Sconto del 40% per gli over 65
var scontover = costobiglietto - ((costobiglietto * 40)/100);

// Prezzo del biglietto a seconda dell'età inserita
if (eta <=17) {
    console.log("Prezzo biglietto per i minori di 18 anni = " + scontominori + "€");
    document.getElementById("costo").innerHTML =  scontominori;
}   else if (eta >=65){
    console.log("Prezzo biglietto per gli over 65 = " + scontover + "€");
    document.getElementById("costo").innerHTML =  scontover;
}else if (eta){
    document.getElementById("costo").innerHTML = costobiglietto;
}
// collegamento con HTML
document.getElementById("row").setAttribute("class", "visible");
document.getElementById("km").innerHTML = km;
document.getElementById("eta").innerHTML = eta;
