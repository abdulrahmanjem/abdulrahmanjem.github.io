// تبديل الوضع الليلي
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// تبديل اللغة
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const isAr = document.documentElement.dir === 'rtl';
    document.documentElement.dir = isAr ? 'ltr' : 'rtl';
    document.documentElement.lang = isAr ? 'en' : 'ar';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = isAr ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
});
