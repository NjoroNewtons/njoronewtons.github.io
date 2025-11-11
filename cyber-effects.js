// cyber-effects.js
// 🧠 Cyber Interactive Effects

// Neon cursor trail effect
document.addEventListener("mousemove", e => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 400);
});

const style = document.createElement("style");
style.textContent = `
  .cursor-trail {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #64f4ac;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 15px #64f4ac, 0 0 30px #64f4ac;
    animation: fadeTrail 0.4s linear forwards;
  }
  @keyframes fadeTrail {
    to { opacity: 0; transform: scale(2); }
  }
`;
document.head.appendChild(style);

// Optional: glowing text animation on hover
document.querySelectorAll('.section-heading, h1, h2, h3').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.textShadow = '0 0 10px #64f4ac, 0 0 20px #64f4ac';
  });
  el.addEventListener('mouseleave', () => {
    el.style.textShadow = '';
  });
});


// Matrix Digital Rain Effect
const canvas = document.getElementById("digitalRain");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});


