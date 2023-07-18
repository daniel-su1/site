let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the element is in viewport
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // Once the element is in view, there's no need to keep observing it
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});

// target all elements to observe
let elements = document.querySelectorAll('.fade-in-element');

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});
