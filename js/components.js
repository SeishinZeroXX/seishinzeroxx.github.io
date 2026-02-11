/* ----- Header és Footer komponensek betöltése ----- */
const headerHTML = `
<header>
    <div class="navigation">
        <ul>
            <li class="list">
                <a href="index.html">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="text">Főoldal</span>
                </a>
            </li>
            <li class="list">
                <a href="about.html">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <span class="text">Magamról</span>
                </a>
            </li>
            <li class="list">
                <a href="codes.html">
                    <span class="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                    <span class="text">Büszkeségeim</span>
                </a>
            </li>
            <li class="list">
                <a href="gallery.html">
                    <span class="icon"><ion-icon name="images-outline"></ion-icon></span>
                    <span class="text">Galéria</span>
                </a>
            </li>
            <li class="list">
                <a href="contact.html">
                    <span class="icon"><ion-icon name="at-outline"></ion-icon></span>
                    <span class="text">Kapcsolat</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</header>
`;

const footerHTML = `
<div class="footer">
    <p>Ha esetleg akad bármi egyéb, amit meg szeretnél tudni rólam, ne habozz kapcsolatba lépni velem az elérhetőségeim egyikén, vagy a CV ikonra kattintva letölteni azt.</p>
    <ul class="ftr">
        <li><a href="tel:+3630-433-3404"><ion-icon name="call-outline"></ion-icon></a></li>
        <li><a href="mailto:ocsko.bianka@gmail.com"><ion-icon name="at-outline"></ion-icon></a></li>
        <li><a href="https://www.facebook.com/bianka28466/"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href="https://www.linkedin.com/in/bianka-ocskó-370330223/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href="cv.html" target="blank"><ion-icon name="document-text-outline"></ion-icon></a></li>
    </ul>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Header betöltése
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    
    // Footer betöltése
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Az aktív link beállítása az aktuális oldal alapján
    setActiveNav();
});

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const listItems = document.querySelectorAll('.list');
    listItems.forEach(item => {
        const link = item.querySelector('a')?.getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

