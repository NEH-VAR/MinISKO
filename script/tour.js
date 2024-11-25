function initSlider(sliderElement) {

  const slider = sliderElement.querySelector(".list");
  const items = sliderElement.querySelectorAll(".list .item");
  const next = sliderElement.querySelector(".buttons button:last-child");
  const prev = sliderElement.querySelector(".buttons button:first-child");
  const dots = sliderElement.querySelectorAll(".dots li");

  let lengthItems = items.length - 1;
  let active = 0;
  let refreshInterval;

  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + "px";
    
    const lastActiveDot = sliderElement.querySelector(".dots li.active");
    if (lastActiveDot) lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
  }




  next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  };

  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  };

  dots.forEach((li, key) => {
    li.addEventListener("click", () => {
      active = key;
      reloadSlider();
      startAutoPlay();
    });
  });

  // Initial load 
  reloadSlider();
}

// Initialize all sliders on the page
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(initSlider);
});