const lenis = new Lenis({
    lerp: .08, // Default is around 0.1. Increase for more tension (0.2-0.5)
    smoothWheel: true // Enable smooth wheel scrolling
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);