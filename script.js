document.addEventListener("DOMContentLoaded", function () {
  // Form submit alert
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim!");
  });

  // Hover effect for services
  document.querySelectorAll(".service").forEach((service) => {
    service.addEventListener("mouseenter", () => {
      service.style.backgroundColor = "#ffcc99";
      service.style.transition = "background-color 0.3s ease";
    });
    service.addEventListener("mouseleave", () => {
      service.style.backgroundColor = "#ddd";
    });
  });

  // Navbar background change on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.style.transition = "background-color 0.3s ease";
    header.style.backgroundColor =
      window.scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent";
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Navbar styling change on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("bg-white", window.scrollY > 50);
    navbar.classList.toggle("shadow", window.scrollY > 50);
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateNav() {
    let scrollPosition = window.scrollY;
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.clientHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateNav);
  updateNav();

  // Smooth reveal animation using Intersection Observer API
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate").forEach((section) => {
    observer.observe(section);
  });
});
