// Animation when elements enter viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('.animated');
  elements.forEach(el => {
    let bounds = el.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.85) {
      el.classList.add('fade-in');
    }
  });
  // Projects/cards pop-in
  document.querySelectorAll('.project-card').forEach(card => {
    let bounds = card.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.85) {
      card.classList.add('pop-in');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
 });
// Video background responsiveness (for touch devices)
document.querySelector('.video-bg video').addEventListener('touchstart', function() {
  this.play();
});