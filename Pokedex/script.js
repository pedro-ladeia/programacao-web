let app = document.querySelector('#app')
app.style.height = '98vh'
app.style.width = '60%'

app.style.backgroundColor = '#880000'

app.style.padding = '1rem 1.3rem 0 1.3rem'
app.style.borderRadius =  '.2rem'

app.style.display = 'flex'
app.style.flexDirection = 'column'

app.style.margin = 'auto'

let headerContent = document.createElement('div')
headerContent.style.width = '100%'
headerContent.style.height = '4rem'

headerContent.style.backgroundColor = '#000'
headerContent.style.display = 'flex'

headerContent.style.justifyContent = 'center'
headerContent.style.alignItems = 'center'

headerContent.style.borderRadius = '.938rem'

app.appendChild(headerContent)


let titleHeader = document.createElement('h1')
titleHeader.innerHTML = `POKEDEX`
titleHeader.style.fontFamily = 'fantasy'
titleHeader.style.color = '#fff'
titleHeader.style.letterSpacing = '.5rem'
titleHeader.style.fontSize = '40pt'

headerContent.appendChild(titleHeader)


let mainWrapper = document.createElement('div')
mainWrapper.style.marginTop = '1rem'
mainWrapper.style.display = 'flex'

app.appendChild(mainWrapper)


let formWrapper = document.createElement('div')
formWrapper.style.backgroundColor = '#000'
formWrapper.style.color = '#fff'

formWrapper.style.height = '34rem'
formWrapper.style.width = '50%'

formWrapper.style.paddingLeft = '1.5rem'

formWrapper.style.borderRadius = '.2rem'

mainWrapper.appendChild(formWrapper)


let formField = document.createElement('form')
formField.style.display = 'flex'
formField.style.flexDirection = 'column'
formField.style.justifyContent = 'space-between'
formField.style.fontSize = '14pt'

formWrapper.appendChild(formField)


// Name field

let labelInputName = document.createElement('label')
labelInputName.innerHTML = `NOME`
labelInputName.style.marginTop = '2rem'
labelInputName.style.fontFamily = 'Arial'

let inputName = document.createElement('input')
inputName.setAttribute('type', 'text')

inputName.style.marginLeft = '1rem'
inputName.style.width = '14rem'
inputName.style.padding = '.3rem'
inputName.style.backgroundColor = '#f7f7f7'
inputName.style.color = '#000'
inputName.style.fontSize = '14pt'


labelInputName.appendChild(inputName)
formField.appendChild(labelInputName)


//  Power field

let labelInputPower = document.createElement('label')
labelInputPower.innerHTML = `PODER`
labelInputPower.style.marginTop = '2rem'
labelInputPower.style.fontFamily = 'Arial'


let inputPower = document.createElement('input')
inputPower.setAttribute('type', 'text')

inputPower.style.marginLeft = '1rem'
inputPower.style.width = '14rem'
inputPower.style.padding = '.3rem'
inputPower.style.backgroundColor = '#f7f7f7'
inputPower.style.color = '#000'
inputPower.style.fontSize = '14pt'


labelInputPower.appendChild(inputPower)
formField.appendChild(labelInputPower)


// Atk field

let labelInputAtk = document.createElement('label')
labelInputAtk.innerHTML = `ATAQUE`
labelInputAtk.style.marginTop = '2rem'
labelInputAtk.style.fontFamily = 'Arial'

let inputAtk = document.createElement('input')
inputAtk.setAttribute('type', 'number')

inputAtk.style.marginLeft = '1rem'
inputAtk.style.width = '14rem'
inputAtk.style.padding = '.3rem'
inputAtk.style.backgroundColor = '#f7f7f7'
inputAtk.style.color = '#000'
inputAtk.style.fontSize = '14pt'


labelInputAtk.appendChild(inputAtk)
formField.appendChild(labelInputAtk)



// Defense field

let labelInputDef = document.createElement('label')
labelInputDef.innerHTML = `DEFESA`
labelInputDef.style.marginTop = '2rem'
labelInputDef.style.fontFamily = 'Arial'

let inputDef = document.createElement('input')
inputDef.setAttribute('type', 'number')

inputDef.style.marginLeft = '1rem'
inputDef.style.width = '14rem'
inputDef.style.padding = '.3rem'
inputDef.style.backgroundColor = '#f7f7f7'
inputDef.style.color = '#000'
inputDef.style.fontSize = '14pt'

labelInputDef.appendChild(inputDef)
formField.appendChild(labelInputDef)


// Type field


let labelInputType = document.createElement('label')
labelInputType.innerHTML = `TIPO`
labelInputType.style.marginTop = '2rem'
labelInputType.style.fontFamily = 'Arial'

let selectType = document.createElement('select')
selectType.style.marginLeft = '1rem'

let opt1 = document.createElement('option')
opt1.innerHTML = `ÁGUA`
selectType.appendChild(opt1)


let opt2 = document.createElement('option')
opt2.innerHTML = `FOGO`
selectType.appendChild(opt2)

let opt3 = document.createElement('option')
opt3.innerHTML = `PSÍQUICO`
selectType.appendChild(opt3)

let opt4 = document.createElement('option')
opt4.innerHTML = `PLANTA`
selectType.appendChild(opt4)

labelInputType.appendChild(selectType)
formField.appendChild(labelInputType)

