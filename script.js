// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize carousel if needed (Bootstrap handles it, but just in case)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#freelanceCarousel');
    if (carousel) {
        // Bootstrap carousel initialization
    }
});
