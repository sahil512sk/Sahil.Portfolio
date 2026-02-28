// async function loadProjects() {
//   const res = await fetch("/api/projects");
//   const projects = await res.json();

//   const container = document.getElementById("projects");

//   projects.forEach(project => {
//     container.innerHTML += `
//       <div class="project-card">
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         <a href="${project.githubLink}" target="_blank">GitHub</a>
//         <a href="${project.liveLink}" target="_blank">Live</a>
//       </div>
//     `;
//   });
// }

// loadProjects();

const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

$("#year").textContent = new Date().getFullYear();

const themeBtn = $("#theme-toggle");

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

const menuBtn = $("#menu-toggle");
const nav = $("#main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const expanded = nav.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", expanded);
});

$$(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});

$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

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
