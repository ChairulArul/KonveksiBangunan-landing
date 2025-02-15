document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim!");
  });

  const services = document.querySelectorAll(".service");
  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      service.style.backgroundColor = "#ffcc99";
    });
    service.addEventListener("mouseleave", () => {
      service.style.backgroundColor = "#ddd";
    });
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Menambahkan efek perubahan background pada scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow");
  } else {
    navbar.classList.remove("bg-white", "shadow");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  function updateNav() {
    let currentSection = "";
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.clientHeight;

      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update navbar active link
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });

    if (scrollPosition === 0) {
      navbar.classList.add("no-scroll");
    } else {
      navbar.classList.remove("no-scroll");
    }
  }

  window.addEventListener("scroll", updateNav);
  updateNav();
});
