// select all elements that have the "fade-in" class
const elements = document.querySelectorAll('.fade-in');

// get the window's current scroll position
const scrollTop = window.scrollY;

// get the window's height
const windowHeight = window.innerHeight;

function changeElement(element, delay) {
  const elementTop = element.getBoundingClientRect().top;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (elementTop <= windowHeight) {
        element.classList.add('visible');
        element.onanimationend = () => { element.classList.remove('hidden'); }
      }
      resolve();
    }, delay)

  })
}

async function changeClass() {
  for (let i = 0; i != elements.length; i++) {

    if(i>=4 && i<=17){
      await changeElement(elements[i], 50);
    }
    else{
      await changeElement(elements[i], 150);
    }
  }

  // get the element's distance from the top of the page




  // loop through each element with the "fade-in" class

}

// listen for the scroll event and run the above script whenever the user scrolls





document.addEventListener('scroll', changeClass);
changeClass();

