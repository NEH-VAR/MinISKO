// HTML Code for NavBar
const navbarHTML = `
  <!-- Start Navigation Bar -->
    <nav>
      <div id="island">
        <a href="transport.html">
          <img src="images/navbar/Commute-dark.svg" class="nav_icon" />
        </a>

        <a href="ebl-pre-login.html">
          <img src="images/navbar/student-dark.svg" class="nav_icon" />
        </a>

        <a href="index.html">
          <img
            src="https://up.edu.ph/wp-content/uploads/2020/01/UP-Seal.png"
            class="nav_up"
          />
        </a>

        <a href="tour.html">
          <img src="images/navbar/Tour-dark.svg" class="nav_icon" />
        </a>

        <a href="laundry.html">
          <img src="images/navbar/Laundry-dark.svg" class="nav_icon" />
        </a>

      </div>
    </nav>
    <!-- End of Navigation Bar -->

    <!-- Start Navigation Bar Mobile -->
    <nav id="nav-mobile">
      <img src="/images/navbar/menu-dark.svg" id="nav-burger" alt="Menu Icon" />
      <div>
        <span style="color:var(--red1);">Min</span><span style="color: var(--yellow1);;">IS</span
        ><span style="color: var(--green1);">KO</span>
      </div>
    </nav>
    <!-- End Navigation Bar Mobile -->

    <!-- Start of Nav Sidebar -->
    <div id="nav-sidebar">
      <img
        src="https://up.edu.ph/wp-content/uploads/2020/01/UP-Seal.png"
        id="nav-up"
        alt="UP Seal"
      />

      <div id="mobile-options">
        <a href="transport.html" class="mobile-option">
          <img
            src="images/navbar/Commute.svg"
            class="nav-icon"
            alt="Commute Icon"
          />
          <h2>Commute</h2>
        </a>

        <a href="ebl-pre-login.html" class="mobile-option">
          <img
            src="images/navbar/student.svg"
            class="nav-icon"
            alt="Student Icon"
          />
          <h2>Student</h2>
        </a>

        <a href="tour.html" class="mobile-option">
          <img
            src="images/navbar/Tour.svg"
            class="nav-icon"
            alt="Campus Tour Icon"
          />
          <h2>Campus Tour</h2>
        </a>

        <a href="laundry.html" class="mobile-option">
          <img
            src="images/navbar/Laundry.svg"
            class="nav-icon"
            alt="Laundry Icon"
          />
          <h2>Laundry</h2>
        </a>
      </div>
    </div>
    <!-- End of Nav Sidebar -->
`;

const navbarContainer = document.getElementById("navbar-container");
navbarContainer.innerHTML = navbarHTML;

const navBurger = document.getElementById("nav-burger");
const navSidebar = document.getElementById("nav-sidebar");

// Add click event listener to the burger icon
navBurger.addEventListener("click", () => {
  navSidebar.classList.toggle("active"); // Toggle 'active' class to show/hide sidebar
});

// Close the sidebar if you click outside
navSidebar.addEventListener("click", () => {
  navSidebar.classList.remove("active");
});
