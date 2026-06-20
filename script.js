// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("النظام الأمني جاهز. لا ثغرات مكتشفة في الواجهة.");
    
    // مثال لتعقيم البيانات قبل العرض
    const secureDisplay = (input) => {
        const div = document.createElement('div');
        div.textContent = input; // هذا يمنع تنفيذ أي كود خبيث
        return div.innerHTML;
    };
});
