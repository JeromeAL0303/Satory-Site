document.querySelector(".menuIcon").classList.add("visibility");
var navigationBarSide = document.querySelector(".navigationBarSide");

document.querySelector(".menuIcon").addEventListener("click", function () {
  navigationBarSide.classList.toggle("visibility");
});

var navbar_scroll = document.querySelectorAll("a");

window.addEventListener("scroll", function () {
  var x = Math.floor(window.scrollY);
  var header = document.querySelector("header");

  if (x > 0) {
    header.style.backgroundColor = "#2E073F";
    header.style.height = "10vh";
    navigationBarSide.style.top = "10vh";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.height = "20vh";
    navigationBarSide.style.top = "20vh";
  }

  for (var i = 0; i < navbar_scroll.length; i++) {
    document.querySelectorAll("a")[i].style.color = "white";
  }

  if (x >= 0 && x <= 500) {
    document.querySelectorAll("a")[1].style.color = "black";
    document.querySelectorAll("a")[6].style.color = "black";
  } else if (x > 500 && x < 1000) {
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[7].style.color = "black";
  } else {
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[8].style.color = "black";
  }
});

for (var i = 0; i < document.querySelectorAll("section").length; i++) {
  document
    .querySelectorAll("section")
    [i].addEventListener("click", sideBarClose);
}

function sideBarClose() {
  navigationBarSide.classList.remove("visibility");
}
