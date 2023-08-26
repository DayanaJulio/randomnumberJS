// Obtener referencias a elementos HTML
const randomNumberElement = document.getElementById("randomNumber");
const generateButton = document.getElementById("generateButton");

// Función para generar números aleatorios durante la animación
function animateRandomNumbers() {
  generateButton.disabled = true; // Deshabilitar el botón durante la animación

  const initialNumber = 0;
  randomNumberElement.textContent = initialNumber;

  const animationDuration = 10000; // 5000 milisegundos (5 segundos)
  const interval = 100; // Intervalo de tiempo entre números (milisegundos)
  const totalNumbers = animationDuration / interval;
  let numbersGenerated = 0;

  // Agregar una clase para la animación
  randomNumberElement.classList.add("animating");

  const animationInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberElement.textContent = randomNumber;
    numbersGenerated++;

    if (numbersGenerated === totalNumbers) {
      clearInterval(animationInterval);

      // Remover la clase de animación
      randomNumberElement.classList.remove("animating");
      generateButton.disabled = false; // Habilitar el botón nuevamente
    }
  }, interval);
}

// Asociar la función al evento click del botón
generateButton.addEventListener("click", animateRandomNumbers);
