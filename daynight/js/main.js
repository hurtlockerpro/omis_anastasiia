
let body = document.body
let greeting = document.getElementById('greeting')
let currentTime = document.getElementById('currentTime')

const GREETING_DAY = 'Good Day'
const GREETING_NIGHT = 'Good Night'

function getImageURL(imageID){
    // https://picsum.photos/id/237/200/300
    return 'https://picsum.photos/id/' + imageID + '/1920/1080'
}

console.log( getImageURL(62) )

if (getDayPart() == 'day')
{
    body.style.backgroundImage = 'url("' + getImageURL(62) + '")'
    greeting.classList.add('greeting-day-style')
    currentTime.classList.add('currentTime-day-style')
    greeting.innerText = GREETING_DAY
}
else if (getDayPart() == 'night')
{
    body.style.backgroundImage = 'url("' + getImageURL(84) + '")'
    greeting.classList.add('greeting-night-style')
    currentTime.classList.add('currentTime-night-style')
    greeting.innerText = GREETING_NIGHT
}

function getDayPart()
{
    let myDate = new Date()
    //    0      1     2
    // ['jan', 'feb', '']
    // 01.01.1970 -> timestamp
    console.log('Today is ' + myDate.toUTCString())
    console.log('Today is ' + myDate.getSeconds())

    let hour = myDate.getHours()
    if (hour >= 6 && hour <= 17)
    {
        return 'day'
    } else {
        return 'night'
    }
}


function showTime(){

    setInterval(function(){
        
        let cTime = new Date()

        let cHour = cTime.getHours()
        let cMinute = cTime.getMinutes()
        let cSecond = cTime.getSeconds()

        if (cHour < 10) cHour = '0' + cHour
        if (cMinute < 10) cMinute = '0' + cMinute
        if (cSecond < 10) cSecond = '0' + cSecond

        currentTime.innerText = cHour + ':' + cMinute + ':' + cSecond

    }, 1000)


}

showTime()