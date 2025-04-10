const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".navbar-mobile");

//make the button functionals in the mobile versions(425, 375 and 320px):

//for the open button:
openMenu.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.display = "block";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.display = "none";
});
