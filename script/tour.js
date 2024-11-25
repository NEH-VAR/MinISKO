function initSlider(sliderElement) {
  if (!sliderElement.id) {
    sliderElement.id = `slider-${Math.random().toString(36).substr(2, 9)}`;
  }

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

  function autoAdvanceSlider() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }

  // Start auto-play
  function startAutoPlay() {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(autoAdvanceSlider, 5000);
  }

  next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
    startAutoPlay();
  };

  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
    startAutoPlay();
  };

  dots.forEach((li, key) => {
    li.addEventListener("click", () => {
      active = key;
      reloadSlider();
      startAutoPlay();
    });
  });

  // Initial load and start auto-play
  reloadSlider();
  startAutoPlay();
}

// Initialize all sliders on the page
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(initSlider);
});