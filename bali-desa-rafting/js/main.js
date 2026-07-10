// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-q");
  const answer = item.querySelector(".faq-a");
  if (!question || !answer) return;

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-a").style.maxHeight = null;
        openItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      }
    });

    if (isOpen) {
      item.classList.remove("open");
      answer.style.maxHeight = null;
      question.setAttribute("aria-expanded", "false");
    } else {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.setAttribute("aria-expanded", "true");
    }
  });
});

// Gallery lightbox
const lightbox = document.getElementById("gallery-lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");
  const lightboxVideo = lightbox.querySelector("video");
  const closeBtn = lightbox.querySelector(".gallery-lightbox-close");

  const openImage = (src, alt) => {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.style.display = "none";
    lightboxImg.style.display = "";
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("open");
  };

  const openVideo = (src, poster) => {
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "";
    lightboxVideo.setAttribute("poster", poster || "");
    lightboxVideo.src = src;
    lightbox.classList.add("open");
    lightboxVideo.play().catch(() => {});
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
  };

  document.querySelectorAll("[data-lightbox]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const img = link.querySelector("img");
      openImage(link.getAttribute("href"), img ? img.alt : "");
    });
  });

  document.querySelectorAll("[data-video]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openVideo(link.getAttribute("href"), link.getAttribute("data-poster"));
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

// Respect reduced-motion preference for the hero background video
const heroVideo = document.querySelector(".hero-video");
if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVideo.pause();
  heroVideo.removeAttribute("autoplay");
}

// Header shadow on scroll
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 6px 20px rgba(74,11,16,0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}
