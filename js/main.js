const buscador = document.querySelector('.buscador')
const btn = document.getElementById('btn_buscador')
const input = document.getElementById('input')
const imagenUsuario = document.getElementById('imagen')

btn.addEventListener('click', () => {
    btn.style.transition = ".7s ease"
    input.style.transition = ".7s ease"
    buscador.classList.toggle('activo')
    input.focus()
})
    