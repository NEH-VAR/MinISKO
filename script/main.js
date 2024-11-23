const navBurger = document.getElementById('nav-burger');
const navSidebar = document.getElementById('nav-sidebar');

// Add click event listener to the burger icon
navBurger.addEventListener('click', () => {
  navSidebar.classList.toggle('active'); // Toggle 'active' class to show/hide sidebar
});

// Close the sidebar if you click outside 
navSidebar.addEventListener('click', () => {
  navSidebar.classList.remove('active');
});