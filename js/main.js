/* =================================
   LEFTHAND SOCIAL - MAIN JAVASCRIPT
   ================================= */

document.addEventListener('DOMContentLoaded', function() {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Prevent body scroll when menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    const navLinkItems = navLinks.querySelectorAll('.nav-link');
    navLinkItems.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Navigation Scroll Effect ---
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Initial check
  handleNavScroll();

  // Listen for scroll
  window.addEventListener('scroll', handleNavScroll);

  // --- Fade In Animations on Scroll ---
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once animated
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function(element) {
    fadeObserver.observe(element);
  });

  // --- Smooth Scroll for Anchor Links ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Only process if it's an actual anchor (not just "#")
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const navHeight = nav.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- Active Navigation Link ---
  // Highlight current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link');

  allNavLinks.forEach(function(link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // --- Adaptive Favicon for Light/Dark Mode ---
  function updateFavicon(isDarkMode) {
    const favicon = document.querySelector('link[rel="icon"][type="image/png"]');
    if (favicon) {
      favicon.href = isDarkMode ? 'images/favicon-dark.png' : 'images/favicon.png';
    }
  }

  // Check initial color scheme
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  updateFavicon(darkModeMediaQuery.matches);

  // Listen for changes
  darkModeMediaQuery.addEventListener('change', function(e) {
    updateFavicon(e.matches);
  });

});
