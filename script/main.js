// HTML Code for NavBar
const navbarHTML = `
  <!-- Start Navigation Bar -->
    <nav>
      <div id="island">
        <a href="tour.html">
          <img src="images/navbar/Tour-dark.svg" class="nav_icon" />
        </a>

        <a href="transport.html">
          <img src="images/navbar/Commute-dark.svg" class="nav_icon" />
        </a>

        <a href="index.html">
          <img
            src="images/icon.ico"
            class="nav_up"
          />
        </a>

        <a href="ebl.html">
          <img src="images/navbar/student-dark.svg" class="nav_icon" />
        </a>

        <a href="laundry.html">
          <img src="images/navbar/Laundry-dark.svg" class="nav_icon" />
        </a>

      </div>
    </nav>
    <!-- End of Navigation Bar -->

    <!-- Start Navigation Bar Mobile -->
    <nav id="nav-mobile">
      <img src="images/navbar/menu-dark.svg" id="nav-burger" alt="Menu Icon" />
      <div>
        <span style="color:var(--red1);">Min</span><span style="color: var(--yellow1);;">IS</span
        ><span style="color: var(--green1);">KO</span>
      </div>
    </nav>
    <!-- End Navigation Bar Mobile -->

    <!-- Start of Nav Sidebar -->
    <div id="nav-sidebar">
      <a href="index.html">
        <img
          src="images/icon.ico"
          id="nav-up"
          alt="UP Seal"
        />
      </a>

      <div id="mobile-options">
        <a href="tour.html" class="mobile-option">
          <img
            src="images/navbar/Tour.svg"
            class="nav-icon"
            alt="Campus Tour Icon"
          />
          <h2>Campus Tour</h2>
        </a>

        <a href="transport.html" class="mobile-option">
          <img
            src="images/navbar/Commute.svg"
            class="nav-icon"
            alt="Commute Icon"
          />
          <h2>Commute</h2>
        </a>

        <a href="ebl.html" class="mobile-option">
          <img
            src="images/navbar/student.svg"
            class="nav-icon"
            alt="Student Icon"
          />
          <h2>Student</h2>
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

const footHTML= `<div class="footer_container">
        <img src="images/icon.ico">
        <div class="footer_text_container">
          <div class="footer_text_1">
            <p id="footer_text_1_1">BSCS 1ST YEAR 2024</p>
            <p id="footer_text_1_2">CMSC 3 FINAL PROJECT</p>
          </div>
          <div class="footer_text_2">
            <p>Created by:</p>
            <p>Ravhen M. Grageda<br>Jayrad P. Adeva</p>
          </div>
        </div>
      </div>`;

const footContainer = document.getElementById("foot-container");
footContainer.innerHTML = footHTML; 