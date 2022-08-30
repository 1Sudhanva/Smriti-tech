const menuBtn = document.querySelector(".menu-btn");
let menuOpen = flase;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuOpen.classList.remove("open");
    menuOpen = false;
  }
});
