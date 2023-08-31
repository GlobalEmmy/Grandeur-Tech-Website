// Add background color to nav on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// -------FAQ Toggle-----
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
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

//Read more 1

let readMoreBtn1 = document.querySelector(".read-more1");
let readLessBtn1 = document.querySelector(".read-less1");
let readMoreContent1 = document.querySelector(".read-more-content1")

readMoreBtn1.addEventListener("click", () => {
  readMoreContent1.style.display = "flex"
  readMoreBtn1.style.display = "none"
  readLessBtn1.style.display = "block"
})
readLessBtn1.addEventListener("click", () => {
  readMoreContent1.style.display = "none"
  readMoreBtn1.style.display = "block"
  readLessBtn1.style.display = "none"
}) 

//Read more 2

let readMoreBtn2 = document.querySelector(".read-more2");
let readLessBtn2 = document.querySelector(".read-less2");
let readMoreContent2 = document.querySelector(".read-more-content2")

readMoreBtn2.addEventListener("click", () => {
  readMoreContent2.style.display = "block"
  readMoreBtn2.style.display = "none"
  readLessBtn2.style.display = "block"
})
readLessBtn2.addEventListener("click", () => {
  readMoreContent2.style.display = "none"
  readMoreBtn2.style.display = "block"
  readLessBtn2.style.display = "none"
}) 
//Read more 3

let readMoreBtn3 = document.querySelector(".read-more3");
let readLessBtn3 = document.querySelector(".read-less3");
let readMoreContent3= document.querySelector(".read-more-content3")

readMoreBtn3.addEventListener("click", () => {
  readMoreContent3.style.display = "block"
  readMoreBtn3.style.display = "none"
  readLessBtn3.style.display = "block"
})
readLessBtn3.addEventListener("click", () => {
  readMoreContent3.style.display = "none"
  readMoreBtn3.style.display = "block"
  readLessBtn3.style.display = "none"
}) 
//Read more 4

let readMoreBtn4 = document.querySelector(".read-more4");
let readLessBtn4 = document.querySelector(".read-less4");
let readMoreContent4 = document.querySelector(".read-more-content4")

readMoreBtn4.addEventListener("click", () => {
  readMoreContent4.style.display = "block"
  readMoreBtn4.style.display = "none"
  readLessBtn4.style.display = "block"
})
readLessBtn4.addEventListener("click", () => {
  readMoreContent4.style.display = "none"
  readMoreBtn4.style.display = "block"
  readLessBtn4.style.display = "none"
}) 

