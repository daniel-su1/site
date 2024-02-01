let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the element is in viewport
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translate(0, 0)";
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



let currentPage = 1;
  const projectsPerPage = 4;
  const projects = document.querySelectorAll('.projects-rect');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  function showProjectsNoAnimate(page) {
    const start = (page - 1) * projectsPerPage;
    const end = page * projectsPerPage;
    projects.forEach((project, index) => {
      if (index >= start && index < end) {
        project.style.display = 'flex';
      } else {
        project.style.display = 'none';
        project.style.opacity = '0';
      }
    });
    changeButtonOpacity();
  }
  function showProjects(page) {
    const start = (page - 1) * projectsPerPage;
    const end = page * projectsPerPage;

    // Fade out visible projects
    projects.forEach(project => {
        if (project.style.display !== 'none') {
            project.style.opacity = '0';
        }
    });
    changeButtonOpacity();
    // After fade out transition, hide all and then show the relevant projects
    setTimeout(() => {
        projects.forEach((project, index) => {
            if (index >= start && index < end) {
                project.style.display = 'flex';
                // Delay the fade in to provide the fade out effect time to complete
                setTimeout(() => {
                  project.style.opacity = '1';
                  
                }, 200);
            } else {
                project.style.display = 'none';
                if(currentPage === 1){
                  prevButton.style.visibility = 'hidden';
                  nextButton.style.visibility = 'visible';
                }
                else if(currentPage === totalPages){
                  prevButton.style.visibility = 'visible';
                  nextButton.style.visibility = 'hidden';
                }
                else {
                  prevButton.style.visibility = 'visible';
                  nextButton.style.visibility = 'visible';
                }
            }
        });
    }, 300); // should be close or equal to the transition time for smooth effect
    changeButtonOpacity();
}


function changeButtonOpacity() {
  if (currentPage === 1) {
    prevButton.style.opacity = '0';
    nextButton.style.opacity = '1';
  }
  else if (currentPage === totalPages) {
    prevButton.style.opacity = '1';
    nextButton.style.opacity = '0';
  }
  else {
    prevButton.style.opacity = '1';
    nextButton.style.opacity = '1';
  }
}

  function navigateProjects(direction) {
    if (direction === 'next' && currentPage < totalPages) {
      currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
      currentPage--;
    }
    showProjects(currentPage);
  }
  document.addEventListener('DOMContentLoaded', function() {
    showProjectsNoAnimate(currentPage);
    prevButton.style.transition = 'opacity 0.2s, color 0.3s';
    nextButton.style.transition = 'opacity 0.2s, color 0.3s';
    if(currentPage === 1){
      prevButton.style.visibility = 'hidden';
      nextButton.style.visibility = 'visible';
    }
    else if(currentPage === totalPages){
      prevButton.style.visibility = 'visible';
      nextButton.style.visibility = 'hidden';
    }
    else {
      prevButton.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';
    }

  });
