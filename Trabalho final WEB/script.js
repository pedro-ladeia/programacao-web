let mainWrapper = document.querySelector(".mainWrapper");
let secWrapper = document.querySelector("#sec1");


//buttons choice num players and rules
let butTwoPlaying = document.querySelector("#twoPlayers");
let butOnePlaying = document.querySelector("#onePlayer");
let butRules = document.querySelector(".rulesPlayer");


//Inputs and values player 1
let numChoicedPlay1 = document.querySelector("#playerNumChoiced1");
let valueNumChoicedPlay1 = Number(numChoicedPlay1.value);

let numChoicedPlay2 = document.querySelector("#playerNumChoiced2");
let valueNumChoicedPlay2 = Number(numChoicedPlay2.value);

let numChoicedPlay3 = document.querySelector("#playerNumChoiced3");
let valueNumChoicedPlay3 = Number(numChoicedPlay3.value);


// Buttons Player 2
let numPlayer2ChoicedPlay1 = document.querySelector("#player2NumChoiced1");
let valueNumPlayer2ChoicedPlay1 = Number(numPlayer2ChoicedPlay1.value);

let numPlayer2ChoicedPlay2 = document.querySelector("#player2NumChoiced2");
let valueNumPlayer2ChoicedPlay2 = Number(numPlayer2ChoicedPlay2.value);

let numPlayer2ChoicedPlay3 = document.querySelector("#player2NumChoiced3");
let valueNumPlayer2ChoicedPlay3 = Number(numPlayer2ChoicedPlay3.value);


// Main Number
let wrapperMainNumber = document.querySelector(".mainNumberWrapper");
let mainNumber = Number(document.querySelector(".txtMainNumber").innerHTML);


//Num Victories
let numVictoriesWrapper = document.querySelector(".numOfGainsWrapper");

let numVictoriesPlayer1 = document.querySelector(".numOfGains");
let numVictoriesPlayer2 = document.querySelector(".numOfGainsPlayer2");


// Divs names players
let namePlayersWrapper = document.querySelector(".namePlayerWrapper");
let namePlayerWrapper2 = document.querySelector("#namePlayer2Wrapper");


//Input names
let namePlayer1 = document.querySelector("#namePlayer1");
let namePlayer2 = document.querySelector("#namePlayer2");


// But choice Name
let butRegisterNamePlayer1 = document.querySelector("#butEnterNamePlayer1");
let butRegisterNamePlayer2 = document.querySelector("#butEnterNamePlayer2");


//Create h3 name
let storageNamePlayer1 = document.createElement("h3");
let storageNamePlayer2 = document.createElement("h3");

// Inputs machine wrapper
let machineInputWrapper = document.querySelector(".playerNumChoicedWrapper");


// Functions to save name's player1 on the local storage
butRegisterNamePlayer1.addEventListener("click", () => {
  axios.get(`https://api.github.com/users/${namePlayer1.value}`)
    .then((response) => {
        localStorage.setItem("namep1", response.data.login);
        namePlayer1.remove();
        butRegisterNamePlayer1.remove();
        storageNamePlayer1.innerHTML = `${localStorage.getItem("namep1")}`;
        namePlayersWrapper.appendChild(storageNamePlayer1);
    })
    .catch(() => {
      alert(`A conta ${namePlayer1.value} não existe no Github`);
    });
});


// both sides of layout gaming
let sideAll = document.querySelector(".playerWrapper");
let namep2Wrapper = document.querySelector("#namePlayer2Wrapper");



// Functions to save name's player1 on the local storage
butRegisterNamePlayer2.addEventListener("click", () => {

    axios.get(`https://api.github.com/users/${namePlayer2.value}`)
    .then((response) => {
        localStorage.setItem("namep2", response.data.login)
        namePlayer2.remove();
        butRegisterNamePlayer2.remove();
        storageNamePlayer2.innerHTML = `${localStorage.getItem("namep2")}`;
        namePlayerWrapper2.appendChild(storageNamePlayer2);

        // Ajustando as divs que seguram os lados do jogador 1 e 2
        sideAll.style.width = "10.4rem";

        // Ajustando a div que segura o form de name do jogador 2
        namep2Wrapper.style.width = "9.8rem";
    })
    .catch(() => {
        alert(`A conta ${namePlayer2.value} não existe no Github`)
    })

  
});

// Creating how to play
let contentWrapper = document.createElement("div");
contentWrapper.style.marginTop = "2.5rem";

let paragraphOne = document.createElement("h3");
paragraphOne.innerHTML = `<i class="fa-solid fa-right-long"></i> O objetivo do jogo é chegar ao número 21, vence aquele que conseguir e  perde aquele que ultrapassar do 21.`;
contentWrapper.appendChild(paragraphOne);

