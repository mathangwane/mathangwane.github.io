
window.onload = function () {

    const NAVLINKS = document.querySelectorAll('.nav-link');
    const HAMBURGER = document.querySelector('.hamburger');
    const HAMBURGER_TEXT = document.querySelector('.hamburger i');
    const PLAYSTORE_URL = '#';
    const PROMR_URL = 'https://www.youtube.com/mathangwane';
    const NAVBAR = document.querySelector('.navbar');

    window.onresize = function () {
        if (window.innerWidth > 500) {
            if (NAVLINKS[0].classList.contains('active')) {
                NAVLINKS.forEach((element) => {
                    element.classList.remove('active');
                });
                HAMBURGER_TEXT.innerHTML = 'menu';
            }
        }
    }

    window.onscroll = function() {
        // Check Scroll Y and increase nabar shadow
        if (window.scrollY > 0) {
            NAVBAR.classList.add('navbar-scroll');
        } else {
            NAVBAR.classList.remove('navbar-scroll');
        }
    }

    // Handle Menu Click
    HAMBURGER.onclick = function () {

        if (NAVLINKS[0].classList.contains('active')) {
            // Menu is visible
            NAVLINKS.forEach((element) => {
                element.classList.remove('active');
            })
            HAMBURGER_TEXT.innerHTML = 'menu';
        } else {
            // Menu is not visible
            NAVLINKS.forEach((element) => {
                element.classList.add('active');
            })
            HAMBURGER_TEXT.innerHTML = 'close';
        }
    }

    // Handle Download Btn Click
    var downloadBtn = document.querySelector('.download-btn');
    downloadBtn.onclick = function() {
        window.open(PLAYSTORE_URL,'_blank');
    }

    // Handle Promo Btn Click
    var promoBtn = document.querySelector('.promo-btn');
    promoBtn.onclick = function() {
        window.open(PROMR_URL);
    }

    //Handle Clicks on Project Cards
    const PROJECT_URLS = [
        './freshspace',
        'https://www.mediafire.com/folder/x7wzj3os6asaw/',
        './calculator',
        './clock',
        '#',
        '#'
    ];

    const projectCards = document.querySelectorAll('.project');
     
    for(let i = 0; i < projectCards.length; i++) {
        projectCards[i].addEventListener("click",()=>{
            window.open(PROJECT_URLS[i]);
        })
    }

    // Add Click function on Navbar
    NAVLINKS.forEach((link) => {
        link.onclick = () => {
            if(NAVLINKS[0].classList.contains('active')) {
                HAMBURGER.click();
            }
        }
    });


    // Add Click function to footer Icons
    const FOOTER_LINKS = document.querySelectorAll('.footer-link');

    const footerLinks = [
        'https://www.youtube.com/mathangwane',
        'https://facebook.com/smathangwane',
        'https://t.me/mathieboy'
    ]

    for(let i = 0; i < FOOTER_LINKS.length; i++) {
        FOOTER_LINKS[i].onclick = () => {
            window.open(footerLinks[i]);
        }
    }
 
}