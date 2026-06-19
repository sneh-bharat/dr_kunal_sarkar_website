// ============ Dr. Kunal Sarkar — UI interactions ============

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when a link is tapped
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });
}

// Subtle shadow on navbar once the page is scrolled
const navbar = document.getElementById("navbar");
if (navbar) {
  const onScroll = () => {
    if (window.scrollY > 8) {
      navbar.classList.add("shadow-sm");
    } else {
      navbar.classList.remove("shadow-sm");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Expertise Swiper Initialization
if (document.querySelector(".expertise-swiper")) {
  new Swiper(".expertise-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
}

// Google Reviews Swiper — standard slide effect (fade caused mobile overflow)
if (document.querySelector("#reviews-swiper")) {
  new Swiper("#reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoHeight: true, // Adapt to content height
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
    },
  });
}
