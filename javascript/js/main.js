

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

// non returnable 
function sumNumbers(x, y){
    console.log(x + y)
}

// returnable 
function sumNumbers2(x, y){
    return x + y
}


sumNumbers(10, 20)

let result = sumNumbers2(15, 25)
console.log(result * 2)
console.log(result * 3)
console.log(result * 4)
console.log(sumNumbers2(15, 25))

// CSS
// 1 word -> 1 word
// 2 word -> 1 word, camelCase


// ARRAY
// index      0       1        2
let cars = ['audi', 'bmw', 'citroen', true, 100, undefined]
console.log(cars[1])
cars[2] = 'porsche'
console.log(cars[2])
console.log('---------')

// loops, circle, foreach, for
for (let index = 0; // start 
    index < cars.length; // if
    index++) // increment/decrement
{
    const element = cars[index];
    console.log(element)
    
}

// debug - otladka oshibok

// increment by 1
// 3 + 1
/*
let index = index + 1
index += 1
index++ // increment 
*/
// decrement by 1
/*
let index2 = index2 - 1
index2 -= 1
index-- // decrement
*/



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

// example 1

let carsListDiv = document.getElementById('myCars')
let btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click', function(){

    for (let index = 0; index < cars.length; index++) {
        const element = cars[index];
        //carsListDiv.innerText += element + ', '
        carsListDiv.innerHTML += element + '<br>'
    }

})
