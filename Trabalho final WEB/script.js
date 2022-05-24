let mainWrapper = document.querySelector('.mainWrapper')

let butTwoPlaying = document.querySelector('#twoPlayers')
let butOnePlaying = document.querySelector('#onePlayer')



let numChoicedPlay1 = document.querySelector('#playerNumChoiced1')
let valueNumChoicedPlay1 = Number(numChoicedPlay1.value)

let numChoicedPlay2 = document.querySelector('#playerNumChoiced2')
let valueNumChoicedPlay2 = Number(numChoicedPlay2.value)

let numChoicedPlay3 = document.querySelector('#playerNumChoiced3')
let valueNumChoicedPlay3 = Number(numChoicedPlay3.value)


// Buttons Player 2

let numPlayer2ChoicedPlay1 = document.querySelector('#player2NumChoiced1')
let valueNumPlayer2ChoicedPlay1 = Number(numPlayer2ChoicedPlay1.value)

let numPlayer2ChoicedPlay2 = document.querySelector('#player2NumChoiced2')
let valueNumPlayer2ChoicedPlay2 = Number(numPlayer2ChoicedPlay2.value)

let numPlayer2ChoicedPlay3 = document.querySelector('#player2NumChoiced3')
let valueNumPlayer2ChoicedPlay3 = Number(numPlayer2ChoicedPlay3.value)



// Main Number
let wrapperMainNumber = document.querySelector('.mainNumberWrapper')
let mainNumber = Number(document.querySelector('.txtMainNumber').innerHTML)




//Num Victories
let numVictoriesWrapper = document.querySelector('.numOfGainsWrapper')

let numVictoriesPlayer1 = document.querySelector('.numOfGains')
let numVictoriesPlayer2 = document.querySelector('.numOfGainsPlayer2')





// Boo if turn player1
let isTurnPlayer1 = true

butTwoPlaying.onclick = () => {

    mainWrapper.style.opacity = 1
    mainWrapper.style.transform = 'translate(0,3rem)'

//Function verify if main number == 21 and turn player
let verifyMainNumber = (mainNumber) => {
    let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML)
    let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML)
    if(mainNumber === 21) {
        if(isTurnPlayer1) {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 1 Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain)
        } else {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 2 Venceu`
            numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain)
        }
        
}
    else if (mainNumber > 21) {
        if(isTurnPlayer1) {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 2 Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`
           wrapperPlayer.appendChild(buttonPlayAgain) 
        } else {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 1 Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain) 
        }
        

    }
}  



//Create button play again
let wrapperPlayer = document.querySelector('#sec1')
let buttonPlayAgain = document.createElement('button')

buttonPlayAgain.innerText = `Jogar Novamente`

//Styles Button
buttonPlayAgain.style.marginTop = '5rem'
buttonPlayAgain.style.padding = '1rem'
buttonPlayAgain.style.fontSize = '14pt'
buttonPlayAgain.style.backgroundColor = '#e7e7e7'
buttonPlayAgain.style.borderRadius = '10px'
buttonPlayAgain.style.cursor = 'pointer'


buttonPlayAgain.onclick = () => {
    mainWrapper.style.width = '60rem'
    wrapperMainNumber.innerHTML = `${mainNumber = 0}`

    valueNumChoicedPlay1 = 1
    valueNumChoicedPlay2 = 2
    valueNumChoicedPlay3 = 3
    valueNumPlayer2ChoicedPlay1 = 1
    valueNumPlayer2ChoicedPlay2 = 2
    valueNumPlayer2ChoicedPlay3 = 3

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3}`)
}


//Clicks Player1

numChoicedPlay1.addEventListener('click', () => {

    numPlayer2ChoicedPlay1.disabled = false
    numPlayer2ChoicedPlay2.disabled = false
    numPlayer2ChoicedPlay3.disabled = false

    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 1}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 1}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 1}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 1}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 1}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)

})

numChoicedPlay2.addEventListener('click', () => {

    numPlayer2ChoicedPlay1.disabled = false
    numPlayer2ChoicedPlay2.disabled = false
    numPlayer2ChoicedPlay3.disabled = false
    
    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true
    
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 2}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 2}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 2}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 2}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 2}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)
})

numChoicedPlay3.addEventListener('click', () => {

    numPlayer2ChoicedPlay1.disabled = false
    numPlayer2ChoicedPlay2.disabled = false
    numPlayer2ChoicedPlay3.disabled = false
    
    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true
   
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 3}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 3}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 3}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 3}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 3}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 3}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)
})

// Click Player 2

numPlayer2ChoicedPlay1.addEventListener('click', () => {
    
    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 1}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 1}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 1}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 1}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 1}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false

    verifyMainNumber(mainNumber)
})

numPlayer2ChoicedPlay2.addEventListener('click', () => {

    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 2}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 2}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 2}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 2}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 2}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false
    verifyMainNumber(mainNumber)
})

numPlayer2ChoicedPlay3.addEventListener('click', () => {

    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true
    
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 3}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 3}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 3}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 3}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 3}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 3}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false
    verifyMainNumber(mainNumber)
})
}


// One Player


butOnePlaying.onclick = () => {
    
    mainWrapper.style.opacity = 1
    mainWrapper.style.transform = 'translate(0,3rem)'

//Function verify if main number == 21 and turn player
let verifyMainNumber = (mainNumber) => {
    let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML)
    let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML)
    if(mainNumber === 21) {
        if(isTurnPlayer1) {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 1 Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain)
        } else {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Máquina Venceu`
            numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain)
        }
        
}
    else if (mainNumber > 21) {
        if(isTurnPlayer1) {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Computador Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`
           wrapperPlayer.appendChild(buttonPlayAgain) 
        } else {
            mainWrapper.style.width = '66rem'
            wrapperMainNumber.style.fontSize = '50pt'
            wrapperMainNumber.innerHTML = `Jogador 1 Venceu`
            numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
            wrapperPlayer.appendChild(buttonPlayAgain) 
        }
        

    }
}  



//Create button play again
let wrapperPlayer = document.querySelector('#sec1')
let buttonPlayAgain = document.createElement('button')

buttonPlayAgain.innerText = `Jogar Novamente`

//Styles Button
buttonPlayAgain.style.marginTop = '5rem'
buttonPlayAgain.style.padding = '1rem'
buttonPlayAgain.style.fontSize = '14pt'
buttonPlayAgain.style.backgroundColor = '#e7e7e7'
buttonPlayAgain.style.borderRadius = '10px'
buttonPlayAgain.style.cursor = 'pointer'


buttonPlayAgain.onclick = () => {
    mainWrapper.style.width = '60rem'
    wrapperMainNumber.innerHTML = `${mainNumber = 0}`

    valueNumChoicedPlay1 = 1
    valueNumChoicedPlay2 = 2
    valueNumChoicedPlay3 = 3
    valueNumPlayer2ChoicedPlay1 = 1
    valueNumPlayer2ChoicedPlay2 = 2
    valueNumPlayer2ChoicedPlay3 = 3

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3}`)
}


