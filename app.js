// select all elements that have the "fade-in" class
const elements = document.querySelectorAll('.fade-in');

// get the window's current scroll position
const scrollTop = window.pageYOffset;

// get the window's height
const windowHeight = window.innerHeight;

// loop through each element with the "fade-in" class
elements.forEach((element, index) => {
  // set the element's initial opacity to 0

  // get the element's distance from the top of the page
  const elementTop = element.getBoundingClientRect().top;

  // if the element is within the window's viewable area, add the "visible" class to the element
  if (elementTop <= windowHeight) {
    element.classList.add('visible');
  }
});



// listen for the scroll event and run the above script whenever the user scrolls
window.addEventListener('scroll', () => {
  // get the window's current scroll position
  const scrollTop = window.pageYOffset;

  // get the window's height
  const windowHeight = window.innerHeight;

  // loop through each element with the "fade-in" class
  elements.forEach(element => {
    // get the element's distance from the top of the page
    const elementTop = element.getBoundingClientRect().top;

    // if the element is within the window's viewable area, add the "visible" class to the element
    if (elementTop <= windowHeight) {
      element.classList.add('visible');
    }
  });
});
