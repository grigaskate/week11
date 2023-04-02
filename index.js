const price1 = document.getElementById("price1").innerHTML;
const price2 = document.getElementById("price2").innerHTML;
const price3 = document.getElementById("price3").innerHTML;
const price4 = document.getElementById("price4").innerHTML;
const sum =
  parseFloat(price1.replace(",", ".")) +
  parseFloat(price2.replace(",", ".")) +
  parseFloat(price3.replace(",", ".")) +
  parseFloat(price4.replace(",", "."));
let priceSum = (document.getElementById("priceSum").innerHTML = sum.toFixed(2));

function clickSale20() {
  priceSum = document.getElementById("priceSum").innerHTML = (
    sum * 0.8
  ).toFixed(2);
}
