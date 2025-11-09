document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");
  const body = document.body;

  // --- BURGER MENU TOGGLE ---
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Prevent background scrolling when menu is open
    if (navLinks.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // --- SMART STICKY NAVBAR ---
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
































// JavaScript to toggle the navigation menu
/*
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
let menuOpen = false;

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    body.style.overflow = "";
  });
});

// Add scrolled class to navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// Initialize scroll state
window.dispatchEvent(new Event("scroll"));


// Scroll behavior for navigation
/* window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    body.classList.add("nav-scrolled");
  } else {
    body.classList.remove("nav-scrolled");
  }
});

// Initialize scroll state
window.dispatchEvent(new Event("scroll"));
*/



