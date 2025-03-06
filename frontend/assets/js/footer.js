// footer.js
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const linkMap = {
        "home.html": "homeLink",
        "search.html": "searchLink",
        "add.html": "addLink",
        "signup_login.html": "setLink"
    };

    document.querySelectorAll(".footer-icon").forEach(link => link.classList.remove("active"));
    if (linkMap[currentPage]) {
        document.getElementById(linkMap[currentPage]).classList.add("active");
    }
});