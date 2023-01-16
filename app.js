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
  console.log("scroll " + window.scrollY);
  console.log("height "+ window.innerHeight);
  for (let i = 0; i != elements.length; i++) {

    if(i>=4 && i<=17){
      await changeElement(elements[i], 50);
    }
    else{
      await changeElement(elements[i], 150);
    }
  }
}

function getTopVisibleElement(){
  for (let i =0; i!= elements.length; i++){
    if(elements[i].getBoundingClientRect().top <= windowHeight && elements[i].getBoundingClientRect().top > 0){
      break;
    }
    return i;
  }
}

function changeParticlesOpacity(){
  let opacityLayer = document.querySelector('#opacity-layer')
  if(window.scrollY>450){
    opacityLayer.style.opacity = (window.scrollY-450)/((window.innerHeight*2.5)/10)
  }
  else{
    opacityLayer.style.opacity = 0;

  }

}


document.addEventListener('scroll', changeClass);
document.addEventListener('scroll', changeParticlesOpacity)
changeClass();

