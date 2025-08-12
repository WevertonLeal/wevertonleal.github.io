const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-nav-dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Transição automática a cada 5 segundos
setInterval(nextSlide, 5000);

// Adiciona funcionalidade aos pontos de navegação
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Inicia o carrossel
showSlide(0);
