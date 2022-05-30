const burgerMenuIcon = document.querySelector(".burger-menu__icon");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");
const accordionButton = document.querySelectorAll(".accordion__button");

/// ACCORDION ///
const accordionButtons = document
  .querySelectorAll(".accordion__button")
  .forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("accordion__button--active");
      const accordionContent = button.nextElementSibling;
      if (button.classList.contains("accordion__button--active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }
      window.addEventListener("resize", accordionResizeListener);
      function accordionResizeListener() {
        if (button.classList.contains("accordion__button--active")) {
          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";
        } else {
          accordionContent.style.maxHeight = 0;
        }
      }
    });
  });

/// REMOVE TRANSITIONS ON LOADING ///
window.addEventListener("load", (event) => {
  document.body.classList.remove("preload");
});

/// BURGER MENU ///

if (burgerMenuIcon) {
  burgerMenuIcon.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    burgerMenuIcon.classList.toggle("_active");
    navMenu.classList.toggle("_active");
    logo.classList.toggle("_active");
    const carouselNav = document.querySelector(".carousel-nav");
    carouselNav.classList.toggle("d-none");
  });
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
