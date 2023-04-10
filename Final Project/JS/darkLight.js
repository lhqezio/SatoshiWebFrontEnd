let darkLight = document.getElementById("darkLight");
let currentState = darkLight.innerHTML;
let otherState;
determine();
darkLight.addEventListener("mouseenter", mouseIn, true);
darkLight.addEventListener("mouseleave", mouseOut, true);
darkLight.addEventListener("click", mouseClick, true);
function mouseIn() {
  darkLight.innerHTML = otherState;
  if (currentState === "🌙") {
    darkLight.style.backgroundColor = "white";
  } else {
    darkLight.style.backgroundColor = "rgb(32,33,36)";
  }
  darkLight.style.width = "60px";
  darkLight.style.height = "60px";
  darkLight.style.fontSize = "1.5em";
}
function mouseClick() {
  currentState = otherState;
  darkLight.innerHTML = currentState;
  if (currentState === "🌙") {
    darkLight.style.backgroundColor = "rgb(32,33,36)";
  } else {
    darkLight.style.backgroundColor = "white";
  }
  determine();
  switchColor();
}
function mouseOut() {
  darkLight.innerHTML = currentState;
  if (currentState === "🌙") {
    darkLight.style.backgroundColor = "rgb(32,33,36)";
  } else {
    darkLight.style.backgroundColor = "white";
  }
  darkLight.style.width = "40px";
  darkLight.style.height = "40px";
  darkLight.style.fontSize = "1em";
}
function determine() {
  if (currentState === "🌙") {
    otherState = "☀️";
  } else {
    otherState = "🌙";
  }
}
function switchColor() {
  document.body.classList.toggle("dark-mode");
  document.getElementsByClassName("navbar")[0].classList.toggle("dark-mode");
  document.getElementById("button").classList.toggle("dark-mode");
  document.body.getElementsByTagName("header")[0].classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("subnav")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("nav-item")[0]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("nav-item")[1]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("nav-item")[2]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("nav-item")[3]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("subnav-item")[0]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("subnav-item")[1]
    .getElementsByTagName("a")[0]
    .classList.toggle("dark-mode");
  document.body
    .getElementsByClassName("productArticles")[0]
    .classList.toggle("dark-mode");
  if (document.body.getElementsByClassName("productArticles")[1] != undefined) {
    document.body
      .getElementsByClassName("productArticles")[1]
      .classList.toggle("dark-mode");
  }
  if ((document.body.getElementsByClassName("productHeader")[0] = !undefined)) {
    document.body
      .getElementsByClassName("productHeader")[0]
      .classList.toggle("dark-mode");
    document.body
      .getElementsByClassName("productHeaderNavItem")[0]
      .classList.toggle("dark-mode");
    document.body
      .getElementsByClassName("productHeaderNavItem")[1]
      .classList.toggle("dark-mode");
    document.body
      .getElementsByClassName("productHeaderNavItem")[2]
      .classList.toggle("dark-mode");
    document.body
      .getElementsByClassName("productHeaderNavItem")[3]
      .classList.toggle("dark-mode");
    document.getElementById("orderFormWrap").classList.toggle("dark-mode");
    document.getElementById("submitLabel").classList.toggle("dark-mode");
    document.getElementById("submitLabel").classList.toggle("dark-mode");
  }
}