let paragraphTwo = document.createElement("h3");
paragraphTwo.innerHTML = `<i class="fa-solid fa-right-long"></i> A dinâmica do jogo é baseada em turnos, cada jogar escolhe somar o número atual em +1, +2 ou +3.`;
paragraphTwo.style.marginTop = ".5rem";
contentWrapper.appendChild(paragraphTwo);

let paragraphThree = document.createElement("h3");
paragraphThree.innerHTML = `<i class="fa-solid fa-right-long"></i> Ex: O jogo começa com o número 0, o jogador 1 escolhe somar o 0 em +1, +2 ou +3, e então o turno passa a ser do jogador 2`;
paragraphThree.style.marginTop = ".5rem";
contentWrapper.appendChild(paragraphThree);
contentWrapper.style.transition = `3s ease all`;


// appending the rules on the main wrapper and appending on the wrapper
butRules.addEventListener("click", () => {
  contentWrapper.remove();
  contentWrapper.style.transform = `translate(0, 2rem)`;
  secWrapper.appendChild(contentWrapper);
});



// Turn off and turn on inputs player and toggle turn
let isTurnPlayer1;

let turnOffInputs = () => {
  if (isTurnPlayer1) {
    numChoicedPlay1.disabled = false;
    numChoicedPlay2.disabled = false;
    numChoicedPlay3.disabled = false;

    numPlayer2ChoicedPlay1.disabled = true;
    numPlayer2ChoicedPlay2.disabled = true;
    numPlayer2ChoicedPlay3.disabled = true;

    isTurnPlayer1 = false;
  } else {
    numChoicedPlay1.disabled = true;
    numChoicedPlay2.disabled = true;
    numChoicedPlay3.disabled = true;

    numPlayer2ChoicedPlay1.disabled = false;
    numPlayer2ChoicedPlay2.disabled = false;
    numPlayer2ChoicedPlay3.disabled = false;

    isTurnPlayer1 = true;
  }
};



//Function verify if main number == 21 and turn player
let verifyMainNumber = () => {
  let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML);
  let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML);
  if (mainNumber === 21) {
    if (isTurnPlayer1) {
      mainWrapper.style.width = "72rem";
      wrapperMainNumber.style.fontSize = "44pt";
      wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`;
      numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`;
      wrapperPlayer.appendChild(buttonPlayAgain);
    } else {
      mainWrapper.style.width = "72rem";
      wrapperMainNumber.style.fontSize = "44pt";
      wrapperMainNumber.innerHTML = `${localStorage.getItem("namep2")} Venceu`;
      numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`;
      wrapperPlayer.appendChild(buttonPlayAgain);
    }
  } else if (mainNumber > 21) {
    if (isTurnPlayer1) {
      mainWrapper.style.width = "72rem";
      wrapperMainNumber.style.fontSize = "44pt";
      wrapperMainNumber.innerHTML = `${localStorage.getItem("namep2")} Venceu`;
      numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`;
      wrapperPlayer.appendChild(buttonPlayAgain);
    } else {
      mainWrapper.style.width = "72rem";
      wrapperMainNumber.style.fontSize = "44pt";
      wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`;
      numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`;
      wrapperPlayer.appendChild(buttonPlayAgain);
    }
  }
};


//Function verify if number choiced >= 10
let verifyMoreThan9 = () => {
  let maxValue = 9;
  if (
    numChoicedPlay1.value > maxValue ||
    numChoicedPlay2.value > maxValue ||
    numChoicedPlay3 > maxValue ||
    numPlayer2ChoicedPlay1.value > maxValue ||
    numPlayer2ChoicedPlay2.value > maxValue ||
    numPlayer2ChoicedPlay3.value > maxValue
  ) {
    sideAll.style.width = "13rem";
  }
};



//Sum the value inputs and the main number
let sum1MainNumberAndInputs = () => {
  wrapperMainNumber.innerHTML = `${(mainNumber += 1)}`;

  numChoicedPlay1.setAttribute("value", `${(valueNumChoicedPlay1 += 1)}`);
  numChoicedPlay2.setAttribute("value", `${(valueNumChoicedPlay2 += 1)}`);
  numChoicedPlay3.setAttribute("value", `${(valueNumChoicedPlay3 += 1)}`);

  numPlayer2ChoicedPlay1.setAttribute("value",`${(valueNumPlayer2ChoicedPlay1 += 1)}`);
  numPlayer2ChoicedPlay2.setAttribute("value",`${(valueNumPlayer2ChoicedPlay2 += 1)}`);
  numPlayer2ChoicedPlay3.setAttribute("value",`${(valueNumPlayer2ChoicedPlay3 += 1)}`);
};

