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
