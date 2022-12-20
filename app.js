const randomNumber = Math.round(Math.random() * (100 - 0) + 0)
const randomNumber2 = Math.round(Math.random() * (100 - 0) + 0)
console.log(randomNumber)
console.log(randomNumber2)
const click = document.querySelector('#btn1')
const userInput = document.querySelector('#input1')

click.addEventListener('click', function(){
    

    if(userInput.value == randomNumber){
        alert(`Bra jobba ${userInput.value} er riktig!!`)
    } 
    else if(userInput.value < randomNumber && userInput.value <= 100 && userInput.value >= 0){
        document.querySelector('.textBox2').innerHTML = `${userInput.value} er for lavt, prøv et høyere tall!`
    }
    else if(userInput.value > randomNumber && userInput.value <= 100 && userInput.value >= 0){
        document.querySelector('.textBox2').innerHTML = `${userInput.value} er for høyt, prøv et lavere tall!`
    } 
    else if(userInput.value > 100){
        document.querySelector('.textBox2').innerHTML = `DU MÅ SKRIVE ET TALL UNDER 100!!!`
    }
    else if(userInput.value < 0){
        document.querySelector('.textBox2').innerHTML = `DU MÅ SKRIVE ET POSETIVT TALL!!!`
    }
})

const click2 = document.querySelector('#btn2')

click2.addEventListener('click', function(){
    if(randomNumber2 == randomNumber){
        alert(`WOW SÅ LUCKY DU ER, DU FIKK FAKTISK RIKTIG, ${randomNumber2} ER DET HEMLIGE TALLET`)
    }
    else if(randomNumber2 != randomNumber){
        document.querySelector('.textBox2').innerHTML = `${randomNumber2} er feil, prøv på nytt ved å dubbel klikke knappen.`
    }
})

click2.addEventListener('dblclick', function(){
    window.location.reload()
})