let sum2MainNumberAndInputs = () => {
  wrapperMainNumber.innerHTML = `${(mainNumber += 2)}`;

  numChoicedPlay1.setAttribute("value", `${(valueNumChoicedPlay1 += 2)}`);
  numChoicedPlay2.setAttribute("value", `${(valueNumChoicedPlay2 += 2)}`);
  numChoicedPlay3.setAttribute("value", `${(valueNumChoicedPlay3 += 2)}`);

  numPlayer2ChoicedPlay1.setAttribute("value",`${(valueNumPlayer2ChoicedPlay1 += 2)}`);
  numPlayer2ChoicedPlay2.setAttribute("value",`${(valueNumPlayer2ChoicedPlay2 += 2)}`);
  numPlayer2ChoicedPlay3.setAttribute("value",`${(valueNumPlayer2ChoicedPlay3 += 2)}`);
};

let sum3MainNumberAndInputs = () => {
  wrapperMainNumber.innerHTML = `${(mainNumber += 3)}`;

  numChoicedPlay1.setAttribute("value", `${(valueNumChoicedPlay1 += 3)}`);
  numChoicedPlay2.setAttribute("value", `${(valueNumChoicedPlay2 += 3)}`);
  numChoicedPlay3.setAttribute("value", `${(valueNumChoicedPlay3 += 3)}`);

  numPlayer2ChoicedPlay1.setAttribute("value",`${(valueNumPlayer2ChoicedPlay1 += 3)}`);
  numPlayer2ChoicedPlay2.setAttribute("value",`${(valueNumPlayer2ChoicedPlay2 += 3)}`);
  numPlayer2ChoicedPlay3.setAttribute("value",`${(valueNumPlayer2ChoicedPlay3 += 3)}`);
};



//Creating button play againg
let wrapperPlayer = document.querySelector("#sec1");
let buttonPlayAgain = document.createElement("button");
buttonPlayAgain.innerHTML = `<i class="fa-solid fa-arrow-rotate-left"></i>`;

//Styles Button
buttonPlayAgain.style.marginTop = "4.5rem";
buttonPlayAgain.style.padding = ".8rem";
buttonPlayAgain.style.fontSize = "18pt";
buttonPlayAgain.style.backgroundColor = "#f2fcfc";
buttonPlayAgain.style.borderRadius = "10px";
buttonPlayAgain.style.cursor = "pointer";
buttonPlayAgain.style.color = "#9736f7";
buttonPlayAgain.style.transition = ".5s ease all";
buttonPlayAgain.style.borderColor = "#9736f7";

buttonPlayAgain.onmouseenter = () => {
  buttonPlayAgain.style.boxShadow = "inset 0 4rem 0 0 #9736f7";
  buttonPlayAgain.style.color = "#fff";
};
buttonPlayAgain.onmouseleave = () => {
  buttonPlayAgain.style.boxShadow = " inset 0 0 0 0 transparent";
  buttonPlayAgain.style.color = "#9736f7";
};

buttonPlayAgain.onclick = () => {
  mainWrapper.style.width = "68rem";
  wrapperMainNumber.style.fontSize = "70pt";
  sideAll.style.width = "10.4rem";
  wrapperMainNumber.innerHTML = `${(mainNumber = 0)}`;

  valueNumChoicedPlay1 = 1;
  valueNumChoicedPlay2 = 2;
  valueNumChoicedPlay3 = 3;
  valueNumPlayer2ChoicedPlay1 = 1;
  valueNumPlayer2ChoicedPlay2 = 2;
  valueNumPlayer2ChoicedPlay3 = 3;

  numChoicedPlay1.setAttribute("value", `${valueNumChoicedPlay1}`);
  numChoicedPlay2.setAttribute("value", `${valueNumChoicedPlay2}`);
  numChoicedPlay3.setAttribute("value", `${valueNumChoicedPlay3}`);

  numPlayer2ChoicedPlay1.setAttribute("value",`${valueNumPlayer2ChoicedPlay1}`);
  numPlayer2ChoicedPlay2.setAttribute("value",`${valueNumPlayer2ChoicedPlay2}`);
  numPlayer2ChoicedPlay3.setAttribute("value",`${valueNumPlayer2ChoicedPlay3}`);
};



