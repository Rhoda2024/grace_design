let hamMenu = document.querySelector(".ham-menu");
let navMenu = document.querySelector(".nav-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
