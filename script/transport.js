function showMatrix(type) {
  const matrixDiv = document.getElementById("matrix");

  // Remove the visible class to start the fade-out effect
  matrixDiv.classList.remove("visible");

  // Use a timeout to allow the fade-out effect to complete before changing the content
  setTimeout(() => {
    if (type === "jeepney") {
      matrixDiv.innerHTML = `<h3>Jeepney Fare Matrix</h3>
                <div id="fare-wrapper">
                    <div id="fare-header">
                        <h4 class="route">Route</h4>
                        <h4 class="fare">Fare</h4>
                    </div>
                    <div id="bar"></div>
                      <div id="JeepType">UP Ikot</div>
                    <div class="fare-content">
                        <div class="fare-row" id="jeepney-1" onclick="jeepneyMap(1)">
                            <p class="route">Holy Spirit to ADMIN Building, EBL Dorm, Kalimudan, Library</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-2" onclick="jeepneyMap(2)">
                            <p class="route">Holy Spirit to CSM</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-3" onclick="jeepneyMap(3)">
                            <p class="route">Holy Spirit to Sports Complex</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-4" onclick="jeepneyMap(4)">
                            <p class="route">Admin to CSM</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-5" onclick="jeepneyMap(5)">
                            <p class="route">Admin to Sports Complex</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-6" onclick="jeepneyMap(6)">
                            <p class="route">CSM to Sports Complex</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-7" onclick="jeepneyMap(7)">
                            <p class="route">Bago Oshiro to ADMIN Building, EBL Dorm, Kalimudan, Library</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-8" onclick="jeepneyMap(8)">
                            <p class="route">Bago Oshiro to CSM</p>
                            <p class="fare">₱10.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-9" onclick="jeepneyMap(9)">
                            <p class="route">Bago Oshiro to Sports Complex</p>
                            <p class="fare">₱10.00</p>
                        </div>
                    </div>

                    <div id="JeepType">Traditional Jeepney</div>


                    <div class="fare-content">
                        <div class="fare-row" id="jeepney-10" onclick="jeepneyMap(10)">
                            <p class="route">Mintal To Roxas</p>
                            <p class="fare">₱35.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-11" onclick="jeepneyMap(11)">
                            <p class="route">Mintal To SM Ecoland</p>
                            <p class="fare">₱25.00</p>
                        </div>
                        <div class="fare-row" id="jeepney-12" onclick="jeepneyMap(12)">
                            <p class="route">Mintal To Bypass, Bangkal, Matina Crossing</p>
                            <p class="fare">₱20.00</p>
                        </div>

                    </div>
                </div>`;
    } else if (type === "tricycle") {
      matrixDiv.innerHTML = `<h3>Tricycle Fare Matrix</h3>
              <div id="fare-wrapper">
                  <div id="fare-header">
                      <h4 class="route">Route</h4>
                      <h4 class="fare">Fare</h4>
                  </div>
                  <div id="bar"></div>
                  <div class="fare-content">
                      <div class="fare-row" id="tricycle-1" onclick="tricycleMap(1)">
                          <p class="route">Holy Spirit to ADMIN Building, EBL Dorm, Kalimudan, Library</p>
                          <p class="fare">₱25.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-2" onclick="tricycleMap(2)">
                          <p class="route">Holy Spirit to CSM</p>
                          <p class="fare">₱30.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-3" onclick="tricycleMap(3)">
                          <p class="route">Holy Spirit to Sports Complex</p>
                          <p class="fare">₱40.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-4" onclick="tricycleMap(4)">
                          <p class="route">One Big Wash to ADMIN Building, EBL Dorm, Kalimudan, Library</p>
                          <p class="fare">₱15.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-5" onclick="tricycleMap(5)">
                          <p class="route">One Big Wash to CSM</p>
                          <p class="fare">₱20.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-6" onclick="tricycleMap(6)">
                          <p class="route">One Big Wash to Sports Complex</p>
                          <p class="fare">₱20.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-7" onclick="tricycleMap(7)">
                          <p class="route">Admin to CSM</p>
                          <p class="fare">₱15.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-8" onclick="tricycleMap(8)">
                          <p class="route">Admin to Sports Complex</p>
                          <p class="fare">₱20.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-9" onclick="tricycleMap(9)">
                          <p class="route">CSM to Sports Complex</p>
                          <p class="fare">₱15.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-10" onclick="tricycleMap(10)">
                          <p class="route">Bago Oshiro to ADMIN Building, EBL Dorm, Kalimudan, Library</p>
                          <p class="fare">₱25.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-11" onclick="tricycleMap(11)">
                          <p class="route">Bago Oshiro to CSM</p>
                          <p class="fare">₱30.00</p>
                      </div>
                      <div class="fare-row" id="tricycle-12" onclick="tricycleMap(12)">
                          <p class="route">Bago Oshiro to Sports Complex</p>
                          <p class="fare">₱35.00</p>
                      </div>
                  </div>
              </div>`;
    }

    // Add the visible class to trigger the fade-in effect
    matrixDiv.classList.add("visible");
  }, 500); // Match this timeout with the CSS transition duration
}

// Set default to Jeepney on page load
window.onload = function () {
  showMatrix("jeepney");
};

function tricycleMap(n) {
  const mapImage = document.getElementById("map-image");

  switch (n) {
    case 1:
      mapImage.src = "images/commute/Routes/1.png";
      break;
    case 2:
      mapImage.src = "images/commute/Routes/2.png";
      break;
    case 3:
      mapImage.src = "images/commute/Routes/3.png";
      break;
    case 4:
      mapImage.src = "images/commute/Routes/4.png";
      break;
    case 5:
      mapImage.src = "images/commute/Routes/5.png";
      break;
    case 6:
      mapImage.src = "images/commute/Routes/6.png";
      break;
    case 7:
      mapImage.src = "images/commute/Routes/7.png";
      break;
    case 8:
      mapImage.src = "images/commute/Routes/8.png";
      break;
    case 9:
      mapImage.src = "images/commute/Routes/9.png";
      break;
    case 10:
      mapImage.src = "images/commute/Routes/10.png";
      break;
    case 11:
      mapImage.src = "images/commute/Routes/11.png";
      break;
    case 12:
      mapImage.src = "images/commute/Routes/12.png";
      break;
    default:
      mapImage.src = "images/commute/Routes/base.png";
      break;
  }
}

function jeepneyMap(n) {
  const mapImage = document.getElementById("map-image");

  switch (n) {
    case 1:
      mapImage.src = "images/commute/jeepney/1.png";
      break;
    case 2:
      mapImage.src = "images/commute/jeepney/2.png";
      break;
    case 3:
      mapImage.src = "images/commute/jeepney/3.png";
      break;
    case 4:
      mapImage.src = "images/commute/jeepney/4.png";
      break;
    case 5:
      mapImage.src = "images/commute/jeepney/5.png";
      break;
    case 6:
      mapImage.src = "images/commute/jeepney/6.png";
      break;
    case 7:
      mapImage.src = "images/commute/jeepney/7.png";
      break;
    case 8:
      mapImage.src = "images/commute/jeepney/8.png";
      break;
    case 9:
      mapImage.src = "images/commute/jeepney/9.png";
      break;
    case 10:
      mapImage.src = "images/commute/jeepney/10.png";
      break;
    case 11:
      mapImage.src = "images/commute/jeepney/11.png";
      break;
    case 12:
      mapImage.src = "images/commute/jeepney/12.png";
      break;

    default:
      mapImage.src = "images/commute/jeepney/base.png";
      break;
  }
}
