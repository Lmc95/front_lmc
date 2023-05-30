// Menu and button (header) //
const btn_open = document.querySelector('.btn_open');
const nav_header = document.querySelector('.nav_header');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const scrollOff = document.querySelector('.scroll_on');
let clickCount = 0;
let clickMode = 0;
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

// MODO LIGHT & NIGHT
//Botones
const btn_night = document.querySelector('.mode_night');
const icoBtn = document.querySelector('button.mode_night i');

//Contenedores
const header = document.querySelector('.header');
const navMobile = document.querySelector('.nav_header');
const navDesk = document.querySelector('.nav_desktop');
const netHeader = document.querySelector('.network_header');
const coverImg = document.querySelector('.cover_img');
const welcome = document.querySelector('.cont_welcome');
const profile = document.querySelector('.cont_profile');
const nameProfile = document.querySelector('.name_role');
const netName = document.querySelector('.networks_name');
const aboutMe = document.querySelector('.about_me');
const projects = document.querySelector('.cont_projects');
const expForm = document.querySelector('.experience_formation');
const experience = document.querySelector('.cont_experience');
const formation = document.querySelector('.cont_formation');
const footer = document.querySelector('.footer');
const navFooter = document.querySelector('.nav_footer');
const netFooter = document.querySelector('.networks_footer');

//Etiquetas
const parrafos = document.getElementsByTagName('p')
const titulosH4 = document.getElementsByTagName('h4');


// Evento modo (night/light)
btn_night.addEventListener('click', () => {

    clickMode++;
    console.log(clickMode);
    if(clickMode % 2 == 0) {
        light();
        for(let i = 0; i < parrafos.length; i++) {
            let p = parrafos[i];
            p.style.color = 'rgba(0, 0, 0, 0.7)'
        }
        for(let i = 0; i < titulosH4.length; i++) {
            let h4 = titulosH4[i];
            h4.style.color = 'rgba(0, 0, 0, 0.7)'
        }
    } else {
        pColors();
        h4Colors();
        night();
    }

})

// Funciones de cambiar color a etiquetas
function pColors() {
    for(let i = 0; i < parrafos.length; i++) {
        let p = parrafos[i];
        p.style.color = 'rgba(255, 255, 255, 0.85)'
    }
}
function h4Colors() {
    for(let i = 0; i < titulosH4.length; i++) {
        let h4 = titulosH4[i];
        h4.style.color = 'rgba(255, 255, 255, 0.85)'
    }
}

// Se crean clases con estilos (dark/night)
function night() {
    // Crear clases con estilos OSCURO
    header.classList.add('header_night');
    navMobile.classList.add('nav_header_night');
    navDesk.classList.add('nav_desktop_night');
    netHeader.classList.add('network_header_night');
    coverImg.classList.add('cover_img_night');
    welcome.classList.add('cont_welcome_night');
    profile.classList.add('cont_profile_night');
    nameProfile.classList.add('name_role_night');
    netName.classList.add('networks_name_night');
    aboutMe.classList.add('about_me_night');
    projects.classList.add('cont_projects_night');
    expForm.classList.add('experience_formation_night');
    experience.classList.add('cont_experience_night');
    formation.classList.add('cont_formation_night');
    footer.classList.add('footer_night');
    navFooter.classList.add('nav_footer_night');
    netFooter.classList.add('networks_footer_night');
    btn_open.classList.add('btn_open_night');
    icoBtn.classList.remove('bi-moon-fill');
    icoBtn.classList.add('bi-brightness-high-fill');
}

// Se eliminan las clases (dark/night)
function light() {
    // Crear clases con estilos OSCURO
    header.classList.remove('header_night');
    navMobile.classList.remove('nav_header_night');
    navDesk.classList.remove('nav_desktop_night');
    netHeader.classList.remove('network_header_night');
    coverImg.classList.remove('cover_img_night');
    welcome.classList.remove('cont_welcome_night');
    profile.classList.remove('cont_profile_night');
    nameProfile.classList.remove('name_role_night');
    netName.classList.remove('networks_name_night');
    aboutMe.classList.remove('about_me_night');
    projects.classList.remove('cont_projects_night');
    expForm.classList.remove('experience_formation_night');
    experience.classList.remove('cont_experience_night');
    formation.classList.remove('cont_formation_night');
    footer.classList.remove('footer_night');
    navFooter.classList.remove('nav_footer_night');
    netFooter.classList.remove('networks_footer_night');
    btn_open.classList.remove('btn_open_night');
    icoBtn.classList.remove('bi-brightness-high-fill');
    icoBtn.classList.add('bi-moon-fill');
}


