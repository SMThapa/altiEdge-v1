const parallax = document.querySelectorAll('.parallax-image');
const speed = 0.45;
// Ensure initial top = 0
parallax.forEach(el => el.style.top = '0px');
window.addEventListener('scroll', () => {
  parallax.forEach((el) => {
    const dist = window.scrollY - el.offsetTop;
    el.style.top = (dist * speed) + 'px';
  });
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 3.3,
  spaceBetween: 30,
  loop: false,  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // thumb can be dragged    
    snapOnRelease: false // <--- Prevents thumb snap!
  },
});
// Add custom onclick functions to the navigation buttons
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
// Add onclick function to "Prev" button
prevButton.onclick = function() {
  console.log('Previous button clicked!');
  swiper.slidePrev(); // Swiper API to go to the previous slide
};
// Add onclick function to "Next" button
nextButton.onclick = function() {
  console.log('Next button clicked!');
  swiper.slideNext(); // Swiper API to go to the next slide
};


let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    nav.style.top = '-80px'; // Hide nav (matches nav height)
  } else {
    // Scrolling up
    nav.style.top = '0';
  }
  lastScrollY = window.scrollY;
});