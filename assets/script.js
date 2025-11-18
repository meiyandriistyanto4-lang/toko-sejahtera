// Hide loading screen after 1.5 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);
    }, 1500);
});

// ===============================
// DARK MODE TOGGLE
// ===============================
const toggle = document.getElementById("theme-toggle");

// Load saved theme (agar mode tetap setelah refresh)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

// Event toggle ketika user menggeser tombol
toggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
