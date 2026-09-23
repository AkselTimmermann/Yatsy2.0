import { dices, onePairScore, decreaseCounter, counter, resetCounter } from "./Logik.js"
let slåKnap = document.querySelector('#terningerKnap')
let terninger = document.querySelectorAll('.terning')
let checkbox = document.querySelectorAll('.cb')
let slagTilbage = document.querySelector('#counter')

let et = document.querySelector('#et')
let to = document.querySelector('#to')
let tre = document.querySelector('#tre')
let fire = document.querySelector('#fire')
let fem = document.querySelector('#fem')
let seks = document.querySelector('#seks')
let etPar = document.querySelector('#etPar')
let toPair = document.querySelector('#toPar')
let treEns = document.querySelector('#treEns')
let fireEns = document.querySelector('#fireEns')
let lilleStraight = document.querySelector('#lilleStraight')
let storStraight = document.querySelector('#storStraight')
let fuldtHus = document.querySelector('#fuldtHus')
let chance = document.querySelector('#chancen')
let yatzy = document.querySelector('#yatzy')

let variableArray = []
let nytSpil = document.querySelector('#nytSpilKnap')

slåKnap.addEventListener("click", function () {
    if (counter > 0) {
        for (let i = 0; i < terninger.length; i++) {
            if (!checkbox[i].checked) {
                let slag = Math.floor(Math.random() * 6) + 1
                terninger[i].src = "images/dice" + slag + ".png"
                dices[i] = slag
            }
        }
        decreaseCounter()
        opdaterValues()
        slagTilbage.innerHTML = "Slag tilbage: " + counter
    }
})

function opdaterValues() {
    //et.value = upperSectionScore(1)
    //upperSectionScore(2)
    //upperSectionScore(3)
    //upperSectionScore(4)
    //upperSectionScore(5)
    //upperSectionScore(6)
    etPar.value = onePairScore()
    toPair.value = twoPairScore()
    //treEns.value = threeOfAKindScore()
    //fireEns.value = fourOfAKindScore()
    //lilleStraight.value = smallStraightScore()
    //storStraight.value = largeStraightScore()
    //fuldtHus.value = fullHouseScore()
    //chance.value = chanceScore(dices)
    //yatzy.value = yatzyScore(dices)
}

for (let v of variableArray) {
    v.addEventListener("click", function () {
        v.disabled = true
    })
}

nytSpil.addEventListener("click", function() {
    resetCounter()
    for (let v of  variableArray) {

    }

})
