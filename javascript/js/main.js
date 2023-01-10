

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
let cars = ['audi', 'bmw', 'citroen', true, 100, undefined, 'abc', 200, 50, 170]
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
        if (typeof element == 'string'){
            //carsListDiv.innerText += element + ', '
            carsListDiv.innerHTML += element + '<br>'
        } 
        //           false
        else if (between(element) == true && typeof element == 'number')
        {
            carsListDiv.innerHTML += print(element, 'green-numbers')
        } 
        else if (between(element) == false && typeof element == 'number')
        {
            carsListDiv.innerHTML += print(element, 'red-numbers')
        }
    }
})

function between(checkNumber){ // 100
    let start = 150
    let end = 300

    if (typeof checkNumber == 'number' && 
    checkNumber >= start && checkNumber <= end) 
    {
        return true // if true then exit
    }
    return false 
}

function print(value, className){
    // <div class="red">100</div>
    return '<div class="' + className + '">' + value + '</div>'
}


/* IF statements */
/*
> grater
> smaller
== equal
>= greater and equal 
<= smaller and equal 
!= not equal
*/
result = 18;
//    true
if(result == 15){
    console.log('Result is 15')
} 
else if(result == 16){
    console.log('Result is 16')
// false
} else if (result > 16) {
    console.log('Result is grater than 10')
}
else { 
    console.log('Result is smaller than 10')
}

// 
// && - AND  - и
// true && true && true ... -> true 
// true && true && false ... -> false

// || - OR - или 
// true || false || false ... -> true
// false || false || false ... -> false

let result2 = 15
if (result == 18 && result2 == 16) {
    console.log('OK')
} 
else if (result >= 19 || result <= 10){
    console.log('Big and Small number')
} 
else if (result == 18 && result2 != 10 || result > 20)
{
    console.log('Result is good')
}

/* new example */

let divNumber = document.getElementById('number')
let btnPluss = document.getElementById('pluss')
let btnMinus = document.getElementById('minus')

btnPluss.addEventListener('click', function(){
    increment()
})
btnMinus.addEventListener('click', function(){
    decrement()
})

/* logic */
let number = 0 // global

function increment(){
    number = number + 1
    //number +=  1
    //number++
    divNumber.innerHTML = number
}
function decrement(){
    number = number - 1
    //number -=  1
    //number--
    divNumber.innerHTML = number
}