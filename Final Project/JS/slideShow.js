let slideIndex = 0;
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);
function nextSlide() {
  let i;
  let slides = document.getElementsByClassName("picture");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  pic3ButtonColor();
}
function prevSlide() {
  let i;
  let slides = document.getElementsByClassName("picture");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex === 0) {
    slideIndex = 3;
  } else {
    slideIndex--;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (!(slideIndex === 0)) {
    slides[slideIndex - 1].style.display = "block";
  } else {
    slides[3].style.display = "block";
  }
  pic3ButtonColor();
}
function pic3ButtonColor() {
  let pic3Display = document.getElementById("pic3").style.display;
  if (pic3Display === "block") {
    document.getElementById("prevButton").style.color = "black";
    document.getElementById("nextButton").style.color = "black";
  } else {
    document.getElementById("prevButton").style.color = "white";
    document.getElementById("nextButton").style.color = "white";
  }
}
