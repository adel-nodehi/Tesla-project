document.addEventListener('DOMContentLoaded', function() {
    const languageSidebar = document.querySelector('.language-sidebar');
    const languageToggler = document.getElementById('language-toggler');

    if (languageSidebar && languageToggler) {
        languageToggler.addEventListener('click', function() {
            if (languageSidebar.classList.contains('show')) {
                languageSidebar.classList.remove('show');
            } else {
                languageSidebar.classList.add('show');
            }
        });
    } else {
        console.error('Elements not found!');
    }
});
