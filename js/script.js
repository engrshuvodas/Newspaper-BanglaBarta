/* ============================================
   BANGLA BARTA - Interactive JavaScript
   ============================================ */

'use strict';

/* ============================================
   1. DOCUMENT READY
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initScrollEffects();
  initBackToTop();
  initSmoothScroll();
  initFormValidation();
  initButtons();
  console.log('Bangla Barta JS initialized');
});

/* ============================================
   2. MOBILE MENU TOGGLE
   ============================================ */

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-left');
  const mobileMenu = document.querySelector('.MobileMenu');
  const menuItems = document.querySelectorAll('.MobileMenu a');

  if (!menuToggle) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mobileMenu) {
      mobileMenu.classList.toggle('hide');
      menuToggle.classList.toggle('active');
    }
  });

  // Close menu when clicking on a link
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.add('hide');
      }
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && !mobileMenu.contains(e.target) && 
        menuToggle && !menuToggle.contains(e.target)) {
      mobileMenu.classList.add('hide');
      menuToggle.classList.remove('active');
    }
  });
}

/* ============================================
   3. SCROLL EFFECTS
   ============================================ */

function initScrollEffects() {
  // Add fade-in effect to cards on scroll
  const cards = document.querySelectorAll('.card, .article-card, .DTop2List, .DNewyorkList');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach(card => {
      observer.observe(card);
    });
  }

  // Parallax effect on hero image (subtle)
  window.addEventListener('scroll', function() {
    const heroImages = document.querySelectorAll('.article-image');
    heroImages.forEach(img => {
      const scrollPosition = window.scrollY;
      const elementPosition = img.getBoundingClientRect().top;
      
      if (elementPosition > -500 && elementPosition < window.innerHeight) {
        const offset = (elementPosition - window.innerHeight / 2) * 0.02;
        img.style.transform = `translateY(${offset}px) scale(1.01)`;
      }
    });
  });
}

/* ============================================
   4. BACK TO TOP BUTTON
   ============================================ */

function initBackToTop() {
  const backToTop = document.getElementById('back_to_top');
  
  if (!backToTop) return;

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // Scroll to top smoothly
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ============================================
   5. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================
   6. FORM VALIDATION
   ============================================ */

function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    const error = validateInput(input);
    if (error) {
      isValid = false;
      showError(input, error);
    } else {
      clearError(input);
    }
  });

  return isValid;
}

function validateInput(input) {
  const value = input.value.trim();
  const type = input.type;
  const name = input.name;
  const required = input.hasAttribute('required');

  // Check if required
  if (required && !value) {
    return `${name || 'This field'} is required.`;
  }

  // Email validation
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address.';
    }
  }

  // Phone validation
  if (type === 'tel' && value) {
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      return 'Please enter a valid phone number.';
    }
  }

  // URL validation
  if (type === 'url' && value) {
    try {
      new URL(value);
    } catch {
      return 'Please enter a valid URL.';
    }
  }

  // Min length
  const minLength = input.getAttribute('minlength');
  if (minLength && value.length < minLength) {
    return `Minimum ${minLength} characters required.`;
  }

  // Max length
  const maxLength = input.getAttribute('maxlength');
  if (maxLength && value.length > maxLength) {
    return `Maximum ${maxLength} characters allowed.`;
  }

  return null;
}

function showError(input, message) {
  clearError(input);
  input.classList.add('form-error');

  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

function clearError(input) {
  input.classList.remove('form-error');
  const error = input.parentNode.querySelector('.error-message');
  if (error) {
    error.remove();
  }
}

/* ============================================
   7. BUTTON INTERACTIONS
   ============================================ */

function initButtons() {
  // Add ripple effect to buttons on click
  const buttons = document.querySelectorAll('.btn, button');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = createRipple(e, this);
      if (ripple) {
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      }
    });
  });

  // Prevent multiple form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      form.addEventListener('submit', function() {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      });
    }
  });
}

function createRipple(event, element) {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');

  // Only add ripple effect if button has relative positioning
  if (window.getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
  }

  return ripple;
}

/* ============================================
   8. SEARCH FUNCTIONALITY
   ============================================ */

function initSearch() {
  const searchToggle = document.querySelector('.menu-search a');
  const searchBlock = document.querySelector('.search_block');
  const closeSearch = document.querySelector('.close-search');
  const searchInput = searchBlock?.querySelector('input');

  if (!searchToggle || !searchBlock) return;

  // Toggle search
  searchToggle.addEventListener('click', function(e) {
    e.preventDefault();
    searchBlock.classList.toggle('show');
    if (searchBlock.classList.contains('show')) {
      searchInput?.focus();
    }
  });

  // Close search
  if (closeSearch) {
    closeSearch.addEventListener('click', function(e) {
      e.preventDefault();
      searchBlock.classList.remove('show');
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchBlock.classList.contains('show')) {
      searchBlock.classList.remove('show');
    }
  });
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}

/* ============================================
   9. STICKY HEADER ON SCROLL
   ============================================ */

function initStickyHeader() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  if (!header) return;

  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;

    // Add shadow to header when scrolled
    if (scrollTop > 10) {
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
    }

    lastScrollTop = scrollTop;
  });
}

// Initialize sticky header
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStickyHeader);
} else {
  initStickyHeader();
}

/* ============================================
   10. LAZY LOADING IMAGES (if supported)
   ============================================ */

function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

// Initialize lazy loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoading);
} else {
  initLazyLoading();
}

/* ============================================
   11. RESPONSIVE NAVBAR COLLAPSE
   ============================================ */

function initResponsiveNav() {
  const navToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Close navbar when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse?.classList.contains('show')) {
        navToggler?.click();
      }
    });
  });
}

// Initialize responsive nav
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initResponsiveNav);
} else {
  initResponsiveNav();
}

/* ============================================
   12. KEYBOARD ACCESSIBILITY
   ============================================ */

document.addEventListener('keydown', function(e) {
  // ESC to close modals
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.btn-close');
      if (closeBtn) closeBtn.click();
    });
  }

  // Tab key management for focus trap
  if (e.key === 'Tab') {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains('last-tabbable')) {
      e.preventDefault();
      const firstFocusable = document.querySelector('button, [href], input, select, textarea, [tabindex]');
      if (firstFocusable) firstFocusable.focus();
    }
  }
});

/* ============================================
   13. UTILITY FUNCTIONS
   ============================================ */

// Get query parameter value
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Check if device is mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add animation class and remove after completion
function animateElement(element, animationClass, duration = 500) {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
}

// Debounce function for scroll/resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   14. LOG INITIALIZATION
   ============================================ */

console.log('%c🚀 Bangla Barta News Portal', 'color: #366129; font-size: 18px; font-weight: bold;');
console.log('%cModern • Responsive • Interactive', 'color: #009DA6; font-size: 12px;');
