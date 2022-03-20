var appEl = document.querySelector('#app')

var passEl = document.createElement('input')
passEl.setAttribute('placeholder', 'Escolha a cor do quadrado')
appEl.appendChild(passEl)

var but = document.createElement('button')
var texto = document.createTextNode("Criar quadrado")
but.appendChild(texto)
but.onclick = function() {
    var square = document.createElement('div')
    square.style.width = '5rem'
    square.style.height = '5rem'
    square.style.backgroundColor = passEl.value
    square.style.marginBottom = '1rem'
    appEl.appendChild(square) 
  
}
appEl.appendChild(but)



