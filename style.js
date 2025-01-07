let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, index) => {
    slide.style.display = "none"; // Gør alle slides usynlige
  });

  dots.forEach((dot) => {
    dot.classList.remove("active"); // Fjern "active"-klassen fra alle prikker
  });

  slideIndex++;

  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block"; // Vis den aktuelle slide
  dots[slideIndex - 1].classList.add("active"); // Aktivér den tilsvarende prik

  setTimeout(showSlides, 2000); // Skift slide hvert 2. sekund
}

// Initialiser slideshowet
showSlides();


  