document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector("nav ul");
  
    navbarToggle.addEventListener("click", function() {
      menu.classList.toggle("show");
      navbarToggle.classList.toggle("change");
    });
});

