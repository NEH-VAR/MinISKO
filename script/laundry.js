function updateContent(target) {
  // Get the content element
  const content = document.querySelector(".information");

  // Clear existing content
  content.innerHTML = "";

  // Handle different targets based on anchor href
  switch (target.getAttribute("href")) {
    case "#one-big-wash":
      // Content for One Big Wash
      content.innerHTML = `
          <section class="left">
            <p class="title">One Big Wash's Price Chart</p>

            <section>
              <p class="head">Full Service</p>
              <p class="desc">Wash, Dry & Fold ₱145 per load (up to 10kg).</p>
            </section>

            <section>
              <p class="head">Drop Off</p>
              <p class="desc">₱30 per kilo.</p>
            </section>

            <section>
              <p class="head">Dry Clean</p>
              <p class="desc">Price on Request.</p>
            </section>

            <section>
              <p class="head">Self Service</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Time (mins)</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Wash</td>
                    <td>up to 10kg</td>
                    <td>-</td>
                    <td>₱60</td>
                  </tr>
                  <tr>
                    <td>Dry</td>
                    <td>up to 3kg</td>
                    <td>20</td>
                    <td>₱30</td>
                  </tr>
                  <tr>
                    <td>Dry</td>
                    <td>up to 4kg</td>
                    <td>40</td>
                    <td>₱60</td>
                  </tr>
                  <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>Additional 10 mins</td>
                    <td>₱10</td>
                  </tr>
                </table>
              </div>
            </section>

            <section>
              <p class="head">Consumables</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Detergent</td>
                    <td>₱17</td>
                  </tr>

                  <tr>
                    <td>Fabcon</td>
                    <td>₱10</td>
                  </tr>

                  <tr>
                    <td>Baking Soda</td>
                    <td>₱5</td>
                  </tr>
                </table>
              </div>
            </section>
          </section>
          <!-- end of left  -->

          <section class="right">
            <section>
              <p class="map">MAP</p>

              <img
                src="images/laundry/laundry-map.png"
                class="map-pic"
                alt="Map"
              />
            </section>

            <section>
              <p class="map">IMAGES</p>

              <!-- start of image slider -->
              <div id="second-tour-slider" class="slider">
                <div class="list">
                  <div class="item">
                    <img src="/images/laundry/big/big-1.jpg" alt="Slide 1" />
                  </div>
                  <div class="item">
                    <img src="/images/laundry/big/big-2.jpg" alt="Slide 2" />
                  </div>
                  <div class="item">
                    <img src="/images/laundry/big/big-3.jpg" alt="Slide 3" />
                  </div>
                  <div class="item">
                    <img src="/images/laundry/big/big-4.jpg" alt="Slide 4" />
                  </div>
                  <div class="item">
                    <img src="/images/laundry/big/big-5.jpg" alt="Slide 5" />
                  </div>
                  <div class="item">
                    <img src="/images/laundry/big/big-6.jpg" alt="Slide 6" />
                  </div>

                </div>


                <div class="buttons">
                  <button>&lt;</button>
                  <button>&gt;</button>
                </div>


                <ul class="dots">
                  <li class="active"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>


              </div>
              <!-- end of image slider -->

            </section>
            
          </section>
          <!-- end of right -->
        </div>



          `;
      break;
    case "#big-mintal-wash":
      content.innerHTML = `
          <section class="left">
            <p class="title">Peniels' Price Chart</p>

            <section>
              <p class="head">Full Service</p>
              <p class="desc">Wash, Dry & Fold.</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Weight</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Below 4 kg (w/out towels, bedsheets, maong)</td>
                    <td>₱125</td>
                  </tr>
                  <tr>
                      <td>Below 4 kg (w/ towels, bedsheets, maong - HEAVILY SOILED)</td>
                      <td>₱131</td>
                  </tr>
                  <tr>
                      <td>Below 4 kg (with towels, bedsheets, maong)</td>
                      <td>₱150.5</td>
                  </tr>
                  
                  <tr>
                  </tr>

                  <tr>
                    <td>4 kg - 5.9kg</td>
                    <td>₱165</td>
                  </tr>
                  <tr>
                      <td>6 kg - 6.9 kg</td>
                      <td>₱174</td>
                  </tr>
                  <tr>
                      <td>7 kg - 7.9 kg</td>
                      <td>₱195</td>
                  </tr>
                  <tr>
                      <td>8 kg - 8.9 kg</td>
                      <td>₱212</td>
                  </tr>
                  <tr>
                      <td>9 kg - 9.9kg</td>
                      <td>₱233</td>
                  </tr>
                  <tr>
                      <td>10kg</td>
                      <td>₱255</td>
                  </tr>

                </table>
              </div>

            </section>

            <section>
              <p class="head">Self Service</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Time (mins)</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Wash</td>
                    <td>up to 10kg</td>
                    <td>-</td>
                    <td>₱55</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>10</td>
                    <td>₱15</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>20</td>
                    <td>₱35</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>30</td>
                    <td>₱55</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>40</td>
                    <td>₱70</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>50</td>
                    <td>₱85</td>
                </tr>
                <tr>
                    <td>Dry</td>
                    <td>-</td>
                    <td>60</td>
                    <td>₱95</td>
                </tr>
                </table>
              </div>
            </section>

            <section>
              <p class="head">Consumables</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Color Safe</td>
                    <td>₱6</td>
                </tr>
                <tr>
                    <td>Detergents (2 sachets)</td>
                    <td>₱19</td>
                </tr>
                <tr>
                    <td>Fabric Softener</td>
                    <td>₱7</td>
                </tr>
                <tr>
                    <td>Finishing Spray</td>
                    <td>₱7</td>
                </tr>
                <tr>
                    <td>Laundry Plastic</td>
                    <td>₱5</td>
                </tr>

                </table>
              </div>
            </section>

        
          </section>
          <!-- end of left  -->

          <section class="right">
            <section>
              <p class="map">MAP</p>

              <img
                src="images/laundry/laundry-map.png"
                class="map-pic"
                alt="Map"
              />
            </section>

            <section>
              <p class="map">IMAGES</p>

              <!-- start of image slider -->
              <div class="slider">
                <div class="list">
                  <div class="item">
                    <img src="/images/laundry/pen/pen-1.jpg" alt="Slide 1" />
                </div>
                <div class="item">
                    <img src="/images/laundry/pen/pen-2.jpg" alt="Slide 2" />
                </div>
                <div class="item">
                    <img src="/images/laundry/pen/pen-3.jpg" alt="Slide 3" />
                </div>
                <div class="item">
                    <img src="/images/laundry/pen/pen-4.jpg" alt="Slide 4" />
                </div>
                <div class="item">
                    <img src="/images/laundry/pen/pen-5.jpg" alt="Slide 5" />
                </div>

                </div>


                <div class="buttons">
                  <button>&lt;</button>
                  <button>&gt;</button>
                </div>


                <ul class="dots">
                  <li class="active"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>


              </div>
              <!-- end of image slider -->

            </section>
            
          </section>
        `;
      break;
    case "#vabols":
      content.innerHTML = `
          <section class="left">
            <p class="title">Vabols' Price Chart</p>

            <section>
              <p class="head">Drop Off</p>
              <p class="desc">Wash, Dry, & Fold incl. Detergent and Fabric Softener.</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Weight</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>3-5 kg</td>
                    <td>₱170</td>
                </tr>
                <tr>
                    <td>6-8 kg</td>
                    <td>₱195</td>
                </tr>
                <tr>
                    <td>Comforter (3kg)</td>
                    <td>₱175</td>
                </tr>
                  
                </table>
              </div>

            </section>

            <section>
              <p class="head">Self Service</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Time (mins)</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Wash</td>
                    <td>up to 8kg</td>
                    <td>45</td>
                    <td>₱75</td>
                </tr>
                <tr>
                    <td>Wash</td>
                    <td>up to 8kg</td>
                    <td>36</td>
                    <td>₱60</td>
                </tr>
                <tr>
                    <td>Wash</td>
                    <td>up to 8kg</td>
                    <td>28</td>
                    <td>₱45</td>
                </tr>
                <tr>
                    <td>Dry (Hi Temp)</td>
                    <td>-</td>
                    <td>10</td>
                    <td>₱20</td>
                </tr>
                <tr>
                    <td>Dry (Mid Temp)</td>
                    <td>-</td>
                    <td>10</td>
                    <td>₱15</td>
                </tr>

              
                </table>
              </div>
            </section>

            <section>
              <p class="head">Consumables</p>

              <div class="chart-container">
                <table class="chart">
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <div class="bar"></div>
                    </td>
                  </tr>

                  <tr>
                    <td>Ariel Liquid</td>
                    <td>₱10</td>
                  </tr>
                  <tr>
                      <td>Downey</td>
                      <td>₱10</td>
                  </tr>
                  <tr>
                      <td>Colorsafe</td>
                      <td>₱6</td>
                  </tr>
                  <tr>
                      <td>Baking Soda</td>
                      <td>₱10</td>
                  </tr>
                  <tr>
                      <td>Plastic</td>
                      <td>₱3</td>
                  </tr>

                </table>
              </div>
            </section>

        
          </section>
          <!-- end of left  -->

          <section class="right">
            <section>
              <p class="map">MAP</p>

              <img
                src="images/laundry/laundry-map.png"
                class="map-pic"
                alt="Map"
              />
            </section>

            <section>
              <p class="map">IMAGES</p>

              <!-- start of image slider -->
              <div class="slider">
                <div class="list">
                  <div class="item">
                    <img src="/images/laundry/vab/vab-1.jpg" alt="Slide 1" />
                </div>
                <div class="item">
                    <img src="/images/laundry/vab/vab-2.jpg" alt="Slide 2" />
                </div>
                <div class="item">
                    <img src="/images/laundry/vab/vab-3.jpg" alt="Slide 3" />
                </div>

                </div>


                <div class="buttons">
                  <button>&lt;</button>
                  <button>&gt;</button>
                </div>


                <ul class="dots">
                  <li class="active"></li>
                  <li></li>
                  <li></li>
                </ul>


              </div>
              <!-- end of image slider -->

            </section>
            
          </section>
        `;
      break;
    default:
      // Handle cases where no matching target is found
      content.innerHTML = `<p>No information available.</p>`;
  }

  const sliders = document.querySelectorAll(".slider");
  sliders.forEach(initSlider);
}

const anchors = document.querySelectorAll(".container-nav a");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(anchor);
  });
});

window.onload = function () {
  updateContent(document.querySelector(".container-nav a:first-child"));
};
