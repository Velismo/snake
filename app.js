document.addEventListener('DOMContentLoader', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //so first div in our grid
    let appleIndex = 0 //first div of our apple
    let currentSnake = [2,1,0] //so the div in our grid being 2 for the head and 0 being the end and 1 all the parts of the body
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //to start, and restart the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        //randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }













    //assing function to the keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if(e.keyCode === 39) {
            direction = 1 //if we press the right arrow in our keyboard pur snake will move to the right
        } else if (e.keyCode === 38) {
            direction = -width //if we press the up arrow, the snake will move up
        } else if (e.keyCode === 37) {
            direction = -1 //if we press left, the snake will move left
        } else if (e.keyCode === 40) {
            direction = +width //if we press down, the snake will move down
        }
    }

    document.addEventListener('keyup', control)
})