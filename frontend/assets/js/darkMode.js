// darkmode.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleMode = document.getElementById("toggleMode");
    const body = document.body;

    function loadTheme() {
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";
        body.classList.toggle("dark-mode", isDarkMode);
        if (toggleMode) toggleMode.checked = isDarkMode;
    }

    function switchTheme() {
        const isDark = toggleMode.checked;
        body.classList.toggle("dark-mode", isDark);
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    }

    toggleMode?.addEventListener("change", switchTheme);
    loadTheme();
});