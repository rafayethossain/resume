// Smooth scrolling for navigation links
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reading Progress Bar
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";

    // Update active navigation link
    updateActiveNavLink();
}

// Section Animations (Fade-in/Slide-up)
const sections = document.querySelectorAll('.section-animated');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Update Active Navigation Link
function updateActiveNavLink() {
    const scrollPos = window.scrollY + 100; // Add offset for better active state

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.main-nav a[href="#${section.id}"]`).classList.add('active');
        }
    });
}

// Initial call to set active link and progress bar on load
document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar();
    updateActiveNavLink();
});

// Print Button Functionality
document.getElementById('printButton').addEventListener('click', () => {
    window.print();
});
