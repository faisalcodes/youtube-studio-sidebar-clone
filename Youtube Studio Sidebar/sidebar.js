const sidebarToggler = document.querySelector(".sidebarToggler");
const sidebar = document.querySelector(".YoutubeSidebar");

function condenseSidebar() {
  if (sidebar.classList.contains("condensed")) {
    sidebar.classList.remove("condensed");
  } else {
    sidebar.classList.add("condensed");
  }
}

sidebarToggler.addEventListener("click", condenseSidebar);