// Two Players
butTwoPlaying.onclick = () => {
  butTwoPlaying.disabled = true;
  contentWrapper.remove();
  mainWrapper.style.opacity = 1;
  mainWrapper.style.transform = "translate(0,3rem)";


  //Call all commom functions on the click of inputs
  let callInputsFunctions = () => {
    turnOffInputs();
    wrapperMainNumber.style.fontSize = "70pt";
    verifyMainNumber();
    verifyMoreThan9();
  };


  //Clicks Player1
  numChoicedPlay1.addEventListener("click", () => {
    sum1MainNumberAndInputs();
    callInputsFunctions();
  });

  numChoicedPlay2.addEventListener("click", () => {
    sum2MainNumberAndInputs();
    callInputsFunctions();
  });

  numChoicedPlay3.addEventListener("click", () => {
    sum3MainNumberAndInputs();
    callInputsFunctions();
  });


  // Click Player 2
  numPlayer2ChoicedPlay1.addEventListener("click", () => {
    sum1MainNumberAndInputs();
    callInputsFunctions();
  });

  numPlayer2ChoicedPlay2.addEventListener("click", () => {
    sum2MainNumberAndInputs();
    callInputsFunctions();
  });

  numPlayer2ChoicedPlay3.addEventListener("click", () => {
    sum3MainNumberAndInputs();
    callInputsFunctions();
  });
};



// One Player
butOnePlaying.onclick = () => {
  let pcName = document.createElement("h3");
  pcName.innerHTML = `Computador`;
  contentWrapper.remove();
  mainWrapper.style.opacity = 1;
  mainWrapper.style.transform = "translate(0,3rem)";
  butRegisterNamePlayer2.remove();
  namePlayer2.remove();
  namePlayerWrapper2.appendChild(pcName);
  sideAll.style.width = "12rem";
  //machineInputWrapper.style.width = '11rem'
  namep2Wrapper.style.width = "12rem";

  let verifyMainNumberOnePlayer = () => {
    let accVictoriesPLayer1 = Number(numVictoriesPlayer1.innerHTML);
    let accVictoriesPLayer2 = Number(numVictoriesPlayer2.innerHTML);
    if (mainNumber === 21) {
      if (isTurnPlayer1) {
        mainWrapper.style.width = "72rem";
        wrapperMainNumber.style.fontSize = "44pt";
        wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`;
        //numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`;
        wrapperPlayer.appendChild(buttonPlayAgain);

      } else {
        mainWrapper.style.width = "72rem";
        wrapperMainNumber.style.fontSize = "44pt";
        wrapperMainNumber.innerHTML = `Computador Venceu`;
        numVictoriesPlayer2.innerHTML = `${accVictoriesPLayer2 + 1}`;
        wrapperPlayer.appendChild(buttonPlayAgain);
      }
    } else if (mainNumber > 21) {
      if (isTurnPlayer1) {
        mainWrapper.style.width = "72rem";
        wrapperMainNumber.style.fontSize = "44pt";
        wrapperMainNumber.innerHTML = `Computador Venceu`;
        numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer2 + 1}`;
        wrapperPlayer.appendChild(buttonPlayAgain);
      } else {
        mainWrapper.style.width = "72rem";
        wrapperMainNumber.style.fontSize = "44pt";
        wrapperMainNumber.innerHTML = `${localStorage.getItem("namep1")} Venceu`;
        numVictoriesPlayer1.innerHTML = `${accVictoriesPLayer1 + 1}`;
        wrapperPlayer.appendChild(buttonPlayAgain);
        
      }
    }
  };

  let callCommomFunctions = () => {
    wrapperMainNumber.style.fontSize = "70pt";
    turnOffInputs();
    verifyMainNumberOnePlayer();
    verifyMoreThan9();
    responseMachine();
  };

  //Generate value 1 and 3
  let valueGenereted = () => {
    let min = Math.ceil(1);
    let max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function responseMachine() {
    setTimeout(() => {
      let valueMachine = valueGenereted();

      numChoicedPlay1.setAttribute("value",`${(valueNumChoicedPlay1 += valueMachine)}`);
      numChoicedPlay2.setAttribute("value",`${(valueNumChoicedPlay2 += valueMachine)}`);
      numChoicedPlay3.setAttribute("value",`${(valueNumChoicedPlay3 += valueMachine)}`);
      
      numPlayer2ChoicedPlay1.setAttribute("value",`${(valueNumPlayer2ChoicedPlay1 += valueMachine)}`);
      numPlayer2ChoicedPlay2.setAttribute("value",`${(valueNumPlayer2ChoicedPlay2 += valueMachine)}`);
      numPlayer2ChoicedPlay3.setAttribute("value",`${(valueNumPlayer2ChoicedPlay3 += valueMachine)}`);
      wrapperMainNumber.innerHTML = `${(mainNumber += valueMachine)}`;
      turnOffInputs();
      verifyMainNumberOnePlayer(mainNumber);
    }, 1000);
  }


  //Clicks Player1
  numChoicedPlay1.addEventListener("click", () => {
    sum1MainNumberAndInputs();
    callCommomFunctions();
  });

  numChoicedPlay2.addEventListener("click", () => {
    sum2MainNumberAndInputs();
    callCommomFunctions();
  });

  numChoicedPlay3.addEventListener("click", () => {
    sum3MainNumberAndInputs();
    callCommomFunctions();
  });
};