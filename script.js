// toggle Nav
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//Nav Scroll Active
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
console.log(sections);
console.log(navLinks);
window.onscroll = () => {
  console.log("scrolling");
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("activeHome");
      });

      // Add the "active" class to the corresponding nav link by comparing "id" and "href"
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("activeHome");
    }
  });
  // Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //Removing Navbar when user selects a section
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .portfolio-box, .contact form , .slider-container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-img ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });
//Typed js
const typed = new Typed(".multiple-text", {
  strings: [
    " Computer Science Student",
    " Front-end Developer",
    " Photographer",
    " Web-Developer",
    " Blogger",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
