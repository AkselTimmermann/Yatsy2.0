import { dices, upperSectionScore, onePairScore, twoPairScore, threeOfAKindScore, fourOfAKindScore, fullHouseScore, smallStraightScore, largeStraightScore, chanceScore, yatzyScore, decreaseCounter, counter } from "./Logik.js"
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

let variableArray = [et, to, tre, fire, fem, seks, etPar, toPair, treEns, fireEns, lilleStraight, storStraight, fuldtHus, chance, yatzy]
let nytSpil = document.querySelector('#nytSpilKnap')
let nyRunde = document.querySelector('#nyRundeKnap')

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
    et.value = upperSectionScore(1)
    to.value = upperSectionScore(2)
    tre.value = upperSectionScore(3)
    fire.value = upperSectionScore(4)
    fem.value = upperSectionScore(5)
    seks.value = upperSectionScore(6)
    etPar.value = onePairScore()
    toPair.value = twoPairScore()
    treEns.value = threeOfAKindScore()
    fireEns.value = fourOfAKindScore()
    lilleStraight.value = smallStraightScore()
    storStraight.value = largeStraightScore()
    fuldtHus.value = fullHouseScore()
    chance.value = chanceScore()
    yatzy.value = yatzyScore()
}

for (let v of variableArray) {
    v.addEventListener("click", function () {
        v.disabled = true
    })
}

nyRunde.addEventListener("click", function () {
    for (let v of variableArray) {
        if (!v.disabled) {
            v.value = ""
        }
    }
    for (let t of terninger) {
        t.src = "images/dice1.png"
    }
    resetCounter()
})

nytSpil.addEventListener("click", function() {
    for (let v of variableArray) {
        v.value = ""
    }
        for (let t of terninger) {
        t.src = "images/dice1.png"
    }
    resetCounter()
})
