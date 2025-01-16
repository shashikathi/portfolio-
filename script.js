// For any additional JS functionality you might need, e.g., animations, dynamic effects, etc.
// Example: Smooth scroll for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
