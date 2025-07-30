document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header'); // Получаем шапку

    // Mobile Menu Toggle
    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            nav.classList.toggle('nav--active');
            document.body.style.overflow = nav.classList.contains('nav--active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav--active')) {
                burger.classList.remove('burger--active');
                nav.classList.remove('nav--active');
                document.body.style.overflow = '';
            }
        });
    });

    // --- НОВЫЙ КОД: Show/Hide Header on Scroll ---
    if (header) {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            // Если мобильное меню открыто, ничего не делаем
            if (nav.classList.contains('nav--active')) {
                return;
            }
            
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
                // Скролл вниз: прячем шапку
                header.classList.add('header--hidden');
            } else {
                // Скролл вверх: показываем шапку
                header.classList.remove('header--hidden');
            }

            // Обновляем позицию для следующего события скролла
            lastScrollY = currentScrollY;
        });
    }
    // --- КОНЕЦ НОВОГО КОДА ---


    // Services Tabs
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tabs__button');
        const tabPanes = tabsContainer.querySelectorAll('.tabs__pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;

                // Update buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove('tabs__button--active');
                });
                button.classList.add('tabs__button--active');

                // Update panes
                tabPanes.forEach(pane => {
                    if (pane.id === targetTab) {
                        pane.classList.add('tabs__pane--active');
                    } else {
                        pane.classList.remove('tabs__pane--active');
                    }
                });
            });
        });
    }

});