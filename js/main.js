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
      delay: 4000,
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
      delay: 3000,
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

// Innovations in Cardiac Surgery — 3D coverflow carousel
(function initInnovations() {
  const el = document.querySelector(".innovations-swiper");
  if (!el) return;

  // Swiper's loop needs enough slides to fan symmetrically. With only 5 it
  // silently disables loop and stacks everything to one side, so we duplicate
  // the slide set once (-> 10 slides) for a balanced, seamless loop.
  const wrapper = el.querySelector(".swiper-wrapper");
  const originals = Array.from(wrapper.children);
  originals.forEach((slide) => wrapper.appendChild(slide.cloneNode(true)));

  new Swiper(el, {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    slideToClickedSlide: true,
    speed: 650,
    coverflowEffect: {
      rotate: 34,
      stretch: 0,
      depth: 120,
      modifier: 1,
      scale: 0.8,
      slideShadows: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".innovations-next",
      prevEl: ".innovations-prev",
    },
  });
})();
