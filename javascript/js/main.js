

let divWidth = 100

console.log('DIV width: ' + divWidth)

divWidth = '100px'

console.log('DIV width: ' + divWidth)

console.log (typeof 'abc') // string
console.log (typeof 10) // number
console.log (typeof 1.5) // number
console.log (typeof true) // boolean 
console.log (typeof null) // object
console.log (typeof []) // object
console.log (typeof {}) // object


function sumNumbers(x, y){
    console.log(x + y)
}

sumNumbers(10, 20)

// CSS
// 1 word -> 1 word
// 2 word -> 1 word, camelCase



function changeColor(color){
    document.getElementById('box').style.backgroundColor 
    = color // 'red'
}

changeColor('blue')

function moveRight(){
    document.getElementById('box').style.left = '100px'
}

function moveLeft(){
    document.getElementById('box').style.left = '-100px'
}

//moveRight()

document.getElementById('btnRight').
addEventListener('click', function(){ // callback function
    moveRight()
    console.log("result: " , 2+2)
})