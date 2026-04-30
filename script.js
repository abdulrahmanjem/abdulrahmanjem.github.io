/**
 * Abdulrahman Shunnar Portfolio - Main Script
 * متخصص في أمن المعلومات ومطور جاوا
 */

// 1. تهيئة أيقونات Lucide فور تحميل الملف
// هذا يضمن تحويل الـ <i> tags إلى أيقونات SVG مرئية
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// 2. تحديد العناصر الأساسية من الواجهة (DOM)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

/**
 * وظيفة تبديل الوضع (Theme Toggle Logic)
 * تعتمد هذه الوظيفة على إضافة/إزالة كلاس 'dark' من وسم <html>
 * وتقوم بحفظ الحالة في المتصفح لضمان بقائها عند تحديث الصفحة
 */
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // تبديل الكلاس (Dark Mode Class)
        const isDark = htmlElement.classList.toggle('dark');
        
        // حفظ تفضيل المستخدم في الـ Local Storage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // ملاحظة: الأيقونات ستدور وتتغير تلقائياً عبر CSS الذي قمنا بضبطه سابقاً
    });
}

// 3. دعم التمرير الناعم (Smooth Scroll) للروابط
// لضمان تجربة مستخدم سلسة عند التنقل بين أقسام الموقع
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


// 1. تهيئة المكتبة (ضع المفتاح الخاص بك هنا)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    
    // تغيير حالة الزر أثناء الإرسال
    btnText.innerText = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // استبدل المعرفات التالية بالقيم الخاصة بك من لوحة تحكم EmailJS
    const serviceID = 'service_0mnao5o';
    const templateID = 'template_qii401w';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnText.innerText = 'Sent Successfully! ✅';
            btn.style.backgroundColor = '#10b981'; // تغيير اللون للأخضر
            this.reset(); // تفريغ الخانات
        }, (err) => {
            btnText.innerText = 'Error! ❌';
            btn.style.backgroundColor = '#ef4444'; // تغيير اللون للأحمر
            alert("فشل الإرسال: " + JSON.stringify(err));
        })
        .finally(() => {
            setTimeout(() => {
                btnText.innerText = 'Send Message →';
                btn.style.backgroundColor = ''; 
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 5000); // العودة للحالة الطبيعية بعد 5 ثوانٍ
        });
});
}
