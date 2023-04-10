let product;
let basePrice;
let basePriceAmount;
let province;
let fedTax;
let provTax;
let amount;
let total;
document
  .getElementsByClassName("edition")[0]
  .addEventListener("click", getValue, true);
document.getElementById("province").addEventListener("click", getValue, true);
document.getElementById("amount").addEventListener("click", getValue, true);
function getValue() {
  let version = document.getElementsByClassName("edition")[0].value;
  versionD(version);
  province = document.getElementById("province").value;
  taxCal();
  amount = document.getElementById("amount").value;
  totalA();
  showResult();
}
function versionD(version) {
  if (version === "personal") {
    basePrice = 499.99;
  } else if (version === "commercial") {
    basePrice = 1499.99;
  } else if (version === "enterprise") {
    basePrice = 2499.99;
  } else if (version === "standard") {
    basePrice = 299.99;
  } else if (version === "pro") {
    basePrice = 599.99;
  }
}
function taxCal() {
  fedTax = basePrice * 0.05;
  if (
    province === "ab" ||
    province === "nt" ||
    province === "nu" ||
    province === "yt"
  ) {
    provTax = 0;
  } else if (province === "bc" || province === "mb") {
    provTax = basePrice * 0.07;
  } else if (
    province === "nb" ||
    province === "nl" ||
    province === "ns" ||
    province === "pe"
  ) {
    provTax = basePrice * 0.1;
  } else if (province === "qc") {
    provTax = basePrice * 0.09975;
  } else if (province === "on") {
    provTax = basePrice * 0.08;
  } else if (province === "sk") {
    provTax = basePrice * 0.06;
  } else {
    provTax = 0;
    fedTax = 0;
  }
}
function totalA() {
  provTax = provTax * amount;
  fedTax = fedTax * amount;
  basePriceAmount = basePrice * amount;
  total = provTax + fedTax + basePriceAmount;
}
function showResult() {
  document.getElementById("price").innerHTML = basePrice.toFixed(2) + "$";
  document.getElementById("priceShow").innerHTML = total.toFixed(2) + "$";
  document.getElementById("pst").innerHTML = provTax.toFixed(2) + "$";
  document.getElementById("gst").innerHTML = fedTax.toFixed(2) + "$";
  document.getElementById("gst").innerHTML = fedTax.toFixed(2) + "$";
}
function purchaseSucces() {
  alert("Purchases Succesful");
}
