// post.js
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("postImage").src = "/image/" + params.get("image");
    document.getElementById("postTitle").textContent = params.get("title");
    document.getElementById("postSubtitle").textContent = params.get("subtitle");
    document.getElementById("postDate").textContent = params.get("date");
    document.getElementById("postLocation").textContent = params.get("location");
    document.getElementById("postTime").textContent = params.get("postedDateTime");
});