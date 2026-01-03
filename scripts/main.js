// =================================================
// NOMADS ON WHEELS - MAIN JAVASCRIPT
// Interactive functionality and enhancements
// =================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Nomads on Wheels - Site Loaded');
    
    // Initialize all interactive features
    initSmoothScrolling();
    initFormValidation();
    initNavbarBehavior();
    
});

// ===============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ===============================================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===============================================
// NAVBAR SCROLL BEHAVIOR
// ===============================================
function initNavbarBehavior() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.backgroundColor = '';
            link.style.color = '';
            
            if (link.getAttribute('href') === `#${current}`) {
                link.style.backgroundColor = 'rgba(245, 239, 225, 0.2)';
                link.style.color = '#E8B84C';
            }
        });
    });
}

// ===============================================
// CONTACT FORM VALIDATION & SUBMISSION
// ===============================================
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const journey = document.getElementById('journey').value;
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Success message (in production, this would submit to a server)
            alert(`Thank you, ${name}! We've received your inquiry and will get back to you soon.`);
            
            // Reset form
            form.reset();
            
            // TODO: Implement actual form submission to backend
            console.log('Form data:', { name, email, journey, message });
        });
    }
}

// ===============================================
// JOURNEY CARD INTERACTIONS
// ===============================================
function initCardInteractions() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const button = card.querySelector('.card-button');
        
        if (button) {
            button.addEventListener('click', function() {
                const journeyType = this.closest('.card').querySelector('h3').textContent;
                console.log(`Learn more about: ${journeyType}`);
                
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = contactSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Pre-select journey type in form
                    const journeySelect = document.getElementById('journey');
                    if (journeySelect) {
                        if (journeyType.includes('Safari')) {
                            journeySelect.value = 'safari';
                        } else if (journeyType.includes('Cultural')) {
                            journeySelect.value = 'cultural';
                        } else if (journeyType.includes('Off-Road')) {
                            journeySelect.value = 'offroad';
                        }
                    }
                }
            });
        }
    });
}

// Initialize card interactions after DOM is loaded
document.addEventListener('DOMContentLoaded', initCardInteractions);

// ===============================================
// VIDEO FALLBACK FOR HERO SECTION
// ===============================================
function initVideoFallback() {
    const video = document.querySelector('.hero-video video');
    
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video failed to load, using poster image');
            this.style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', initVideoFallback);

// ===============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===============================================
function initScrollAnimations() {
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
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.card, .philosophy-text, .philosophy-image');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
