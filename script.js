function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}