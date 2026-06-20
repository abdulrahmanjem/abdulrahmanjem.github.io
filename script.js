// 1. Video Scrubbing
const video = document.getElementById('bgVideo');
let isSeeking = false;
window.addEventListener('mousemove', (e) => {
    if (isSeeking) return;
    isSeeking = true;
    const delta = e.movementX;
    const SENSITIVITY = 0.8;
    let targetTime = video.currentTime + (delta / window.innerWidth) * SENSITIVITY * video.duration;
    video.currentTime = Math.max(0, Math.min(targetTime, video.duration));
    setTimeout(() => isSeeking = false, 50);
});

// 2. Typewriter Effect
const text = "Glad you stopped in. Good taste tends to find us. Now, what are we building?";
const el = document.getElementById('typewriter');
let i = 0;
setTimeout(() => {
    const interval = setInterval(() => {
        el.innerHTML = text.slice(0, i) + '<span class="cursor">|</span>';
        i++;
        if (i > text.length) { clearInterval(interval); el.innerText = text; }
    }, 38);
}, 600);

// 3. UI Animation & Clipboard
setTimeout(() => {
    document.getElementById('pillContainer').style.opacity = '1';
    document.getElementById('pillContainer').style.transform = 'translateY(0)';
}, 400);

document.getElementById('copyBtn').onclick = () => {
    navigator.clipboard.writeText("hello@mainframe.co");
    alert("Email copied to clipboard!");
};
