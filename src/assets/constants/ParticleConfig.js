const ParticleConfig = {
  particles: {
    number: {
      value: 600,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.04,
    },
    move: {
      speed: 1,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

export default ParticleConfig;
