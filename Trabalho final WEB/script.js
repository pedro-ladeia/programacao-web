let mainWrapper = document.querySelector('.mainWrapper')

let secWrapper = document.querySelector('#sec1')

let butTwoPlaying = document.querySelector('#twoPlayers')
let butOnePlaying = document.querySelector('#onePlayer')
let butRules = document.querySelector('.rulesPlayer')



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




//
let namePlayersWrapper = document.querySelector('.namePlayerWrapper')
let namePlayerWrapper2 = document.querySelector('#namePlayer2Wrapper')

//Input names
let namePlayer1 = document.querySelector('#namePlayer1')
let namePlayer2 = document.querySelector('#namePlayer2')


// But choice Name
let butRegisterNamePlayer1 = document.querySelector('#butEnterNamePlayer1')
let butRegisterNamePlayer2 = document.querySelector('#butEnterNamePlayer2')


let storageNamePlayer1 = document.createElement('h3')
let storageNamePlayer2 = document.createElement('h3')



// Functions to save name's player on the local storage

butRegisterNamePlayer1.addEventListener('click', () => {

    localStorage.setItem("namep1", namePlayer1.value)
    namePlayer1.remove()
    butRegisterNamePlayer1.remove()
    storageNamePlayer1.innerHTML = `${localStorage.getItem("namep1")}`
    namePlayersWrapper.appendChild(storageNamePlayer1)

    //let leftSide = document.querySelector('.namePlayer2Wrapper')
    //rightSide.style.width = '10rem'
})
let sideAll = document.querySelector('.playerWrapper')
let namep2Wrapper = document.querySelector('#namePlayer2Wrapper')

butRegisterNamePlayer2.addEventListener('click', () => {
    localStorage.setItem("namep2", namePlayer2.value)
    namePlayer2.remove()
    butRegisterNamePlayer2.remove()
    storageNamePlayer2.innerHTML = `${localStorage.getItem("namep2")}`
    namePlayerWrapper2.appendChild(storageNamePlayer2)
    

    // Ajustando as divs que seguram os lados do jogador 1 e 2
   
    sideAll.style.width = '10.4rem'

    // Ajustando a div que segura o form de name do jogador 2
    
    namep2Wrapper.style.width = '9.8rem'
})

// Creating how to play
let contentWrapper = document.createElement('div')
contentWrapper.style.marginTop = '2rem'

let paragraphOne = document.createElement('h3')
paragraphOne.innerHTML = `<i class="fa-solid fa-right-long"></i> O objetivo do jogo é chegar ao número 21, vence aquele que conseguir e  perde aquele que ultrapassar do 21.`
contentWrapper.appendChild(paragraphOne)

let paragraphTwo = document.createElement('h3')
paragraphTwo.innerHTML = `<i class="fa-solid fa-right-long"></i> A dinâmica do jogo é baseada em turnos, cada jogar escolhe somar o número atual em +1, +2 ou +3.`
paragraphTwo.style.marginTop = '.5rem'
contentWrapper.appendChild(paragraphTwo)

let paragraphThree = document.createElement('h3')
paragraphThree.innerHTML = `<i class="fa-solid fa-right-long"></i> Ex: O jogo começa com o número 0, o jogador 1 escolhe somar o 0 em +1, +2 ou +3, e então o turno passa a ser do jogador 2`
paragraphThree.style.marginTop = '.5rem'
contentWrapper.appendChild(paragraphThree)
contentWrapper.style.transition = `3s ease all`

// Createing content and appending on the wrapper
butRules.addEventListener('click', () => {

    contentWrapper.remove()
    contentWrapper.style.transform = `translate(0, 2rem)`
    secWrapper.appendChild(contentWrapper)
})




// Boo if turn player1


