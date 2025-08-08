// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    const body = document.body;
    
    function toggleMenu() {
        if (menu.classList.contains('hidden')) {
            // Apri menu
            menu.classList.remove('hidden');
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
            body.style.overflow = 'hidden'; // Blocca scroll del body
        } else {
            // Chiudi menu
            menu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            body.style.overflow = 'auto'; // Ripristina scroll del body
        }
    }
    
    // Event listener per il bottone hamburger
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
    
    // Chiudi menu quando si clicca su un link
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!menu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });
    
    // Chiudi menu con tasto ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
});
