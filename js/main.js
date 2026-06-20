/* ===== MOBILE NAV TOGGLE ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show'));
if (navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show'));

// close menu when a link is clicked
document.querySelectorAll('.nav__link').forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('show'))
);

/* ===== NAVBAR SHADOW ON SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== TYPING EFFECT ===== */
const typingEl = document.getElementById('typing');
const roles = [
    'Network Engineer',
    'CSE Student',
    'Cybersecurity Enthusiast',
    'Network Troubleshooter'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex--);
    } else {
        typingEl.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 110;

    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800;               // pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }
    setTimeout(type, speed);
}
if (typingEl) type();

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 90;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

/* ===== SCROLL TO TOP BUTTON ===== */
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('show', window.scrollY > 400);
});

/* ===== REVEAL ON SCROLL ===== */
const revealEls = document.querySelectorAll(
    '.about__box, .skills__card, .project__card, .cert__card, .timeline__item, .achievement__card, .contact__info, .contact__form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* ===== CONTACT FORM (mailto fallback) ===== */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            status.textContent = '> Please fill in all fields.';
            status.style.color = '#ff5555';
            return;
        }

        // Opens the user's email client pre-filled
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
        window.location.href = `mailto:ekhtiarhossain10@gmail.com?subject=${subject}&body=${body}`;

        status.textContent = '> Opening your email app...';
        status.style.color = 'var(--accent)';
        form.reset();
    });
}

/* ===== FOOTER YEAR ===== */
document.getElementById('year').textContent = new Date().getFullYear();
