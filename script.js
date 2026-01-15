const words = ["Developer", "Data", "Design"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetween = 1000;

function typeEffect() {
  const typingElement = document.querySelector(".typing-effect");
  const currentWord = words[wordIndex];

  if (!isDeleting && charIndex <= currentWord.length) {
    typingElement.textContent = currentWord.substring(0, charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    typingElement.textContent = currentWord.substring(0, charIndex);
    charIndex--;
    setTimeout(typeEffect, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? deletingSpeed : pauseBetween);
  }
}

const navLinks = document.querySelectorAll(".navbar a");
const sections = {
  home: document.querySelector(".home"),
  about: document.querySelector(".about"),
  portfolio: document.querySelector(".portfolio"),
  contact: document.querySelector(".contact"),
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const target = link.textContent.toLowerCase();

    Object.values(sections).forEach((sec) => {
      if (sec) sec.style.display = "none";
    });

    if (sections[target]) {
      sections[target].style.display = "flex";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (sections.home) sections.home.style.display = "flex";
  if (sections.about) sections.about.style.display = "none";
  if (sections.portfolio) sections.portfolio.style.display = "none";
  if (sections.contact) sections.contact.style.display = "none";
  setTimeout(typeEffect, 1500);
});