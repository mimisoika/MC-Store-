// Obtener elementos del DOM para el menú de filtros
const filtersToggle = document.querySelector('.filters-toggle');
const filtersSidebar = document.querySelector('.filters-sidebar');

// Cuando se hace clic en el botón de filtros
filtersToggle.addEventListener('click', (e) => {
    // Evitar que el clic se propague a otros elementos
    e.stopPropagation();
    // Alternar la clase 'active' para mostrar/ocultar el menú de filtros
    filtersSidebar.classList.toggle('active');
    // Agregar/quitar clase al body para el fondo oscuro
    document.body.classList.toggle('filters-active');
});

// Cerrar el menú de filtros cuando se hace clic fuera de él
document.addEventListener('click', (e) => {
    // Verificar si el menú está activo y si el clic fue fuera del menú y del botón
    if (document.body.classList.contains('filters-active') && 
        !filtersSidebar.contains(e.target) && 
        !filtersToggle.contains(e.target)) {
        // Ocultar el menú de filtros
        filtersSidebar.classList.remove('active');
        document.body.classList.remove('filters-active');
    }
});

// Obtener elementos del DOM para el menú de navegación
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Alternar el menú de navegación al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Obtener elementos del DOM para el control de precios
const priceSlider = document.querySelector('.price-slider');
const minPriceInput = document.querySelector('.price-inputs input:first-child');
const maxPriceInput = document.querySelector('.price-inputs input:last-child');

// Establecer valores iniciales para los campos de precio
minPriceInput.value = '0';
maxPriceInput.value = '1000';

// Actualizar el campo de precio máximo cuando se mueve el slider
priceSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    maxPriceInput.value = value;
});

// Validar y actualizar el campo de precio mínimo
minPriceInput.addEventListener('change', (e) => {
    const value = parseInt(e.target.value);
    // Verificar que el valor esté entre 0 y el precio máximo actual
    if (value >= 0 && value <= parseInt(maxPriceInput.value)) {
        e.target.value = value;
    } else {
        // Si el valor no es válido, establecerlo a 0
        e.target.value = 0;
    }
});

// Validar y actualizar el campo de precio máximo y el slider
maxPriceInput.addEventListener('change', (e) => {
    const value = parseInt(e.target.value);
    // Verificar que el valor esté entre el precio mínimo y 1000
    if (value >= parseInt(minPriceInput.value) && value <= 1000) {
        e.target.value = value;
        priceSlider.value = value;
    } else {
        // Si el valor no es válido, establecerlo a 1000
        e.target.value = 1000;
        priceSlider.value = 1000;
    }
});

// Cerrar el menú de filtros cuando se presiona la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('filters-active')) {
        filtersSidebar.classList.remove('active');
        document.body.classList.remove('filters-active');
    }
});