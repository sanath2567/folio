document.addEventListener("DOMContentLoaded", () => {
    const skillElements = document.querySelectorAll(".circle");

    skillElements.forEach((element) => {
        const percentage = parseFloat(element.textContent);
        updateCircleColor(element, percentage);
    });
});

function updateCircleColor(element, percentage) {
    let color = "orange"; // Default color

    if (percentage < 25) {
        color = "red";
    } else if (percentage < 50) {
        color = "orange";
    } else if (percentage < 75) {
        color = "Green";
    }

    element.style.backgroundColor = color;
}
