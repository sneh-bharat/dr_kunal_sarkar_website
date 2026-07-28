"use client";

import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function SiteScripts() {
  useEffect(() => {
    const cleanups = [];

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
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // Expertise Swiper Initialization
    let expertiseSwiper;
    if (document.querySelector(".expertise-swiper")) {
      expertiseSwiper = new Swiper(".expertise-swiper", {
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
      cleanups.push(() => expertiseSwiper.destroy(true, true));
    }

    // Google Reviews Swiper — standard slide effect (fade caused mobile overflow)
    let reviewsSwiper;
    if (document.querySelector("#reviews-swiper")) {
      reviewsSwiper = new Swiper("#reviews-swiper", {
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
      cleanups.push(() => reviewsSwiper.destroy(true, true));
    }

    // Innovations in Cardiac Surgery — 3D coverflow carousel
    let innovationsSwiper;
    const addedClones = [];
    const innovationsEl = document.querySelector(".innovations-swiper");
    if (innovationsEl) {
      // Swiper's loop needs enough slides to fan symmetrically. With only 5 it
      // silently disables loop and stacks everything to one side, so we duplicate
      // the slide set once (-> 10 slides) for a balanced, seamless loop.
      const wrapper = innovationsEl.querySelector(".swiper-wrapper");
      const originals = Array.from(wrapper.children);
      originals.forEach((slide) => {
        const clone = slide.cloneNode(true);
        wrapper.appendChild(clone);
        addedClones.push(clone);
      });

      innovationsSwiper = new Swiper(innovationsEl, {
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

      cleanups.push(() => {
        innovationsSwiper.destroy(true, true);
        addedClones.forEach((clone) => clone.remove());
      });
    }

    // Dr. Sarkar's Voice — YouTube lightbox modal
    const modal = document.getElementById("voice-modal");
    const iframe = document.getElementById("voice-modal-iframe");
    if (modal && iframe) {
      const close = () => {
        modal.hidden = true;
        iframe.src = ""; // stop playback
        document.body.style.overflow = "";
      };

      const cardEntries = [];
      document.querySelectorAll(".voice-card[data-yt]").forEach((card) => {
        const open = () => {
          const id = card.getAttribute("data-yt");
          if (!id) return;
          iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
          modal.hidden = false;
          document.body.style.overflow = "hidden";
        };
        card.addEventListener("click", open);
        cardEntries.push([card, open]);
      });

      const closeBtn = modal.querySelector(".voice-modal-close");
      closeBtn?.addEventListener("click", close);

      const onModalClick = (e) => {
        if (e.target === modal) close();
      };
      modal.addEventListener("click", onModalClick);

      const onKeydown = (e) => {
        if (e.key === "Escape" && !modal.hidden) close();
      };
      document.addEventListener("keydown", onKeydown);

      cleanups.push(() => {
        cardEntries.forEach(([card, open]) => card.removeEventListener("click", open));
        closeBtn?.removeEventListener("click", close);
        modal.removeEventListener("click", onModalClick);
        document.removeEventListener("keydown", onKeydown);
      });
    }

    // Scroll-Reveal: IntersectionObserver to trigger animations
    const revealElements = document.querySelectorAll(".reveal");
    let observer;
    if (revealElements.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              // Once visible, stop observing to save resources
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null, // use viewport
          rootMargin: "0px",
          threshold: 0.15, // trigger when 15% of element is visible
        }
      );
      revealElements.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