let labelImg = document.createElement('label')
labelImg.innerHTML = `FOTO`
labelImg.style.marginTop = '2rem'
labelImg.style.fontFamily = 'Arial'

let inputImg = document.createElement('input')
inputImg.setAttribute('type', 'text')
inputImg.style.marginLeft = '1rem'
inputImg.style.width = '14rem'
inputImg.style.padding = '.3rem'
inputImg.style.backgroundColor = '#f7f7f7'
inputImg.style.color = '#000'
inputImg.style.fontSize = '14pt'

labelImg.appendChild(inputImg)
formField.appendChild(labelImg)



// Legend label

let labelLend = document.createElement('label')
labelLend.innerHTML = `LENDÁRIO?`
labelLend.style.marginTop = '.8rem'
labelLend.style.fontFamily = 'Arial'
labelLend.style.display = 'flex'
labelLend.style.alignItems = 'center'


let txtRadio = document.createElement('h4')
txtRadio.innerHTML = `SIM`
txtRadio.style.marginLeft = '1rem'
labelLend.appendChild(txtRadio)

let radioBoo = document.createElement('input')
radioBoo.setAttribute('type', 'radio')
radioBoo.setAttribute('name', 'isLegend')
radioBoo.setAttribute('id', 'trueLegend')
labelLend.appendChild(radioBoo)

let txtRadio2 = document.createElement('h4')
txtRadio2.innerHTML = `NÃO`
txtRadio2.style.marginLeft = '1rem'
labelLend.appendChild(txtRadio2)


let radioBoo2 = document.createElement('input')
radioBoo2.setAttribute('type', 'radio')
radioBoo2.setAttribute('name', 'isLegend')
radioBoo2.setAttribute('id', 'falseLegend')

labelLend.appendChild(radioBoo2)
formField.appendChild(labelLend)


// Button field


let butt = document.createElement('button')
let textButton = document.createTextNode("ADICIONAR")
butt.appendChild(textButton)
butt.setAttribute('type', 'button')
butt.style.marginTop = '.5rem'
butt.style.padding = '.5rem'
butt.style.fontSize = '14pt'
butt.style.width = '21rem'
butt.style.backgroundColor = 'transparent'
butt.style.color = '#fff'
butt.style.border = '2px solid #880000'
butt.style.borderRadius = '2px'
butt.style.cursor = 'pointer'
butt.style.transition = '.5s ease all'

butt.onmouseover = function() {
    butt.style.backgroundColor = '#880000'
}

butt.onmouseleave = () => {
    butt.style.background = 'transparent'
}

formField.appendChild(butt)



// Cards Field


let cardsField = document.createElement('div')
cardsField.style.backgroundColor = '#000'
cardsField.style.color = '#fff'

cardsField.style.height = '34rem'
cardsField.style.width = '50%'

cardsField.style.padding = '0 0 0 1rem'
cardsField.style.marginLeft = '1.9rem'

cardsField.style.borderRadius = '.2rem'

mainWrapper.appendChild(cardsField)

butt.onclick = () => {
    let card = document.createElement('div')
    card.style.backgroundColor = '#f7f7f7'
    card.style.height = '12rem'
    card.style.width = '21.14rem'
    card.style.marginTop = '2rem'
    card.style.padding = '1.3rem 0 1rem .5rem'
    card.style.color = '#000'
    card.style.display = 'flex'
    
    card.style.borderRadius = '15px'

    cardsField.style.color = '#000'

    let imgWrapper = document.createElement('img')
    imgWrapper.src = `${inputImg.value}`
    imgWrapper.style.height = '9rem'
    imgWrapper.style.width = '9rem'
    card.appendChild(imgWrapper)

    let contentCardWrapper = document.createElement('div')
    contentCardWrapper.style.height = '10rem'
    contentCardWrapper.style.width = '11rem'

    contentCardWrapper.style.color = '#000'

    contentCardWrapper.style.fontFamily = 'Arial'
    contentCardWrapper.style.fontSize = '11pt'

    contentCardWrapper.style.paddingLeft = '.7rem'

    card.appendChild(contentCardWrapper)


    let cardName = document.createElement('p')
    cardName.innerHTML = `${inputName.value.toUpperCase()}`
    contentCardWrapper.appendChild(cardName)

    let cardPower = document.createElement('p')
    cardPower.innerHTML = `PODER: ${inputPower.value}`
    contentCardWrapper.appendChild(cardPower)

    let cardAtk = document.createElement('p')
    cardAtk.innerHTML = `ATK: ${inputAtk.value}`
    contentCardWrapper.appendChild(cardAtk)

    let cardDef = document.createElement('p')
    cardDef.innerHTML = `DEF: ${inputDef.value}`
    contentCardWrapper.appendChild(cardDef)

    let cardType = document.createElement('p')
    cardType.innerHTML = `TIPO: ${selectType.value}`
    contentCardWrapper.appendChild(cardType)

    let isLegend = document.createElement('p')
    isLegend.style.padding = '.5rem'
    isLegend.style.width = '4.7rem'

    isLegend.style.color = '#fff'
    isLegend.style.backgroundColor = '#000'
    if(radioBoo.checked) {
    isLegend.innerHTML = `LENDÁRIO`
    contentCardWrapper.appendChild(isLegend)
    }

    cardsField.appendChild(card)
}

