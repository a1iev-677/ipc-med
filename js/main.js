document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const themeIcons = document.querySelectorAll('.theme-icon');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcons(savedTheme);
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
        }
    }

    // Add click event to all theme toggle buttons
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons(newTheme);
            body.classList.toggle('dark-theme');
        });
    });

    function updateThemeIcons(theme) {
        themeIcons.forEach(icon => {
            if (icon.classList.contains('sun-icon')) {
                icon.style.display = theme === 'dark' ? 'block' : 'none';
            }
            if (icon.classList.contains('moon-icon')) {
                icon.style.display = theme === 'dark' ? 'none' : 'block';
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
