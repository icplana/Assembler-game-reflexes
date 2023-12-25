
let users = [
    {
        username: 'Juan',
        score: '10 clicks'
    },
    {
        username: 'Maria',
        score: '40 clicks'
    },
    {
        username: 'Pedro',
        score: '103 clicks'
    },
    {
        username: 'Anna',
        score: '1033 clicks'
    },
    {
        username: 'Lidia',
        score: '12033 clicks'
    },
]

let clickCounter = 0

let playingUser = {
    username: '',
    score: ''
}



let startBtn = document.querySelector('.startBtn')
let startGameBtn = document.querySelector('.startGameBtn')
let clickCounterBtn = document.querySelector('.clickCounterBtn')
let playAgainBtn = document.querySelector('.playAgainBtn')

let startBox = document.querySelector('.startBox')
let startGameBox = document.querySelector('.startGameBox')
let gameBox = document.querySelector('.gameBox')
let resultsBox = document.querySelector('.resultsBox')
let userScoresBox = document.querySelector('.userScoresBox')


let printUsersResults = () => {
    let newDiv = document.createElement('div')
    
    users.forEach( user => {
        let newUserBox = document.createElement('div')
        let newUserNameP = document.createElement('p')
        newUserNameP.classList.add('bold')
        let newUserScoreP = document.createElement('p')
        newUserNameP.textContent = user.username
        newUserScoreP.textContent = user.score
        newUserBox.appendChild(newUserNameP)
        newUserBox.appendChild(newUserScoreP)

        newDiv.appendChild(newUserBox)        
    })

    userScoresBox.innerHTML = `<h3>User Scores</h3>`
    userScoresBox.appendChild(newDiv)



}

let startBtnClick = () => {
    if( document.querySelector('.inputUsername').value.length === 0 ){
        alert('Enter username')
        return
    }
    startBtn.removeEventListener('click', startBtnClick)
    playingUser.username = document.querySelector('.inputUsername').value
    startBox.classList.add('hidden')
    startGameBox.classList.remove('hidden')

}
let startGameBtnClick = () => {
    startGameBtn.removeEventListener('click', startBtnClick)
    startGameBox.classList.add('hidden')
    gameBox.classList.remove('hidden')
    setTimeout(() => {
        gameBox.classList.add('hidden')
        resultsBox.classList.remove('hidden')
        clickCounterBtn.removeEventListener('click', clickCounterBtnClick)
        playingUser.score = clickCounter++ + ' clicks'
        users.push(playingUser)
        printUsersResults()
        document.querySelector('.resultText').textContent = playingUser.score
    },
    100000)
}
let clickCounterBtnClick = () => {
    clickCounter++
    let newXposition = Math.round(Math.random()*window.innerWidth)*0.65
    let newYposition = Math.round(Math.random()*window.innerHeight)*0.9
    clickCounterBtn.style.position = "absolute"
    clickCounterBtn.style.top = newYposition + 'px'
    clickCounterBtn.style.left = newXposition + 'px'
    let newWidth = Math.floor(Math.random()*700)
    let newHeight = Math.floor(Math.random()*700)
    clickCounterBtn.style.width = newWidth + 'px'
    clickCounterBtn.style.height = newHeight + 'px'

}
let playAgainBtnClick = () => {
    location.reload()
}


document.addEventListener('DOMContentLoaded',() => {
    printUsersResults()
    startBtn.addEventListener('click', startBtnClick)
    startGameBtn.addEventListener('click', startGameBtnClick)
    clickCounterBtn.addEventListener('click', clickCounterBtnClick)
    playAgainBtn.addEventListener('click', playAgainBtnClick)
})

