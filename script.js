function searchSite() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
let allSections = document.querySelectorAll("section");

function revealSections() {
    let triggerBottom = window.innerHeight - 100;

    allSections.forEach(sec => {
        let sectionTop = sec.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

// page load pe bhi run ho
revealSections();
function toggleMenu() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
}