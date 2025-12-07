// Replace the current contents of assets/js/app.js with this
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");
  const body = document.body;
  const NAV_BREAKPOINT = 800; // matches our CSS media query

  // utility: close mobile menu
  function closeMobileMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    body.style.overflow = "";
  }

  // utility: open mobile menu
  function openMobileMenu() {
    hamburger.classList.add("active");
    navLinks.classList.add("active");
    // prevent background from scrolling when mobile menu is open
    body.style.overflow = "hidden";
  }

  // Safe guard: if elements missing - fail silently
  if (!hamburger || !navLinks || !navbar) return;

  // Toggle the mobile menu only when hamburger is clicked
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navLinks.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when user clicks any link inside it
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Close menu if user clicks outside the menu on mobile
  document.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= NAV_BREAKPOINT;
    if (!isMobile) return;
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Smart sticky: add scrolled class, but DON'T change width/padding
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      // ensure menu stays closed while scrolling
      // (prevents the menu from unexpectedly appearing)
      // we do NOT forcibly change body overflow here if menu was open
      // instead we politely close the menu to avoid layout issues
      if (navLinks.classList.contains("active")) {
        closeMobileMenu();
      }
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // If the user resizes from mobile to desktop, close mobile menu and restore scroll
  window.addEventListener("resize", function () {
    if (window.innerWidth > NAV_BREAKPOINT) {
      closeMobileMenu();
    }
  });

  // Initialize: ensure menu closed on load
  closeMobileMenu();
});


// Count-up function
function countUp(element, target) {
    let current = 0;
    let speed = Math.ceil(target / 20); // animation speed

    const interval = setInterval(() => {
        current += speed;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current + "+";
    }, 30);
}

// Observe when section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-box').forEach(box => {
                const numberElem = box.querySelector(".stat-number");
                const target = parseInt(box.getAttribute("data-target"));
                countUp(numberElem, target);
            });
        }
    });
}, { threshold: 0.4 });

observer.observe(document.querySelector("#stats-section"));

// Count-up again on hover
document.querySelectorAll(".stat-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        const numberElem = box.querySelector(".stat-number");
        const target = parseInt(box.getAttribute("data-target"));
        countUp(numberElem, target);
    });
});
