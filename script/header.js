const buttonNavbar = document.querySelector("#button-navbar");
const navbar = document.querySelector("#navbar");
const header = document.querySelector("#header");
const linkNavbar = document.querySelectorAll(".link-navbar");

buttonNavbar.addEventListener("click", () => {
  navbar.classList.toggle("show-navbar");
  header.classList.toggle("show-navbar-header");
});

linkNavbar.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("show-navbar");
    header.classList.remove("show-navbar-header");
  })
);

window.onscroll = function () {
  handleScroll();
};

const handleScroll = () => {
  if (window.pageYOffset > 90) {
    header.classList.add("bg-header-fixed");
  } else {
    header.classList.remove("bg-header-fixed");
  }
};
