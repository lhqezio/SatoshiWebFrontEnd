autoResize();
let buttonDrop = document.getElementById("button");
buttonDrop.addEventListener("click", pageSetup, true);
window.addEventListener("resize", buttonSetup, true);
document
  .getElementById("buttonOverview")
  .addEventListener("click", scrollTop, true);
document
  .getElementById("buttonSysreq")
  .addEventListener("click", scrollBottom, true);
document
  .getElementById("buttonTechnologies")
  .addEventListener("click", scrollTech, true);
document.getElementById("orderButton").addEventListener(
  "click",
  () => {
    orderForm();
    disable();
  },
  true
);
document.getElementById("orderFormQuitButton").addEventListener(
  "click",
  () => {
    orderForm();
    enable();
  },
  true
);
document.getElementById("orderBack").addEventListener(
  "click",
  () => {
    orderForm();
    enable();
  },
  true
);
function scrollTop() {
  window.scrollTo({ top: 79, behavior: "smooth" });
}
function scrollBottom() {
  window.scrollTo({ top: 99999, behavior: "smooth" });
}
function scrollTech() {
  window.scrollTo({ top: 1950, behavior: "smooth" });
}
function dropDwon() {
  document.getElementsByTagName("nav")[0].style.opacity = "1";
  document.getElementsByTagName("nav")[0].style.pointerEvents = "all";
}
function bringUp() {
  document.getElementsByTagName("nav")[0].style.opacity = "0";
  document.getElementsByTagName("nav")[0].style.pointerEvents = "none";
}
function pageSetup() {
  let buttonState = document.getElementsByTagName("nav")[0].style.opacity;
  if (buttonState === "1") {
    bringUp();
  } else {
    dropDwon();
  }
}
function buttonSetup() {
  let width = window.innerWidth;
  if (width > 1086) {
    dropDwon();
  } else {
    bringUp();
  }
}
function autoResize() {
  let width = window.innerWidth;
  if (width <= 1086) {
    bringUp();
  }
}

function jump(button, location) {
  button.addEventListener(
    "click",
    document.getElementById(location).scrollIntoView({ behavior: "smooth" })
  );
}
function orderForm() {
  if (document.getElementById("orderBack").style.display === "none") {
    setTimeout(() => {
      document.getElementById("orderBack").style.display = "block";
    }, 400);
    setTimeout(() => {
      document.getElementById("orderFormWrap").style.display = "block";
    }, 400);
  } else {
    setTimeout(() => {
      document.getElementById("orderBack").style.display = "none";
    }, 0);
    setTimeout(() => {
      document.getElementById("orderFormWrap").style.display = "none";
    }, 0);
  }
}
function disable() {
  let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
  };
}

function enable() {
  window.onscroll = function() {};
}
