// script.js
document.addEventListener("DOMContentLoaded", function () {
    const page1Form = document.getElementById("page1");
    const signInForm = document.getElementById("signIn");
    const signUpForm = document.getElementById("signup");
    const profilePage = document.getElementById("profilepage");

    function showForm(show) {
        page1Form.style.display = show === "page1" ? "block" : "none";
        signInForm.style.display = show === "signIn" ? "block" : "none";
        signUpForm.style.display = show === "signUp" ? "block" : "none";
        profilePage.style.display = show === "profile" ? "block" : "none";
    }

    document.getElementById("signButton")?.addEventListener("click", () => showForm("signIn"));
    document.getElementById("signUpButton")?.addEventListener("click", () => showForm("signUp"));
    document.getElementById("signInButton")?.addEventListener("click", () => showForm("signIn"));
});