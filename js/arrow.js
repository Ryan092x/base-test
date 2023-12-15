function toggleSidebar(element) {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");

  var arrow = element.querySelector("span");
  if (sidebar.classList.contains("active")) {
    arrow.innerHTML = "⮜";
    element.style.left = "250px";
    arrow.style.transform = "";
  } else {
    element.style.left = "0";
    arrow.innerHTML = "⮞" || "⮜";
  }
}

document.getElementById("sidebar-toggle").addEventListener("click", function () {
  toggleSidebar(this);
});

document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("sidebar-toggle").click();
});

document.getElementById("menuRevisao").addEventListener("click", function () {
  window.location.href = "revisao.html";
});
