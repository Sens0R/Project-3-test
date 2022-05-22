const burgerMenuIcon = document.querySelector(".burger-menu__icon");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");
const menuLinks = document.querySelectorAll(".scroll-link[data-goto]");

//// BURGER MENU

if (burgerMenuIcon) {
  burgerMenuIcon.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    burgerMenuIcon.classList.toggle("_active");
    navMenu.classList.toggle("_active");
    logo.classList.toggle("_active");
  });
}

/// SCROLL ON CLICK

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
      
      if (burgerMenuIcon.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenuIcon.classList.remove("_active");
        navMenu.classList.remove("_active");
        logo.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

window.addEventListener("resize", resizeListener);

function resizeListener() {
  if (window.innerWidth > 991 && logo.classList.contains("_active")) {
    logo.style.color = "black";
  } else if (window.innerWidth < 992 && logo.classList.contains("_active")) {
    logo.style.color = "";
  }

  if (window.innerWidth > 991 && document.body.classList.contains("_lock")) {
    document.body.style.overflow = "visible";
  } else if (
    window.innerWidth < 992 &&
    document.body.classList.contains("_lock")
  ) {
    document.body.style.overflow = "";
  }
}
