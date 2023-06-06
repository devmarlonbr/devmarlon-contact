// callback run every time screen intersect an element
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target);

    if (entry.isIntersecting) {
      entry.target.classList.add("intersect-show");
      entry.target.classList.remove("intersect-hidden");
    } else {
      entry.target.classList.add("intersect-hidden");
      entry.target.classList.remove("intersect-show");
    }
    
  });
});

const elements = document.querySelectorAll(".intersect");
elements.forEach((element) => observer.observe(element));
