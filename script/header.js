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

function checkIfIsScrolled() {
  const scrollY = window.scrollY;
  if (scrollY > 90) {
    header.classList.add("bg-header-fixed");
  }
}

checkIfIsScrolled();

const btnHeaderInicio = document.querySelector("#header-inicio");
const btnHeaderQuemSomos = document.querySelector("#header-quem-somos");
const btnHeaderProjetos = document.querySelector("#header-projetos");
const btnHeaderContato = document.querySelector("#header-contato");

const btnsHeader = document.querySelectorAll(".link-navbar");

const SectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      btnsHeader.forEach((btn) => {
        btn.classList.remove("active");
      });

      switch (entry.target.id) {
        case "inicio":
          btnHeaderInicio.classList.add("active");
          break;
        case "quem-somos":
          btnHeaderQuemSomos.classList.add("active");
          break;
        case "projetos":
          btnHeaderProjetos.classList.add("active");
          break;
        case "contato":
          btnHeaderContato.classList.add("active");
          break;
        default:
          break;
      }
    }
  });
});
const sections = document.querySelectorAll(".section-observer");

sections.forEach((section) => {
  SectionObserver.observe(section);
});
