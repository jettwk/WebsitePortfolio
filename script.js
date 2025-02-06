
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-to-top");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  console.log("scrolling", window.scrollY);
  if (window.scrollY > 100) { 
    console.log("add show class");
    scrollUp.classList.add("show");
  } else {
    console.log("reomve show class");
    scrollUp.classList.remove("show");
  }
});


// Nav hamburger selections
const burger  = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener( "click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Add event listeners on skill cards to add class for flipping on back
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', () => {
    card.classList.add('flip');
    setTimeout(() => {
      card.classList.remove('flip');
    }, 1500); // flip back after 1.5 secs
  })
})



// typing script
const typingElement = document.getElementById('typing');
const phrases = ['a software engineer.', 'a powerful programmer.', 'a web developer.', 'a game developer.','a freelancer.', 'an entrepreneur.','always learning.','Jett Kiker.'];;
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let typingSpeed = 200;

function type() {
  if (isDeleting && letterIndex > 0) {
    currentPhrase.pop();
    letterIndex--;
    typingSpeed = 200;
  } else {
    isDeleting = false;
    typingSpeed = 1000;
  }
  if (!isDeleting && letterIndex === phrases[phraseIndex].length) {
    typingSpeed = 2000; // Pause at the end of the phrase
    isDeleting = true;
  }
  if (!isDeleting && letterIndex < phrases[phraseIndex].length) {
    currentPhrase.push(phrases[phraseIndex].charAt(letterIndex));
    letterIndex++;
    typingSpeed = 200;
  }
  
  typingElement.textContent = currentPhrase.join('');
  
  if (isDeleting && letterIndex === 0) {
    currentPhrase = [];
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 200;
  }
  setTimeout(type, typingSpeed);
}
window.addEventListener('load', type);

// certification button
document.getElementById('certifications-btn').addEventListener('click',() => {
  window.location.href = 'certs.html';
})

// CERTIFICATION PAGE
function openPDF(url) {
  window.open(url, '_blank');
}

function openModal(imageUrl) {
  // Use the modal logic here
  document.getElementById('certImg').src = imageUrl;
  document.getElementById('certModal').style.display = 'block';
}