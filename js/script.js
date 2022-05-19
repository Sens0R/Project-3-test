/// SCROLL ON CLICK

const menuLinks = document.querySelectorAll(".scroll-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      if (burgerMenu.classList.contains("_active")) {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        navMenu.classList.toggle("_active");
        logo.classList.toggle("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//// BURGER MENU

const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burgerMenu.classList.toggle("_active");
    navMenu.classList.toggle("_active");
    logo.classList.toggle("_active");
  });
}
