function applyTheme(theme) {
    document.body.style.setProperty('--bg-color', theme === 'dark' ? '#1e1e1e' : 'white');
    document.body.style.setProperty('--text-color', theme === 'dark' ? 'white' : 'black');

    let themeButtonImage = document.querySelector('.theme-change-button-wrapper img');
    if (theme === 'dark') {
        themeButtonImage.src = 'images/moon.png';
        themeButtonImage.alt = 'Switch to light theme';
    } else {
        themeButtonImage.src = 'images/sun.png';
        themeButtonImage.alt = 'Switch to dark theme';
    }
}

function toggleTheme() {
    let currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

function applyLanguage(lang) {
    let message = document.getElementById('message');
    let langButton = document.getElementById('language-button');
    if (lang === 'en') {
        message.textContent = 'Project website is under development';
        langButton.textContent = 'ru';
    } else {
        message.textContent = 'Сайт проекта находится в разработке';
        langButton.textContent = 'en';
    }
}

function toggleLanguage() {
    let currentLang = localStorage.getItem('language') === 'ru' ? 'en' : 'ru';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('theme') || 'light';
    let savedLanguage = localStorage.getItem('language') || 'ru';
    applyTheme(savedTheme);
    applyLanguage(savedLanguage);
});
