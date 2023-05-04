const btns = document.querySelectorAll(`button`)

    btns.forEach((btn) => { /* inputs the choice of the player and the computer */
    btn.addEventListener(`click`,() =>{
        const para = document.createElement(`p`)
        para.classList.add(`playerChoice`)
        para.textContent = `Player has chosen`+` `+ btn.id
        clearButtons()
        computerChoice()
        showResults(btn.id)

        btn.appendChild(para)
        
    })
})

 


 function computerChoice() {             /*Selects a random id from the buttons          */
    const choices = [document.getElementById(`Rock`), document.getElementById(`Paper`), document.getElementById(`Scissors`)];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomIndex].id;

    const cpara = document.createElement(`p`);
    cpara.classList.add(`computerChoice`);
    cpara.textContent = `Computer has chosen ${computerSelection}`;
    clearcButtons();
    choices[randomIndex].appendChild(cpara);
}


function showResults(playerDecition){  /* checks the result */
    const computerDecition = document.querySelector(`.computerChoice`).textContent.split(` `)[3]
    
    if( playerDecition === computerDecition ){
      let resultText = document.createElement(`h2`)
     resultText.classList.add(`resultText`)
     resultText.textContent = `It is a tie!`
     clearRButtons()
     document.querySelector(`body`).appendChild(resultText)
  }
    else if(playerDecition === `Rock` && computerDecition === `Scissors`||
            playerDecition === `Paper` && computerDecition === `Rock`||
            playerDecition === `Scissors` && computerDecition === `Paper`){
                let resultText = document.createElement(`h2`)
                resultText.classList.add(`resultText`)
                resultText.textContent = `Awesome, ¡you just won!`
                clearRButtons()
                document.querySelector(`body`).appendChild(resultText)
            }
    else{
        let resultText = document.createElement(`h2`)
            resultText.classList.add(`resultText`)
            resultText.textContent = `That is too bad, you lose..`
            clearRButtons()
            document.querySelector(`body`).appendChild(resultText)
    }
  }


 function clearButtons(){
    const existingPara = document.querySelector(`.playerChoice`)
    if (existingPara) {
    existingPara.parentNode.removeChild(existingPara);
}}                                                         /*clear previous inputs */
 function clearcButtons(){
    const existingPara = document.querySelector(`.computerChoice`)
    if (existingPara) {
    existingPara.parentNode.removeChild(existingPara);
}
  }
 function clearRButtons(){
    const existingPara = document.querySelector(`.resultText`)
    if (existingPara){
        existingPara.parentNode.removeChild(existingPara)
    }

 }
