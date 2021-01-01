// // Specifying the width of the grid.
// const width = 10
//     // If I start snake off as undefined, this could
//     // introduce bugs
// let snake = 55
//     // let body = [56, 57, 58]
// let apple = 25
// let direction = 'right'
//     // let speed = 10
// let score = 0
// let snakeSpeed = 500
//     // let snakeGrow = true


// // Keep track of my cells
// const cells = []

// for (let i = 0; i < width ** 2; i++) {

//     const div = document.createElement('div')
//     div.classList.add('cell')
//     div.innerHTML = i
//     grid.appendChild(div)

//     cells.push(div)

// }


// // START OF THE GAME THE SNAKE SHOULD SPEED TO THE RIGHT
// play.addEventListener('click', () => {
//     snakeMove()


// })

// function snakeMove() {

//     const start = setInterval(() => {
//         if (direction === 'right') {
//             cells[snake].classList.remove('snake')
//                 // snake.unshift(body)
//             snake += 1
//             cells[snake].classList.add('snake')
//         } else if (direction === 'left') {
//             cells[snake].classList.remove('snake')
//             snake -= 1
//             cells[snake].classList.add('snake')
//         } else if (direction === 'up') {
//             cells[snake].classList.remove('snake')
//             snake -= width
//             cells[snake].classList.add('snake')
//         } else if (direction === 'down') {
//             cells[snake].classList.remove('snake')
//             snake += width
//             cells[snake].classList.add('snake')
//         }
//         // const snakeHead = snakeMove()
//         // cells[snakeHead].classList.remove(sna)
//         // snake.unshift(snakeHead)

//         // if (snakeHead === !apple) {
//         //     snake.pop()
//         // }

//         // function checkCollision() {
//         //     const snakeHead = snake[55]
//         //         // Is the snake going to hit to wall?
//         //     if (
//         //         (direction === 'up' && (snakeHead < width)) ||
//         //         (direction === 'down' && (snakeHead > (width ** 2) - width - 1)) ||
//         //         (direction === 'left' && (snakeHead % width === 0)) ||
//         //         (direction === 'right' && (snakeHead % width === width - 1))
//         //     ) {
//         //         clearInterval(interval)
//         //         alert(`Game over, your final score is: ${points}`)
//         //         resetGame()
//         //     }
//         // }


//         // Collect points from the apple
//         function foodCollisions() {
//             console.log(cells[snake])
//             if (cells[snake].classList.contains('apple')) {
//                 console.log('hello')
//                 score++
//                 scoreValue.innerHTML = score
//                 cells[apple].classList.remove('apple')
//                 apple = Math.floor(Math.random() * 100)
//                 cells[apple].classList.add('apple')
//             }
//         }

//         function bodyGrowth() {

//             if (cells[snake].classList.contains('apple')) {
//                 cells[snake].classList.add('snake', 'body')
//                     // Array.from([56, 57, 58], x => x + x);
//                 cells[snake].classList.add('snake', 'body')


//                 // snakeSpeed = snakeSpeed - 20
//             }
//         }

//         foodCollisions()
//         bodyGrowth()

//     }, snakeSpeed)


//     cells[snake].classList.remove('snake')
//     snake++
//     cells[snake].classList.add('snake')

//     document.addEventListener('keypress', (event) => {
//         const key = event.key
//         if (key === 'w' && !(snake < width)) {
//             cells[snake].classList.remove('snake')
//             snake -= width
//             direction = 'up'
//             cells[snake].classList.add('snake')
//         } else if (key === 's' && !(snake > (width ** 2) - width - 1)) {
//             cells[snake].classList.remove('snake')
//             snake += width
//             direction = 'down'
//             cells[snake].classList.add('snake')
//         } else if (key === 'a' && !(snake % width === 0)) {
//             cells[snake].classList.remove('snake')
//             snake -= 1
//             direction = 'left'
//             cells[snake].classList.add('snake')
//         } else if (key === 'd' && !(snake % width === width - 1)) {
//             cells[snake].classList.remove('snake')
//             snake += 1
//             direction = 'right'
//             cells[snake].classList.add('snake')
//         }
//     })

//     cells[apple].classList.add('apple')





// }
const grid = document.querySelector('.grid')
const play = document.querySelector('button')
    // const fruit = document.querySelector('.apple')
const scoreValue = document.querySelector('.score')

const width = 10
const cells = []
const star = [55, 56]
let direction = 'right'
let points = 0
let earth


const audioPlayer = document.querySelector('audio')

score = 0
audioPlayer.src = './moon.mp3'
audioPlayer.play()

for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    grid.appendChild(cell)
    cells.push(cell)

}

  
play.addEventListener('click', () => {
    star.forEach((part) => {
            cells[part].classList.add('star')
        })
        // Place random food
    earthGrid()

    function earthGrid() {

        const randomIndex = Math.floor(Math.random() * (width ** 2))
        score++

        scoreValue.innerHTML = score
        earth = randomIndex
        cells[randomIndex].classList.add('earth')
    }



    // Add snake at the beginning


    document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') direction = 'right'
            else if (event.key === 'ArrowLeft') direction = 'left'
            else if (event.key === 'ArrowUp') direction = 'up'
            else if (event.key === 'ArrowDown') direction = 'down'
        })
        // if (direction === 'right') {
        //               cells[snake].classList.remove('snake')
        //                   // snake.unshift(body)
        //               snake += 1
        //               cells[snake].classList.add('snake')
        //           } else if (direction === 'left') {
        //               cells[snake].classList.remove('snake')
        //               snake -= 1
        //               cells[snake].classList.add('snake')
        //           } else if (direction === 'up') {
        //               cells[snake].classList.remove('snake')
        //               snake -= width
        //               cells[snake].classList.add('snake')
        //           } else if (direction === 'down') {
        //               cells[snake].classList.remove('snake')
        //               snake += width
        //               cells[snake].classList.add('snake')
        //           }

    // Gets where the snake head is gonna be next
    function nextStarHead() {
        let starHead = star[0]
        if (direction === 'left') starHead -= 1
        else if (direction === 'right') starHead += 1
        else if (direction === 'up') starHead -= width
        else if (direction === 'down') starHead += width
        return starHead
    }

    const interval = setInterval(() => {
        checkCollision()
        star.forEach((part) => {
            cells[part].classList.remove('star')
        })
        const starHead = nextStarHead()
        star.unshift(starHead)
        if (starHead === earth) {

            cells[earth].classList.remove('earth')
            points += 100
            earthGrid()
        } else {
            star.pop()
        }
        star.forEach((part) => {
            cells[part].classList.add('star')
        })
    }, 500)

    function checkCollision() {
        const starHead = star[0]
        if (
            (direction === 'up' && (starHead < width)) ||
            (direction === 'down' && (starHead > (width ** 2) - width - 1)) ||
            (direction === 'left' && (starHead % width === 0)) ||
            (direction === 'right' && (starHead % width === width - 1))
        ) {
            clearInterval(interval)
            resetGame()
        }
    }

    function resetGame() {
        window.location.reload()
    }

})