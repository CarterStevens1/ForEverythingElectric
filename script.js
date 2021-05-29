const images = document.querySelectorAll(".image1");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const about = document.querySelector(".about-section");
const contact = document.querySelector(".contact-section");
const services = document.querySelector(".service-section");

let activeSlide = 0;

function setActiveImage() {
  images.forEach((img) => img.classList.remove("active"));

  images[activeSlide].classList.add("active");
}

function prevslide() {
  prev.addEventListener("click", () => {
    activeSlide--;

    if ((activeSlide = 0)) {
      return;
    }

    setActiveImage();
  });
}

function nextslide() {
  next.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > images.length - 1) {
      activeSlide = 0;
    }

    setActiveImage();
  });
}

function init() {
  nextslide();
  prevslide();
}

init();

document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
