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

    //assing function to the keycodes
    
})