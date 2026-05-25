const glow = document.querySelector('.mouse-glow');

window.addEventListener('mousemove', (event) => {

    glow.style.setProperty('--mouse-x', `${event.clientX}px`);
    glow.style.setProperty('--mouse-y', `${event.clientY}px`);
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');


const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -60% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeId = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-links a[href="#${activeId}"]`);
            
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));