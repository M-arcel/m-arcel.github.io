document.addEventListener("DOMContentLoaded", function() {
    // Select all scroll links
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Add click event listener to each scroll link
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get target section
            const targetElement = document.querySelector(targetId); // Select the target element

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
            }
        });
    });
});