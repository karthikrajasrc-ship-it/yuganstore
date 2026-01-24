const togglebtn = document.getElementById("togglebtn");
const sidenavbar = document.querySelector(".sidenav-bar");

togglebtn.addEventListener("click", () => {
    sidenavbar.classList.add("show");
});

const sidebarxmark = document.querySelector(".side-barxmark");

sidebarxmark.addEventListener("click", () => {
    sidenavbar.classList.remove("show");
});
