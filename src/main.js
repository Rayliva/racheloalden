/**
 * Rachel Alden Portfolio - Micro-interactions & Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initScrollAnimations();
  initSmoothScroll();
  initGallery();
});

/**
 * Set current year in footer
 */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Animate elements on scroll into view
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe sections and project cards
  const animateElements = document.querySelectorAll(
    '.about-intro, .story-section, .portfolio-intro, .project-card'
  );

  animateElements.forEach((el) => {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });

  // Add CSS for initial and visible states
  const style = document.createElement('style');
  style.textContent = `
    .scroll-animate {
      opacity: 0;
      transform: translateY(24px);
    }
    .scroll-animate.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Interactive gallery - click thumbnails to change main image
 */
function initGallery() {
  document.querySelectorAll('.story-gallery').forEach((gallery) => {
    const mainImg = gallery.querySelector('.gallery-main img');
    const thumbs = gallery.querySelectorAll('.gallery-thumb');

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const src = thumb.dataset.src;
        if (src && mainImg) {
          mainImg.src = src;
          thumbs.forEach((t) => t.classList.remove('active'));
          thumb.classList.add('active');
        }
      });
    });
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}
