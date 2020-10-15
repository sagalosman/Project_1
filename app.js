const grid = document.querySelector('.grid')
const play = document.querySelector('button')
    // const fruit = document.querySelector('.apple')
const scoreValue = document.querySelector('.score')


// Specifying the width of the grid.
const width = 10
    // If I start snake off as undefined, this could
    // introduce bugs
let snake = 55
    // let body = [56, 57, 58]
let apple = 25
let direction = 'right'
    // let speed = 10
let score = 0
let snakeSpeed = 500
    // let snakeGrow = true


// Keep track of my cells
const cells = []

for (let i = 0; i < width ** 2; i++) {

    const div = document.createElement('div')
    div.classList.add('cell')
    div.innerHTML = i
    grid.appendChild(div)

    cells.push(div)

}


// START OF THE GAME THE SNAKE SHOULD SPEED TO THE RIGHT
play.addEventListener('click', () => {
    snakeMove()


})

function snakeMove() {

    const start = setInterval(() => {
        if (direction === 'right') {
            cells[snake].classList.remove('snake')
            snake += 1
            cells[snake].classList.add('snake')
        } else if (direction === 'left') {
            cells[snake].classList.remove('snake')
            snake -= 1
            cells[snake].classList.add('snake')
        } else if (direction === 'up') {
            cells[snake].classList.remove('snake')
            snake -= width
            cells[snake].classList.add('snake')
        } else if (direction === 'down') {
            cells[snake].classList.remove('snake')
            snake += width
            cells[snake].classList.add('snake')
        }


        // Collect points from the apple
        function foodCollisions() {
            console.log(cells[snake])
            if (cells[snake].classList.contains('apple')) {
                console.log('hello')
                score++
                scoreValue.innerHTML = score
                cells[apple].classList.remove('apple')
                apple = Math.floor(Math.random() * 100)
                cells[apple].classList.add('apple')
            }
        }

        function bodyGrowth() {

            if (cells[snake].classList.contains('apple')) {
                cells[snake].classList.add('snake', 'body')
                    // Array.from([56, 57, 58], x => x + x);
                cells[snake].classList.add('snake', 'body')


                // snakeSpeed = snakeSpeed - 20
            }
        }

        foodCollisions()
        bodyGrowth()




    }, snakeSpeed)




    // function moveSnake() {
    //   if  (snake % width === 0 && direction === 'left' ||
    //        snake % width === width -1  && direction === 'right' ||
    //        snake - width < 0  && direction === 'up' ||
    //        snake >= width * (width - 1 )  &&  direction === 'down'){
    //     console.log('tusam')
    //     return gameOver()
    //   }}

    cells[snake].classList.remove('snake')
    snake++
    cells[snake].classList.add('snake')

    document.addEventListener('keypress', (event) => {
        const key = event.key
        if (key === 'w' && !(snake < width)) {
            cells[snake].classList.remove('snake')
            snake -= width
            direction = 'up'
            cells[snake].classList.add('snake')
        } else if (key === 's' && !(snake > (width ** 2) - width - 1)) {
            cells[snake].classList.remove('snake')
            snake += width
            direction = 'down'
            cells[snake].classList.add('snake')
        } else if (key === 'a' && !(snake % width === 0)) {
            cells[snake].classList.remove('snake')
            snake -= 1
            direction = 'left'
            cells[snake].classList.add('snake')
        } else if (key === 'd' && !(snake % width === width - 1)) {
            cells[snake].classList.remove('snake')
            snake += 1
            direction = 'right'
            cells[snake].classList.add('snake')
        }
    })

    cells[apple].classList.add('apple')

}

// function gameOver() {


// }