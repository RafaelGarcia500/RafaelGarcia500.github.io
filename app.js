const btns = document.querySelectorAll(`button`)
    
   let playerScore = 0
   let computerScore = 0
   let gameRound = 0



    btns.forEach((btn) => { /* inputs the choice of the player and the computer */
    btn.addEventListener(`click`,() =>{
        const para = document.createElement(`p`)
        para.classList.add(`playerChoice`)
        para.textContent = `Player has chosen`+` `+ btn.id
        clearButtons()
        computerChoice()
        showResults(btn.id)
        btn.appendChild(para)
        gameRound++
        if(gameRound >= 5){
            showWinner()
            
        } 
        
    })
})
 
 function showWinner(){
    if(playerScore > computerScore ){
        let roundOutcome = document.createElement(`h3`)
        let restartInput = document.createElement(`button`)
        restartInput.classList.add(`restartButton`)
        roundOutcome.classList.add(`resultText`)
        roundOutcome.textContent = `the player has won the match!`
        restartInput.textContent = `Play again?`
        restartInput.addEventListener(`click`,refreshPage)
        clearRButtons()
        clearBbutton()
        document.querySelector(`body`).appendChild(restartInput)
        document.querySelector(`body`).appendChild(roundOutcome)
        

    }
    else if( playerScore < computerScore){
        let roundOutcome = document.createElement(`h3`)
        let restartInput = document.createElement(`button`)
        restartInput.classList.add(`restartButton`)
        roundOutcome.classList.add(`resultText`)
        roundOutcome.textContent = `the computer has won the match!`
        restartInput.textContent = `Play again?`
        restartInput.addEventListener(`click`,refreshPage)
        clearRButtons()
        clearBbutton()
        document.querySelector(`body`).appendChild(restartInput)
        document.querySelector(`body`).appendChild(roundOutcome)
        
        

    }
 }


 function computerChoice() {             /*Selects a random id from the buttons          */
    const choices = [document.getElementById(`Rock`), document.getElementById(`Paper`), document.getElementById(`Scissors`)];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomIndex].id;

    const cpara = document.createElement(`p`);
    cpara.classList.add(`computerChoice`);
    cpara.textContent = `Computer has chosen ${computerSelection}`
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
                playerScore++
                let resultText = document.createElement(`h2`)
                resultText.classList.add(`resultText`)
                resultText.textContent = `Awesome, ¡you just won!`
                clearRButtons()
                document.querySelector(`body`).appendChild(resultText)
            }
    else{
        computerScore++
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
 function clearBbutton(){
    const existingPara = document.querySelector(`.restartButton`)
    if(existingPara){
        existingPara.parentNode.removeChild(existingPara)
 }

 }

 function refreshPage() {
     playerScore = 0
     computerScore = 0
     gameRound = 0
    clearButtons()
    clearcButtons()
    clearRButtons()
    location.reload();
  }
