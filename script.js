/* =========================
   PORTFOLIO JAVASCRIPT
========================= */

console.log("Kishore G Portfolio loaded successfully!");



/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* =========================
   BACK TO TOP
========================= */

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================
   SCROLL REVEAL
========================= */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .timeline-item, .about-card, .education-card"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});