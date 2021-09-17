const navbar__mobileEL = document.querySelector(".navbar__mobile");
const headerEl = document.querySelector(".header");

navbar__mobileEL.addEventListener("click", function () {
  headerEl.classList.toggle("navbar__open");
});