//Generate value 1 and 3
let valueGenereted = () => {
    let min = Math.ceil(1)
    let max = Math.floor(3)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let responseMachine = () => {
    let valueMachine = valueGenereted()
    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += valueMachine}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += valueMachine}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += valueMachine}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += valueMachine}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += valueMachine}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += valueMachine}`)
    isTurnPlayer1 = false
    wrapperMainNumber.innerHTML = `${mainNumber += valueMachine}`
    verifyMainNumber(mainNumber)
}



//Clicks Player1

numChoicedPlay1.addEventListener('click', () => {
    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 1}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 1}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 1}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 1}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 1}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    responseMachine()
    verifyMainNumber(mainNumber)
    
    
})

numPlayer2ChoicedPlay1.disabled = true
numPlayer2ChoicedPlay2.disabled = true
numPlayer2ChoicedPlay3.disabled = true

numChoicedPlay2.addEventListener('click', () => {
    
    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true
    
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 2}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 2}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 2}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 2}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 2}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    verifyMainNumber(mainNumber)
    responseMachine()
})

numChoicedPlay3.addEventListener('click', () => {
    
    numChoicedPlay1.disabled = true
    numChoicedPlay2.disabled = true
    numChoicedPlay3.disabled = true
   
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 3}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 3}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 3}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 3}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 3}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 3}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = true
    responseMachine()
    verifyMainNumber(mainNumber)
})



// Click Player 2

/*
numPlayer2ChoicedPlay1.addEventListener('click', () => {
    
    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 1}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 1}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 1}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 1}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 1}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 1}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 1}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false

    verifyMainNumber(mainNumber)
})

numPlayer2ChoicedPlay2.addEventListener('click', () => {

    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true

    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 2}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 2}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 2}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 2}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 2}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 2}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 2}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false
    verifyMainNumber(mainNumber)
})

numPlayer2ChoicedPlay3.addEventListener('click', () => {

    numChoicedPlay1.disabled = false
    numChoicedPlay2.disabled = false
    numChoicedPlay3.disabled = false

    numPlayer2ChoicedPlay1.disabled = true
    numPlayer2ChoicedPlay2.disabled = true
    numPlayer2ChoicedPlay3.disabled = true
    
    numChoicedPlay1.setAttribute('value', `${valueNumChoicedPlay1 += 3}`)
    numChoicedPlay2.setAttribute('value', `${valueNumChoicedPlay2 += 3}`)
    numChoicedPlay3.setAttribute('value', `${valueNumChoicedPlay3 += 3}`)
    numPlayer2ChoicedPlay1.setAttribute('value', `${valueNumPlayer2ChoicedPlay1 += 3}`)
    numPlayer2ChoicedPlay2.setAttribute('value', `${valueNumPlayer2ChoicedPlay2 += 3}`)
    numPlayer2ChoicedPlay3.setAttribute('value', `${valueNumPlayer2ChoicedPlay3 += 3}`)
    wrapperMainNumber.innerHTML = `${mainNumber += 3}`
    wrapperMainNumber.style.fontSize = '70pt'
    isTurnPlayer1 = false
    verifyMainNumber(mainNumber)
})*/

}