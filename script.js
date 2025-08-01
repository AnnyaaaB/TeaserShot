
const launchDate = new Date("2025-08-20T00:00:00Z").getTime();
const updateTimer = () => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(updateTimer, 1000);

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});




// modal functionality for "Why AntrAI?" button
const whyBtn = document.getElementById('why-btn');
const whyModal = document.getElementById('why-modal');
const closeModal = document.getElementById('modal-close');

whyBtn.addEventListener('click', () => {
  whyModal.style.display = 'flex';
  whyModal.setAttribute('aria-hidden', 'false');
});

closeModal.addEventListener('click', () => {
  whyModal.style.display = 'none';
  whyModal.setAttribute('aria-hidden', 'true');
});

// Closin' modal when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === whyModal) {
    whyModal.style.display = 'none';
    whyModal.setAttribute('aria-hidden', 'true');
  }
});