butTwoPlaying.onclick = () => {
    let isTurnPlayer1 = true
    butTwoPlaying.disabled = true
    contentWrapper.remove()
    mainWrapper.style.opacity = 1
    mainWrapper.style.transform = 'translate(0,3rem)'
    namePlayersWrapper

    //Function verify if main number == 21 and turn player
    let verifyMainNumber = (mainNumber) => {
        let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML)
        let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML)
        if (mainNumber === 21) {
            if (isTurnPlayer1) {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`
                numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            } else {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep2")} Venceu`
                numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            }

        } else if (mainNumber > 21) {
            if (isTurnPlayer1) {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep2")} Venceu`
                numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            } else {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`
                numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            }


        }
    }



    //Create button play again
    let wrapperPlayer = document.querySelector('#sec1')
    let buttonPlayAgain = document.createElement('button')
    buttonPlayAgain.innerHTML = `<i class="fa-solid fa-arrow-rotate-left"></i>`

    //Styles Button
    buttonPlayAgain.style.marginTop = '5rem'
    buttonPlayAgain.style.padding = '.8rem'
    buttonPlayAgain.style.fontSize = '18pt'
    buttonPlayAgain.style.backgroundColor = '#f2fcfc'
    buttonPlayAgain.style.borderRadius = '10px'
    buttonPlayAgain.style.cursor = 'pointer'
    buttonPlayAgain.style.color = '#9736f7'
    buttonPlayAgain.style.transition = '.5s ease all'
    buttonPlayAgain.style.borderColor = '#9736f7'

    buttonPlayAgain.onmouseenter = () => {
        buttonPlayAgain.style.boxShadow = 'inset 0 4rem 0 0 #9736f7'
        buttonPlayAgain.style.color = '#fff'
        
    }
    buttonPlayAgain.onmouseleave = () => {
        buttonPlayAgain.style.boxShadow = ' inset 0 0 0 0 transparent'
        buttonPlayAgain.style.color = '#9736f7'
    }


    buttonPlayAgain.onclick = () => {
        mainWrapper.style.width = '68rem'
        wrapperMainNumber.style.fontSize = '70pt'
        sideAll.style.width = '10.4rem'
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


    //Function verify if number choiced >= 10 

    let verifyMoreThan9 = () => {
        let maxValue = 9
        if (numChoicedPlay1.value > maxValue || numChoicedPlay2.value > maxValue || numChoicedPlay3 > maxValue 
            || numPlayer2ChoicedPlay1.value > maxValue || numPlayer2ChoicedPlay2.value > maxValue || numPlayer2ChoicedPlay3.value> maxValue) {
                sideAll.style.width = '13rem'
            }

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
        verifyMainNumber()
        verifyMoreThan9()

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
        verifyMoreThan9()
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
        verifyMoreThan9()
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
        verifyMoreThan9()
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
        verifyMoreThan9()
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
        verifyMoreThan9()
        verifyMainNumber(mainNumber)
    })
}


// One Player


butOnePlaying.onclick = () => {
    let isTurnPlayer1 = true
    let pcName = document.createElement('h3')
    pcName.innerHTML = `Computador`
    contentWrapper.remove()
    mainWrapper.style.opacity = 1
    mainWrapper.style.transform = 'translate(0,3rem)'
    butRegisterNamePlayer2.remove()
    namePlayer2.remove()
    namePlayerWrapper2.appendChild(pcName)
    namep2Wrapper.style.width = '10rem'

    //Function verify if main number == 21 and turn player
    let verifyMainNumber = (mainNumber) => {
        let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML)
        let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML)
        if (mainNumber === 21) {
            if (isTurnPlayer1) {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`
                numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1++ }`
                wrapperPlayer.appendChild(buttonPlayAgain)
            } else {
                mainWrapper.style.width = '72rem'
                sideAll.style.width = '13rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `Computador Venceu`
                numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            }

        } else if (mainNumber > 21) {
            if (isTurnPlayer1) {
                mainWrapper.style.width = '72rem'
                sideAll.style.width = '13rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `Computador Venceu`
                numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`
                wrapperPlayer.appendChild(buttonPlayAgain)
            } else {
                mainWrapper.style.width = '72rem'
                wrapperMainNumber.style.fontSize = '44pt'
                wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`
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
        mainWrapper.style.width = '68rem'
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
        verifyMainNumber(mainNumber)
        responseMachine()
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
        verifyMainNumber(mainNumber)
        responseMachine()
    })
}