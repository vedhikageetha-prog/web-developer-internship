/* ==========================================
   APPLY NOW BUTTON
========================================== */

function applyNow() {
    document.getElementById("apply").scrollIntoView({
        behavior: "smooth"
    });
}

/* ==========================================
   LEARN MORE BUTTON
========================================== */

function learnMore() {
    document.getElementById("overview").scrollIntoView({
        behavior: "smooth"
    });
}

/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = document.getElementById("typing");

const words = [
    "Learn HTML",
    "Master CSS",
    "Build with JavaScript",
    "Create Responsive Websites",
    "Become a Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

/* ==========================================
   HAMBURGER MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.innerHTML = "☀️";

        } else {

            themeBtn.innerHTML = "🌙";

        }

    });

}

/* ==========================================
   FAQ ACCORDION
========================================== */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", function () {

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

});

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================
   APPLICATION FORM
========================================== */

const form = document.getElementById("internForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const college = document.getElementById("college").value.trim();

        if (name === "" || email === "" || college === "") {

            alert("Please complete all required fields.");

            return;

        }

        alert(
            "🎉 Congratulations!\n\nYour internship application has been submitted successfully!"
        );

        form.reset();

    });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all .8s ease";

    revealObserver.observe(section);

});

/* ==========================================
   SMOOTH NAVIGATION LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    console.log("✅ Web Developer Internship Website Loaded Successfully.");

});