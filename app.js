// select all elements that have the "fade-in" class
const elements = document.querySelectorAll('.fade-in');

// get the window's current scroll position
const scrollTop = window.scrollY;

// get the window's height
const windowHeight = window.innerHeight;

async function changeClass(){
  elements.forEach(async (element, index) => {
    // set the element's initial opacity to 0

    // get the element's distance from the top of the page
    const elementTop = element.getBoundingClientRect().top;
  
    // if the element is within the window's viewable area, add the "visible" class to the element
    if (elementTop <= windowHeight) {
      element.classList.add('visible');
      document.addEventListener('animationend', () => {
        element.classList.remove('hidden');
      })
    }
    



  });
  // loop through each element with the "fade-in" class
  
}

// listen for the scroll event and run the above script whenever the user scrolls





document.addEventListener('scroll', changeClass);
changeClass();

