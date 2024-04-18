document.addEventListener('DOMContentLoaded', function() {
    const languageSidebar = document.querySelector('.language-sidebar');
    const languageToggler = document.getElementById('language-toggler');

    if (languageSidebar && languageToggler) {
        languageToggler.addEventListener('click', function(event) {
            event.stopPropagation();
            if (languageSidebar.classList.contains('show')) {
                languageSidebar.classList.remove('show');
            } else {
                languageSidebar.classList.add('show');
            }
        });

        document.body.addEventListener('click', function(event) {
            const target = event.target;
            if (!languageSidebar.contains(target) && target !== languageToggler) {
                languageSidebar.classList.remove('show');
            }
        });
    } else {
        console.error('Elements not found!');
    }
});
