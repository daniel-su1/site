tsParticles.load("particles", {
    fpsLimit: 60,
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    interactivity: {
      events: {
        onClick: {
          // this handles the mouse click event
          enable: true,
          mode: "repulse", // this adds particles
        },
        onHover: {
          // this handles the mouse hover event
          enable: true,
          mode: "grab", // this make particles move away from the mouse
        },
      },
      modes: {
        grab: {
          distance: 213,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        repulse: {
          distance: 318, // the distance of the particles from the mouse
          duration: 24,
          factor: 131,
          speed: 2,
          maxSpeed: 40,
          easing: "ease-out-expo"
        },
      },
    },
    particles: {
      links: {
        enable: true, // this enables links between particles
        opacity: 0.3,
        distance: 200,
      },
      move: {
        enable: true, // this makes particles move
        speed: { min: 1, max: 3 }, // this is the speed of the particles
      },
      opacity: {
        value: { min: 0.1, max: 0.4 }, // this sets the opacity of the particles
      },
      size: {
        value: { min: 1, max: 3 }, // this sets the size of the particles
      },
    }
  });
  