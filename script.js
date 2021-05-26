const images = document.querySelectorAll(".image1");

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
