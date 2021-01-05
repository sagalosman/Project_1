const grid = document.querySelector('.grid')
const play = document.querySelector('button')
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
        // Place random food (e.g earth)
    earthGrid()

    function earthGrid() {

        const randomIndex = Math.floor(Math.random() * (width ** 2))
        score++

        scoreValue.innerHTML = score
        earth = randomIndex
        cells[randomIndex].classList.add('earth')
    }



    // Add star at the beginning


    document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') direction = 'right'
            else if (event.key === 'ArrowLeft') direction = 'left'
            else if (event.key === 'ArrowUp') direction = 'up'
            else if (event.key === 'ArrowDown') direction = 'down'
        })
 

    // Gets where the star head is gonna be next
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