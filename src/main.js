/**
 * Rachel Alden Portfolio - Micro-interactions & Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initScrollAnimations();
  initSmoothScroll();
  initGallery();
  initCarousels();
  initCriticTyping();
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
    '.about-intro, .timeline-item, .portfolio-intro, .project-card'
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
  document.querySelectorAll('.story-gallery, .timeline-gallery').forEach((gallery) => {
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
 * Carousel - prev/next buttons and dot indicators
 */
function initCarousels() {
  document.querySelectorAll('.carousel[data-carousel]').forEach((carousel) => {
    const id = carousel.dataset.carousel;
    if (carousel.classList.contains('carousel-placeholder')) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    const dotsContainer = document.querySelector(`[data-carousel-dots="${id}"]`);

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      const slideWidth = track.offsetWidth;
      track.scrollTo({ left: currentIndex * slideWidth, behavior: 'smooth' });
      updateDots();
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    track.addEventListener('scroll', () => {
      const slideWidth = track.offsetWidth;
      const newIndex = Math.round(track.scrollLeft / slideWidth);
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateDots();
      }
    });
  });
}

/**
 * Critic quote typing animation on hover
 */
function initCriticTyping() {
  const criticEl = document.querySelector('.critic-hover');
  if (!criticEl) return;

  const quote = criticEl.dataset.criticQuote || '';
  const typedEl = criticEl.querySelector('.critic-typed');
  const tooltipEl = criticEl.querySelector('.critic-typing-tooltip');
  if (!typedEl || !tooltipEl || !quote) return;

  let typingId = null;
  let isHovering = false;

  function typeNextChar(index) {
    if (!isHovering || index >= quote.length) {
      return;
    }
    typedEl.textContent += quote[index];
    typingId = setTimeout(() => typeNextChar(index + 1), 35);
  }

  function startTyping() {
    isHovering = true;
    criticEl.classList.add('is-active');
    typedEl.textContent = '';
    typeNextChar(0);
  }

  function stopTyping() {
    isHovering = false;
    if (typingId) {
      clearTimeout(typingId);
      typingId = null;
    }
    criticEl.classList.remove('is-active');
    typedEl.textContent = '';
  }

  criticEl.addEventListener('mouseenter', startTyping);
  criticEl.addEventListener('mouseleave', stopTyping);
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
