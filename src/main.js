import './style.css'

const toggle = document.querySelector(".hamburguesa")
const nav = document.querySelector("nav")
const up = document.querySelector("#up")


const htmltemp = document.documentElement; 
// cambiamos
htmltemp.setAttribute('data-theme', 'light');


// ABRIR BARRA DE NAVEGACIÓN

toggle.addEventListener(
    'click', () => {
        nav.classList.toggle('show')
    }
)

up.addEventListener(
    'click', () => {
        scrollTo(0)
    }
)

// CAMBIO DE TEMA
