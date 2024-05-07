const texto = document.querySelector('.texto')
const audio = document.querySelector('.audio')
const folha1 = document.querySelector('.folha1')
const folha2 = document.querySelector('.folha2')
const mata1 = document.querySelector('.mata1')
const mata2 = document.querySelector('.mata2')
const mont1 = document.querySelector('.mont1')
const mont2 = document.querySelector('.mont2')

document.addEventListener('scroll', function(){
    let value = window.scrollY

    texto.style.marginTop = value * 1.1 + 'px' /*Velocidade*/
    audio.style.marginTop = value * 1.1 + 'px' /*Velocidade*/

    folha1.style.marginLeft = -value + 'px'
    folha2.style.marginLeft = value + 'px'

    mata2.style.marginBottom = -value + 'px'

    mont1.style.marginBottom = -value * 1.1 + 'px'
    mont2.style.marginBottom = -value * 1.2 + 'px'
})