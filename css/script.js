const x = document.querySelector(".mb-menu-toggle");
const y = document.querySelector(".main-menu-header");

x.addEventListener("click", () => {
  y.classList.toggle("hide-me");
});
