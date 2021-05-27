const images = document.querySelectorAll(".image1");
const about = document.querySelector(".about-section");
const contact = document.querySelector(".contact-section");
const services = document.querySelector(".service-section");

let activeSlide = 0;

setInterval(() => {
  activeSlide++;

  if (activeSlide > images.length - 1) {
    activeSlide = 0;
  }
  setActiveImage();
}, 8000);

function setActiveImage() {
  images.forEach((img) => img.classList.remove("active"));

  images[activeSlide].classList.add("active");
}

document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
