// === MATRIX DIGITAL RAIN with Scroll Color Shift ===
const canvas = document.getElementById('digitalRain');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@$#%&*';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Dynamic color state
let currentHue = 140; // Green start
let targetHue = 140;

// Draw the digital rain
function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  currentHue += (targetHue - currentHue) * 0.05;
  ctx.fillStyle = `hsl(${currentHue}, 100%, 50%)`;
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Adjust canvas on resize
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
