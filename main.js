/* ========== Loading section ========= */

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#spinner").style.visibility = "visible";
  } else {
      document.querySelector(
        "#spinner").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

// Add background color to nav on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// -------------------Nav menu Toggle-------------------
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "flex";
});

//Read more

let readMoreBtn = document.querySelector(".read-more");
let readLessBtn = document.querySelector(".read-less");
let readMoreContent = document.querySelector(".read-more-content")

readMoreBtn.addEventListener("click", () => {
  readMoreContent.style.display = "inline-block"
  readMoreBtn.style.display = "none"
  readLessBtn.style.display = "inline-block"
})
readLessBtn.addEventListener("click", () => {
  readMoreContent.style.display = "none"
  readMoreBtn.style.display = "inline-block"
  readLessBtn.style.display = "none"
})
