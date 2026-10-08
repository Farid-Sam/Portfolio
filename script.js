const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelectorAll("#menu a");
const sections = document.querySelectorAll("section[id]");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .veille-card"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => observer.observe(card));