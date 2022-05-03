const roll1 = document.getElementById('roll1')
const roll2 = document.getElementById('roll2')
const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const rollNo1 = document.getElementById('rollNo1')
const rollNo2 = document.getElementById('rollNo2')
const total1 = document.getElementById('total1')
const total2 = document.getElementById('total2')
const reset = document.getElementById('reset')
document.getElementById('roll1').disabled = true
document.getElementById('hold1').disabled = true
document.getElementById('roll2').disabled = true
document.getElementById('hold2').disabled = true
document.getElementById('showText')
const turnCounter = document.getElementById('turnCounter')
let no1 = 0
let no2 = 0

function game() {
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('showText').innerHTML='Player 1 turn'
        document.getElementById('startButton').disabled = true
        player1()
    })
}

function diceRoll1() {
    let face = (Math.ceil(Math.random() * 6))
    rollNo1.innerHTML = face
    const diceImage = 'dice' + face + '.png'
    document.querySelectorAll('img')[0].setAttribute('src', diceImage)
        return (face);
}
function diceRoll2() {
    let face = (Math.ceil(Math.random() * 6))
    rollNo2.innerHTML = face
    const diceImage = 'dice' + face + '.png'
    document.querySelectorAll('img')[0].setAttribute('src', diceImage)
        return (face);
}



function gameReset() {
    no1 = 0
    no2 = 0
    rollNo1.innerHTML = 0
    rollNo2.innerHTML = 0
    total1.innerHTML = 0
    total2.innerHTML = 0
    document.getElementById('roll1').disabled = true
    document.getElementById('hold1').disabled = true
    document.getElementById('roll2').disabled = true
    document.getElementById('hold2').disabled = true
    }

    // This is the function for player 1 to hold the value of the dice roll
function player1() {
    document.getElementById('roll2').disabled = true
    document.getElementById('hold2').disabled = true
    document.getElementById('roll1').disabled = false
    document.getElementById('roll1').addEventListener('click', () => {
        no1 = diceRoll1()
        if (rollNo1.innerHTML == 1) {
            no1 = 0
            rollNo1.innerHTML = 0
            total1.innerHTML = 0
            document.getElementById('showText').innerHTML ='Oh No!\nPlayer 1 Rolled a 1!\nPlayer 1 resets'
            return player2()
        }
        document.getElementById('hold1').disabled = false
        document.getElementById('hold1').addEventListener('click', () => {
                total1.innerHTML = + total1.innerHTML + no1
                no1 = 0
                document.getElementById('roll1').disabled = true
                document.getElementById('hold1').disabled = true
                if (total1.innerHTML >= 20) {
                    gameReset()
                    document.getElementById('showText').innerHTML =('Player 1 Wins!')
                } player2()
            })
        })
    }             
// This is the function for player 1 to hold the value of the dice roll
function player2() {
    document.getElementById('roll1').disabled = true
    document.getElementById('hold1').disabled = true
    document.getElementById('roll2').disabled = false
    document.getElementById('roll2').addEventListener('click', () => {
        no2 = diceRoll2()
        if (rollNo2.innerHTML == 1) {
            no2 = 0
            rollNo2.innerHTML = 0
            total2.innerHTML = 0
            document.getElementById('showText').innerHTML ='Oh No!\nPlayer 2 Rolled a 1!\nPlayer 2 resets'
            return player1()
        }
        document.getElementById('hold2').disabled = false
        document.getElementById('hold2').addEventListener('click', () => {
                total2.innerHTML = + total2.innerHTML + no2
                no2 = 0
                document.getElementById('roll2').disabled = true
                document.getElementById('hold2').disabled = true
                if (total1.innerHTML >= 20) {
                    gameReset()
                    document.getElementById('showText').innerHTML ='Player 2 Wins!'
                } player1()
            })
        })
    }

gameReset()
game()