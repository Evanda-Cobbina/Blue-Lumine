// Mobile navigation toggle
      const hamburger = document.getElementById("hamburger");
      const nav = document.getElementById("nav");

      hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
      });

      // Close mobile nav when clicking outside
      document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
          nav.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });

      // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.style.background = "rgba(15, 23, 42, 0.98)";
          header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
        } else {
          header.style.background = "rgba(15, 23, 42, 0.95)";
          header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
      });

      // Animate elements on scroll
      function animateOnScroll() {
        const elements = document.querySelectorAll(
          ".service-card, .testimonial-card, .stat-item"
        );

        elements.forEach((element) => {
          const position = element.getBoundingClientRect();

          // If element is in viewport
          if (position.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
          }
        });
      }

      // Initialize elements for animation
      document
        .querySelectorAll(".service-card, .testimonial-card, .stat-item")
        .forEach((element) => {
          element.style.opacity = 0;
          element.style.transform = "translateY(50px)";
          element.style.transition = "all 0.8s ease";
        });

      // Listen for scroll events
      window.addEventListener("scroll", animateOnScroll);
      // Initial check
      animateOnScroll();

      // Stats counter animation
      function animateStats() {
        const statElements = document.querySelectorAll(".stat-item h3");
        const values = [320, 5.7, 99.8, 12];
        const suffixes = ["+", "B", "%", ""];

        statElements.forEach((stat, index) => {
          let counter = 0;
          const target = values[index];
          const suffix = suffixes[index];
          const duration = 2000;
          const steps = 50;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            counter += increment;
            if (counter >= target) {
              counter = target;
              clearInterval(timer);
            }

            if (suffix === "%") {
              stat.innerHTML =
                '<i class="fas fa-check-circle"></i> ' +
                counter.toFixed(1) +
                suffix;
            } else if (suffix === "B") {
              stat.innerHTML =
                '<i class="fas fa-dollar-sign"></i> ' +
                counter.toFixed(1) +
                suffix;
            } else {
              stat.innerHTML =
                '<i class="fas fa-building"></i> ' +
                Math.round(counter) +
                suffix;
            }
          }, stepTime);
        });
      }

      // Initialize stats animation when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateStats();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(document.querySelector(".stats"));