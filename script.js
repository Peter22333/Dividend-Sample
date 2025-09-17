document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('open');

    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('open')) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
    } else {
    spans[0].style.transform = "rotate(0)";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "rotate(0)";
    }
});
});

function copyAddress() {
const address = "CJGDg9WCpKBC8EBLwsBt59Rwp95dr4x2irLYook3pump";
navigator.clipboard.writeText(address);
alert("Contract address copied!");
}
