// Scroll Animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Particles.js Config
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00acc1" },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00acc1",
      opacity: 0.4,
      width: 1
    }
  }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
// Already existing particlesJS, counter animation, scroll animations

// Generate 3 orbs dynamically inside DNA section
const dnaSection = document.querySelector('.dna-section');
for (let i = 0; i < 3; i++) {
  const orb = document.createElement('div');
  orb.classList.add('orb');
  dnaSection.appendChild(orb);
}
// Create Globe
const Globe = window.Globe;
const globe = Globe()
  (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true)
    .atmosphereColor('#00ffe5')
    .atmosphereAltitude(0.2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('globeViz').appendChild(renderer.domElement);
