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
