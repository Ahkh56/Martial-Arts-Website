function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}

  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme");
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });



let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let dotsContainer = document.getElementById("slider-dots");

// Generate dots
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) dot.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);




