// search.js
document.addEventListener("DOMContentLoaded", function () {
    const searchQuery = new URLSearchParams(window.location.search).get("q") || "";
    document.getElementById("searchResults").innerHTML = searchQuery ? `<h3>ผลการค้นหาสำหรับ: ${searchQuery}</h3>` : `<h3>กรุณากรอกคำค้นหา</h3>`;
});