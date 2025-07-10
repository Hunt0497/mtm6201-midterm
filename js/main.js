// Select the button and the navigation links
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Listen for a click on the button
navToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links list
    navLinks.classList.toggle('active');

    // Toggle the 'open' class on the button itself for the animation
    navToggle.classList.toggle('open');

    // Update the aria-expanded attribute for accessibility
    const isExpanded = navLinks.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
});s