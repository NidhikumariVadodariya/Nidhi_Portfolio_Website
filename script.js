// // JavaScript

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

const navLinks = document.getElementById("navLinks");
const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// Close menu when clicking menu item
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// Active menu item while scrolling
window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(function (item) {
    item.classList.remove("active");

    if (item.getAttribute("href") === "#" + currentSection) {
      item.classList.add("active");
    }
  });
});
