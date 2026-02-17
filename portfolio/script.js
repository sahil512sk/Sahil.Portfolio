const projects = [
  "Portfolio Website",
  "Todo App (Node + MongoDB)",
  "User Management API"
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});
