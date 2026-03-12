// TYPING EFFECT
const roles = [
  "Senior Software Engineer 💻",
  "Java Software Developer 🌐",
  "System Analyst ⚙️"
  "Based in Toronto 🇨🇦",
  "Looking for Opportunities 🚀"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function type() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();


// FADE IN ON SCROLL
const sections = document.querySelectorAll('section:not(#hero)');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));


// ACTIVE NAV HIGHLIGHT
const navLinks = document.querySelectorAll('nav ul a');
const allSections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  allSections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});