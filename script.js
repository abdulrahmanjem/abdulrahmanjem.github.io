// تبديل الوضع (Dark/Light)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// تبديل اللغة
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    const isRtl = document.documentElement.dir === 'rtl';
    document.documentElement.dir = isRtl ? 'ltr' : 'rtl';
    document.documentElement.lang = isRtl ? 'en' : 'ar';
    
    // تبديل النصوص المترجمة
    document.querySelectorAll('[data-en]').forEach(el => {
        const temp = el.innerText;
        el.innerText = isRtl ? el.getAttribute('data-en') : el.getAttribute('data-ar');
        el.setAttribute('data-en', temp);
    });
});
