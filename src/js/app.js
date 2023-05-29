// Menu and button (header) //
const btn_open = document.querySelector('.btn_open');
const nav_header = document.querySelector('.nav_header');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const scrollOff = document.querySelector('.scroll_on');
let clickCount = 0;
let width = innerWidth;

// Funcion para abrir el menu
function openMenu(){
    nav_header.style.margin = '75px 0 0';
    nav_header.style.height = 'calc(100vh - 75px)'
    nav_header.style.opacity = '100%';
    btn_open.classList.add('btn_close');
    line1.classList.add('line1_close');
    line2.classList.add('line2_close');
    line3.classList.add('line3_close');
    scrollOff.classList.add('scroll_off');
}
// Funcion para cerrar el menu
function closeMenu(){
    nav_header.style.marginLeft = '-250px';
    nav_header.style.opacity = '0';
    btn_open.classList.remove('btn_close');
    line1.classList.remove('line1_close');
    line2.classList.remove('line2_close');
    line3.classList.remove('line3_close');
    scrollOff.classList.remove('scroll_off');
}

// Toma el tamaño (width) al cambiar resolucion.
function resize() {
    width = innerWidth;
    if(width < 900) {
        closeMenu();
        clickCount = 0;
    }
}

// Abre el menu dependiendo el valor del click (positivo = menu OFF | negativo = menu ON)
btn_open.addEventListener('click', () => {
    clickCount++;   
    if(clickCount % 2 == 0 && width < 900) {
        closeMenu();
    } else {
        openMenu();
    }
});

window.addEventListener('resize', resize)
//-------------------------------//
