/* ----- Nav animáció ----- */
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

// Az aktív link beállítása az oldal betöltésekor az URL alapján
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    list.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active');
        }
    });
});

list.forEach((item) =>
item.addEventListener('click', activeLink));

/* ----- CV h4 tagre kattintva lenyílik -----*/
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.box .text > h4');
    headings.forEach(h => {
        const parent = h.parentElement;

        h.setAttribute('role', 'button');
        h.setAttribute('tabindex', '0');

        // csukva kezd
        if (!parent.classList.contains('collapsed')) parent.classList.add('collapsed');
        h.setAttribute('aria-expanded', 'false');

        const toggle = () => {
            parent.classList.toggle('collapsed');
            const expanded = !parent.classList.contains('collapsed');
            h.setAttribute('aria-expanded', String(expanded));
        };

        h.addEventListener('click', toggle);
        h.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
    });

    /* ----- Szekció toggle (Tanulmányok, Munkatapasztalat) ----- */
    document.querySelectorAll('.section-toggle').forEach(btn => {
        const section = btn.closest('.work, .studies');
        if (!section) return;

        const toggleAll = () => {
            const isCollapsed = btn.classList.contains('collapsed');
            const textDivs = section.querySelectorAll('.box .text');
            const h4s = section.querySelectorAll('.box .text > h4');

            if (isCollapsed) {
                btn.classList.remove('collapsed');
                btn.setAttribute('aria-expanded', 'true');
                textDivs.forEach(t => t.classList.remove('collapsed'));
                h4s.forEach(h => h.setAttribute('aria-expanded', 'true'));
            } else {
                btn.classList.add('collapsed');
                btn.setAttribute('aria-expanded', 'false');
                textDivs.forEach(t => t.classList.add('collapsed'));
                h4s.forEach(h => h.setAttribute('aria-expanded', 'false'));
            }
        };

        btn.addEventListener('click', toggleAll);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAll(); }
        });
    });
});