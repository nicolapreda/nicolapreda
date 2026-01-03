// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    const body = document.body;
    
    const menuContent = document.getElementById('menu-content');
    
    window.toggleMenu = function() {
        const isClosed = menu.classList.contains('invisible');

        if (isClosed) {
            // OPEN MENU
            // 1. Menu Container fade in
            menu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
            menu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
            
            // 2. Content slide up (reset translation)
            if (menuContent) {
                menuContent.classList.remove('translate-y-10');
                menuContent.classList.add('translate-y-0');
            }

            // 3. Hamburger Animation (Open fades out/rotates, Close fades in/rotates)
            iconOpen.classList.remove('opacity-100', 'rotate-0', 'scale-100');
            iconOpen.classList.add('opacity-0', 'rotate-90', 'scale-50');

            iconClose.classList.remove('opacity-0', '-rotate-90', 'scale-50');
            iconClose.classList.add('opacity-100', 'rotate-0', 'scale-100');

            // 4. Lock body scroll
            body.style.overflow = 'hidden';

        } else {
            // CLOSE MENU
            // 1. Menu Container fade out
            menu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
            menu.classList.add('opacity-0', 'invisible', 'pointer-events-none');

            // 2. Content slide down
            if (menuContent) {
                menuContent.classList.remove('translate-y-0');
                menuContent.classList.add('translate-y-10');
            }

            // 3. Hamburger Animation (Reverse)
            iconOpen.classList.remove('opacity-0', 'rotate-90', 'scale-50');
            iconOpen.classList.add('opacity-100', 'rotate-0', 'scale-100');

            iconClose.classList.remove('opacity-100', 'rotate-0', 'scale-100');
            iconClose.classList.add('opacity-0', '-rotate-90', 'scale-50');

            // 4. Restore body scroll
            body.style.overflow = 'auto';
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
            if (!menu.classList.contains('invisible')) {
                toggleMenu();
            }
        });
    });
    
    // Chiudi menu con tasto ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !menu.classList.contains('invisible')) {
            toggleMenu();
        }
    });
});
