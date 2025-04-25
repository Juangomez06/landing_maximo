document.addEventListener("DOMContentLoaded", function () {
  // Animación para los módulos
  const modules = document.querySelectorAll(".module");
  // Animación para las tarjetas tributarias
  const taxCards = document.querySelectorAll(".tax-card");
  // Animación para las características de contabilidad
  const accountingFeatures = document.querySelectorAll(".accounting-feature");
  // Animación para los hexágonos
  const hexagonSteps = document.querySelectorAll(".hexagon-step");
  // Animación para los ítems de control de portería
  const porterItems = document.querySelectorAll(".porter-item");
  // Animación para las tarjetas de tareas
  const taskCards = document.querySelectorAll(".task-card");
  // Animación para las tarjetas de tareas
  const featureCard = document.querySelectorAll(".feature-card");
  // Animación para beneficios


  function checkElements() {
    // Módulos
    modules.forEach((module, index) => {
      const modulePosition = module.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (modulePosition < screenPosition) {
        setTimeout(() => {
          module.classList.add("animate");
        }, index * 200);
      }
    });

    // Tarjetas tributarias
    taxCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;

      if (cardPosition < screenPosition) {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 200);
      }
    });

    // Características de contabilidad
    accountingFeatures.forEach((feature, index) => {
      setTimeout(() => {
        feature.classList.add("visible");
      }, index * 200);
    });

    // Hexágonos
    hexagonSteps.forEach((step, index) => {
      const stepPosition = step.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;

      if (stepPosition < screenPosition) {
        setTimeout(() => {
          step.classList.add("visible");
        }, index * 200);
      }
    });

    // Porteria
    porterItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;

      if (itemPosition < screenPosition) {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 200);
      }
    });

    // Gestion de tareas
    taskCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 200);
      }
    });

    // Funciones avanzadas
    featureCard.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;

      if (cardPosition < screenPosition) {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 200);
      }
    });

    // Beneficios
    
  }

  window.addEventListener("scroll", checkElements);
  checkElements();
});
