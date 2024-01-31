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
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  function showProjectsNoAnimate(page) {
    const start = (page - 1) * projectsPerPage;
    const end = page * projectsPerPage;
    projects.forEach((project, index) => {
      if (index >= start && index < end) {
        project.style.display = 'flex';
      } else {
        project.style.display = 'none';
      }
    });
    if(currentPage === 1){
      document.getElementById('prevButton').style.display = 'none';
      document.getElementById('nextButton').style.display = 'block';
    }
    else if(currentPage === totalPages){
      document.getElementById('prevButton').style.display = 'block';
      document.getElementById('nextButton').style.display = 'none';
    }
    else {
      document.getElementById('prevButton').style.display = 'block';
      document.getElementById('nextButton').style.display = 'block';
    }
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

    // After fade out transition, hide all and then show the relevant projects
    setTimeout(() => {
        projects.forEach((project, index) => {
            if (index >= start && index < end) {
                project.style.display = 'flex';
                // Delay the fade in to provide the fade out effect time to complete
                setTimeout(() => project.style.opacity = '1', 100);
            } else {
                project.style.display = 'none';
            }
        });
    }, 300); // should be close or equal to the transition time for smooth effect
    if(currentPage === 1){
      document.getElementById('prevButton').style.display = 'none';
      document.getElementById('nextButton').style.display = 'block';
    }
    else if(currentPage === totalPages){
      document.getElementById('prevButton').style.display = 'block';
      document.getElementById('nextButton').style.display = 'none';
    }
    else {
      document.getElementById('prevButton').style.display = 'block';
      document.getElementById('nextButton').style.display = 'block';
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
  });
