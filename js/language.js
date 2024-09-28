const translations = {
    en: {
      "about-link": "About Us",
      "menu-link": "Menu",
      "offers-link": "Special Offers",
      "locations-link": "Places",
      "hero-title": "Menu of Traditional Foods",
      "hero-text": "Explore our delicious traditional Salvadoran dishes!",
      "discover-btn": "Discover More",
      "home-title": "Home",
      "offers-title": "Special Offers",
      "locations-title": "Places",
      "footer-title": "All rights reserved",
      "menu-section1-title": "Pupusas",
      "menu-section1-description": "Traditional pupusas filled with cheese, beans, and pork, served with curtido and tomato sauce.",
      "menu-section2-title": "Yuca with Chicharrón",
      "menu-section2-description": "Boiled or fried yuca accompanied by chicharrón, curtido, and tomato sauce.",
      "menu-section3-title": "Corn Tamales",
      "menu-section3-description": "Soft and fluffy corn tamales, served with cream or beans.",
      "drink1-title": "Horchata",
      "drink1-description": "Refreshing drink made from morro seeds and spices.",
      "drink2-title": "Ensalada",
      "drink2-description": "Natural fruit juice with pieces of apple, pineapple, and cashew.",
      "drink3-title": "Corn Atol",
      "drink3-description": "Delicious corn atol, a hot and creamy drink made from corn.",
    },
    es: {
      "about-link": "Acerca de",
      "menu-link": "Menú",
      "offers-link": "Ofertas Especiales",
      "locations-link": "Lugares",
      "hero-title": "Menú de Comidas Típicas",
      "hero-text": "¡Explora nuestros deliciosos platos tradicionales salvadoreños!",
      "discover-btn": "Descubre Más",
      "home-title": "Inicio",
      "offers-title": "Ofertas Especiales",
      "locations-title": "Lugares",
      "footer-title": "Todos los derechos reservados",
      "menu-section1-title": "Pupusas",
      "menu-section1-description": "Tradicionales pupusas de queso, frijol y chicharrón servidas con curtido y salsa de tomate.",
      "menu-section2-title": "Yuca con Chicharrón",
      "menu-section2-description": "Yuca cocida o frita acompañada de chicharrón, curtido y salsa de tomate.",
      "menu-section3-title": "Tamales de Elote",
      "menu-section3-description": "Tamales de elote suaves y esponjosos, servidos con crema o frijoles.",
      "drink1-title": "Horchata",
      "drink1-description": "Bebida refrescante de semillas de morro y especias.",
      "drink2-title": "Ensalada",
      "drink2-description": "Jugo de frutas naturales con trocitos de manzana, piña, y marañón.",
      "drink3-title": "Atol de Elote",
      "drink3-description": "Delicioso atol de elote, una bebida caliente y cremosa de maíz.",
    }
  };
      
  
  // Función para aplicar la traducción según el idioma seleccionado
  function applyTranslations(language) {
    const texts = translations[language];
    Object.keys(texts).forEach(function (id) {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = texts[id];
      }
    });
  }
  
  // Guardar la preferencia de idioma en LocalStorage
  function setLanguage(language) {
    localStorage.setItem('preferredLanguage', language);
    applyTranslations(language);
  }
  
  // Cargar el idioma desde LocalStorage si existe
  function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es'; // Por defecto español
    document.getElementById('language-selector').value = preferredLanguage;
    applyTranslations(preferredLanguage);
  }
  
  // Ejecutar cuando se cambia el selector de idioma
  document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    setLanguage(selectedLanguage);
  });
  
  // Cargar el idioma al iniciar la página
  document.addEventListener('DOMContentLoaded', loadPreferredLanguage);
  