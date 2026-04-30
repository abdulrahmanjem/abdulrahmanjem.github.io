/**
 * Abdulrahman Shunnar Portfolio - Main Script
 * متخصص في أمن المعلومات ومطور جافا
 */

if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {

        const isDark = htmlElement.classList.toggle('dark');
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    btnText.innerText = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    const serviceID = 'service_0mnao5o';
    const templateID = 'template_qii401w';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnText.innerText = 'Sent Successfully! ✅';
            btn.style.backgroundColor = '#10b981';
            this.reset();
        }, (err) => {
            btnText.innerText = 'Error! ❌';
            btn.style.backgroundColor = '#ef4444';
            alert("فشل الإرسال: " + JSON.stringify(err));
        })
        .finally(() => {
            setTimeout(() => {
                btnText.innerText = 'Send Message →';
                btn.style.backgroundColor = ''; 
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 5000);
        });
});
}
