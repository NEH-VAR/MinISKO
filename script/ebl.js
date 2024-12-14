function updateGreeting() {
    const now = new Date();
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const weekday = dayNames[now.getDay()];
  
    // Get the current hour to determine the greeting
    const currentHour = now.getHours();
    let greeting = "GOOD MORNING";
  
    if (currentHour >= 12 && currentHour < 18) {
      greeting = "GOOD AFTERNOON";
    } else if (currentHour >= 18) {
      greeting = "GOOD EVENING";
    }
  
    // You'll likely want to get the user's first name dynamically.
    // For this example, I'll use a placeholder.
    const firstName = "USER"; // Replace with actual user's name
  
    // Update the HTML elements
    const dateElement = document.querySelector(".greetings p:nth-child(1)"); // Selects the first <p>
    const greetingElement = document.querySelector(".greetings h1");
    const weekdayElement = document.querySelector(".greetings p:nth-child(3)"); // Selects the third <p>
  
    if (dateElement) {
      dateElement.textContent = `${month} ${day}, ${year}`;
    }
    if (greetingElement) {
      greetingElement.textContent = `${greeting}, ${firstName}`;
    }
    if (weekdayElement) {
      weekdayElement.textContent = weekday;
    }
  }
  
  // Call the function initially to set the content
  updateGreeting();
  
  // Update the content every minute (or less often if desired)
  setInterval(updateGreeting, 60000); // 60000 milliseconds = 1 minute


  // script.js
document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('#right-header a');
    const mobileLinks = document.querySelectorAll('.mobile-links a');
    const desktopLinks = document.querySelectorAll('.desktop-links a');
    const content = document.getElementById('swap-content');

    function loadContent(href) {
        switch (href) {
            case "#notifications":
                content.innerHTML = `
                <div id="notification">

                    <h1>Notifications</h1>
                    <div>
                        <table class="notification-panel">
                            <tbody>
                                <tr>
                                    <td><img class="icon" src="images/ebl/notification.svg"></td>
                                    <td>New message from John Doe.</td>
                                    <td class="date">Oct 26</td>
                                </tr>
                                <tr>
                                    <td><img class="icon" src="images/ebl/notification.svg"></td>
                                    <td>Your order has been shipped.</td>
                                    <td class="date">Oct 25</td>
                                </tr>
                                <tr>
                                    <td><img class="icon" src="images/ebl/notification.svg"></td>
                                    <td>System maintenance scheduled for tonight.</td>
                                    <td class="date">Oct 24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>`;
                break;
            case "#lobby":
                content.innerHTML = `<div id="lobby">
                    <section class="left-slip">
                        <h1>Lobby Slip Request</h1>
                        <p>Request a Lobby Slip to extend your stay in the EBL Lobby till 2 a.m.</p>
                    </section>
                    <section class="right-slip">
                        <h1>Lobby Slip</h1>
                        <input id="username" type="text" name="username" placeholder="Enter username"> <br>
                        <input id="room" type="password" name="room number" placeholder="Room Number"> <br>
                        <input type="button" class="submit-button" onclick="alert('Lobby Slip Passed')" value="Submit"> <br>
                    </section>
                </div>`;
                break;
            case "#rules":
                content.innerHTML = `<div id="rules">
                    <h1>Rules and Regulations</h1>
                    <p>To ensure a safe, comfortable, and harmonious living environment for all residents, please familiarize yourself with the following rules and regulations. These guidelines are designed to promote respect, cleanliness, and a sense of community. By adhering to these rules, we can create a positive and productive living space for everyone.</p>
                    <button class="download-button"> <a href="Rules&Regulations.pdf"> Download PDF</a></button>
                </div>`;
                break;
            default:
                content.innerHTML = "Unknown link clicked.";
        }
    }

    function setActive(links, hash) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
          link.classList.add('active');
        }
      });
    }

    function handleClick(event) {
        event.preventDefault();
        const hash = this.getAttribute("href");
        setActive(allLinks, hash);
        loadContent(hash);
        window.location.hash = hash;
    }

    allLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });

    // Initial load and active state
    const currentHash = window.location.hash || "#notifications"; // Use hash or default
    loadContent(currentHash);
    setActive(allLinks, currentHash);

    //Mobile Icon Active State
    const mobileIcons = document.querySelectorAll(".mobile-icon");
    function setActiveMobileIcon(hash) {
        mobileIcons.forEach(icon => {
            const baseSrc = icon.src.replace("-filled.svg", ".svg"); // Get the base src
            icon.src = baseSrc; // Set it to the base src (unfilled)

            if (icon.parentNode.getAttribute("href") === hash) {
                icon.src = baseSrc.replace(".svg", "-filled.svg"); // Set to filled if active
            }
        });
    }

    setActiveMobileIcon(currentHash);
    mobileLinks.forEach(link =>{
        link.addEventListener("click", ()=>{
            setActiveMobileIcon(link.getAttribute("href"));
        })
    })
});