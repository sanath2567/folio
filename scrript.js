// toogle menu

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');
    
    // Toggle the "dark-mode" class on the navbar (if needed)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('dark-mode');
    }
}

// Add a click event listener to the dark mode toggle anchor tag
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

