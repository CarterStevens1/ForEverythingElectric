const images = document.querySelectorAll(".image1");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const about = document.querySelector(".about-section");
const contact = document.querySelector(".contact-section");
const services = document.querySelector(".service-section");
const submit = document.querySelector(".fcf-btn");

let activeSlide = 0;

function setActiveImage() {
  images.forEach((img) => img.classList.remove("active"));

  images[activeSlide].classList.add("active");
}

function prevslide() {
  prev.addEventListener("click", () => {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = images.length - 1;
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
  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

$(document).ready(function () {
  $(".fcf-btn").click(function (e) {
    let email = $(".email").val();
    let name = $(".name").val();
    let message = $(".message").val();
    let statusEl = $(".status");
    statusEl.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
    } else {
      e.preventDefault();
      statusEl.append("<p>Email is not valid!</p>");
    }

    if (message.length > 15) {
    } else {
      e.preventDefault();
      statusEl.append("<p>Message is not valid!</p>");
    }

    if (name.length > 2) {
    } else {
      e.preventDefault();
      statusEl.append("<p>Name is not valid!</p>");
    }
  });
});
