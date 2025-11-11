// =======================
// Certificates Section
// =======================
const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    link: "https://example.com/cert1"
  },
   {
    title: "University Certificate in Cybersecurity",
    issuer: "Kabarak University",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1O1jnhe6ODtKdJtE5TgH2t-9cfm4CYSAc/view?usp=drive_link"
  },
  {
    title: "Network Security Fundamentals",
    issuer: "TryHackMe",
    date: "Feb 2025",
    link: "https://example.com/cert2"
  },
  {
    title: "Ethical Hacking Basics",
    issuer: "HTB Academy",
    date: "Mar 2025",
    link: ""
  },
  {
    title: "SOC Level 1 Analyst",
    issuer: "Blue Team Labs Online",
    date: "Apr 2025",
    link: "ongoing"
  },
  {
    title: "Web Application Security",
    issuer: "Hack The Box Academy",
    date: "May 2025",
    link: "ongoing"
  },
   {
    title: "Introduction to Network Traffic Analysis",
    issuer: "Hack The Box Academy",
    date: "May 2025",
    link: "https://academy.hackthebox.com/achievement/2161432/81"
  }
];

function loadCertificates() {
  const container = document.getElementById("certificates-container");
  container.innerHTML = certificates.map(cert => `
    <div class="cert-card animate-on-scroll">
      <h3>${cert.title}</h3>
      <p><strong>Issuer:</strong> ${cert.issuer}</p>
      <p><strong>Date:</strong> ${cert.date}</p>
      ${cert.link && cert.link !== "ongoing"
        ? `<a href="${cert.link}" target="_blank" class="cert-link">View Certificate</a>`
        : `<p class="in-progress">In progress</p>`}
    </div>
  `).join('');

  // Animate certificates on scroll using Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transitionDelay = `${index * 0.1}s`; // staggered animation
        el.classList.add("visible");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", loadCertificates);
