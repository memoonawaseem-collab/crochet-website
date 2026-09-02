// Smooth scrolling for navigation links
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

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show success message
    alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.pattern-card, .project-card, .tutorial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Pattern buttons interaction
document.querySelectorAll('.pattern-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const patternName = this.parentElement.querySelector('h3').textContent;
        alert(`You've selected the ${patternName} pattern!\n\nIn a full application, this would show detailed pattern instructions, materials needed, difficulty level, and step-by-step guides.`);
    });
});

// Tutorial buttons interaction
document.querySelectorAll('.video-placeholder').forEach(video => {
    video.addEventListener('click', function() {
        const tutorialName = this.parentElement.querySelector('h3').textContent;
        alert(`Playing: ${tutorialName}\n\nIn a full application, this would open a video player with the tutorial content.`);
    });
});

// Mobile menu toggle (for future implementation)
let mobileMenuOpen = false;

// Add smooth page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

console.log('CrochetCraft website loaded successfully!');
