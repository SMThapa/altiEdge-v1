const parallax = document.querySelectorAll('.parallax-image');
const speed = 0.35;

// Ensure initial top = 0
parallax.forEach(el => el.style.top = '0px');

window.addEventListener('scroll', () => {
  parallax.forEach((el) => {
    const dist = window.scrollY - el.offsetTop;
    el.style.top = (dist * speed) + 'px';
  });
});