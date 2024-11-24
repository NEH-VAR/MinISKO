function showMatrix(type) {
  const matrixDiv = document.getElementById("matrix");
  if (type === "jeepney") {
    matrixDiv.innerHTML = `<h3>Jeepney Fare Matrix</h3>
            <div id="fare-wrapper">
                <div id="fare-header">
                    <h4 class="route">Route</h4>
                    <h4 class="fare">Fare</h4>
                </div>
                <div id="bar"></div>
                <div class="fare-content">
                    <div class="fare-row">
                        <p class="route">Holy Spirit Hospital</p>
                        <p class="fare">₱10.00</p>
                    </div>
                    <div class="fare-row">
                        <p class="route">Holy Spirit Hospital to Admin</p>
                        <p class="fare">₱15.00</p>
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
