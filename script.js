// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

const links = document.querySelectorAll(".nav nav a");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Highlight the nav link for the section currently in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

links.forEach(a => {
  const section = document.querySelector(a.getAttribute("href"));
  if (section) observer.observe(section);
});

// Mobile menu
function setMenu(open) {
  menu.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
links.forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });