const navIcon = document.getElementById("navIcon");
const navBar = document.getElementById("navBar");

navIcon.addEventListener("click", () => {
  console.log("Hello World");

  if (navBar.classList.contains("nav-open")) {
    navBar.classList.remove("nav-open");
    navBar.classList.add("nav-close");
  } else {
    navBar.classList.remove("nav-close");
    navBar.classList.add("nav-open");
  }
});
