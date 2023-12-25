
let users = [
    {
        username: 'Juan',
        score: '1 second'
    },
    {
        username: 'Maria',
        score: '40 seconds'
    },
    {
        username: 'Pedro',
        score: '1.4 seconds'
    },
    {
        username: 'Anna',
        score: '0.5 seconds'
    },
    {
        username: 'Lidia',
        score: '0.1 seconds'
    },
]



let playingUser = {
    username: '',
    score: ''
}

let initialTime

let startBtn = document.querySelector('.startBtn')
let startGameBtn = document.querySelector('.startGameBtn')
let stopBtn = document.querySelector('.stopBtn')
let playAgainBtn = document.querySelector('.playAgainBtn')

let startBox = document.querySelector('.startBox')
let startGameBox = document.querySelector('.startGameBox')
let preGameBox = document.querySelector('.preGameBox')
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
    preGameBox.classList.remove('hidden')
    setTimeout(() => {
        preGameBox.classList.add('hidden')
        gameBox.classList.remove('hidden')
        initialTime = new Date().getTime()
    },
    1500)
}
let stopBtnClick = () => {
    let finishTime = new Date().getTime()
    let reactionTime = (finishTime - initialTime) / 1000
    
    playingUser.score = reactionTime + ' seconds'
    document.querySelector('.resultText').textContent = playingUser.score
    users.push(playingUser)
    printUsersResults()
    gameBox.classList.add('hidden')
    resultsBox.classList.remove('hidden')

    

}
let playAgainBtnClick = () => {
    location.reload()
}


document.addEventListener('DOMContentLoaded',() => {
    printUsersResults()
    startBtn.addEventListener('click', startBtnClick)
    startGameBtn.addEventListener('click', startGameBtnClick)
    stopBtn.addEventListener('click', stopBtnClick)
    playAgainBtn.addEventListener('click', playAgainBtnClick)
})

