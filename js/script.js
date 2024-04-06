function scrollVH() {
    var vh = window.innerHeight * 0.01;
    window.scrollTo(0, 100 * vh);
}

function unfoldMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('unfolded');
}

