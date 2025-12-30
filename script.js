// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.about, .contact').forEach(section => {
    observer.observe(section);
});

// Add parallax effect to hero decoration
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroDecoration = document.querySelector('.hero-decoration');
    if (heroDecoration) {
        heroDecoration.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect sounds (optional - can be removed if not needed)
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Console log for developers
console.log('%c👋 Olá, Developer!', 'color: #104447; font-size: 20px; font-weight: bold;');
console.log('%cSite desenvolvido para Pedro Santos - Consultoria em Mensageria', 'color: #58ADB2; font-size: 14px;');

// Add loading class removal after page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
