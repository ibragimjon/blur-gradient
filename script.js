const number = document.querySelector('h2')
const body = document.querySelector('body')

let counter = 0

const setCounter = setInterval(() => {
    counter++
    number.textContent = `${counter}%`
    number.style.opacity = `${(100 - counter)  /100}`
    body.style.backdropFilter = `blur(${5 - (counter / 100 ) *5 })`

    if(counter == 100){
        clearInterval(setCounter)
    }
}, 40)