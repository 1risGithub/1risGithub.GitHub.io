// home.js
document.addEventListener("DOMContentLoaded", function () {
    function goToPost(image, title, subtitle, date, location, postedDateTime) {
        const url = `post.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}&date=${encodeURIComponent(date)}&location=${encodeURIComponent(location)}&postedDateTime=${encodeURIComponent(postedDateTime)}`;
        window.location.href = url;
    }
});