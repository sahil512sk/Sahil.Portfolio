// ============================
// Short selectors
// ============================
const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

// ============================
// Auto Year
// ============================
$("#year").textContent = new Date().getFullYear();

// ============================
// Dark Mode Toggle
// ============================
const themeBtn = $("#theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ============================
// Mobile Menu
// ============================
const menuBtn = $("#menu-toggle");
const nav = $("#main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const expanded = nav.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", expanded);
});

// Close menu when link clicked
$$(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});

// ============================
// Smooth Scroll
// ============================
$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ============================
// Simple Project Modal
// ============================
const modal = $("#project-modal");
const modalTitle = $("#modal-title");
const modalDesc = $("#modal-desc");
const closeModalBtn = $(".modal-close");

$$(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h4").textContent;
    const desc = card.querySelector("p").textContent;

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
