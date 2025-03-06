// auth.js
document.addEventListener("DOMContentLoaded", function () {
    function checkLoginStatus() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("userNameDisplay").textContent = user.username;
        }
    }

    document.getElementById("signupForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("signup-Username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        if (username && email && password) {
            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Sign Up Successful!");
            window.location.href = "signin.html";
        } else {
            alert("Please fill in all fields.");
        }
    });

    document.getElementById("signinForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            alert("Login Successful!");
            window.location.href = "profile.html";
        } else {
            alert("Invalid Email or Password");
        }
    });

    document.getElementById("signOutButton")?.addEventListener("click", function () {
        localStorage.removeItem("user");
        alert("Logged Out!");
        window.location.href = "signin.html";
    });

    checkLoginStatus();
});