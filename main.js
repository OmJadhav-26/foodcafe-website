let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    origin: 'left',
    distance: '800px',
    duration: 50,
    reset: true
});
 
 
sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box, .footer-box`, {
    interval: 200
})
