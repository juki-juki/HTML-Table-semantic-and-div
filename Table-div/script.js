function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var navbarMenu = document.getElementById("navbarMenu");

    if (navbarMenu.style.display === "block") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
    }
}
