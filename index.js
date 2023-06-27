// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)

render()

function render(){
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog(){
    currentDogIndex += 1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)
    getNewDog()
}