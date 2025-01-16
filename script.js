document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".fade-in").forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 200);
    });
});

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background: #222;
        color: white;
    }
    .dark-mode header {
        background: linear-gradient(45deg, #444, #111);
    }
`;
document.head.appendChild(darkModeStyles);
