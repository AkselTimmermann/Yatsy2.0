import { dices, upperSectionScore, 
    sumScore, bonusScore, 
    onePairScore, twoPairScore, threeOfAKindScore, fourOfAKindScore, fullHouseScore, smallStraightScore, largeStraightScore, chanceScore, yatzyScore, decreaseCounter, counter, 
    totalScore, resetCounter
} from "./Logik.js"
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
let sum = document.querySelector('#sum')
let bonus = document.querySelector('#bonus')

let etPar = document.querySelector('#etPar')
let toPair = document.querySelector('#toPar')
let treEns = document.querySelector('#treEns')
let fireEns = document.querySelector('#fireEns')
let lilleStraight = document.querySelector('#lilleStraight')
let storStraight = document.querySelector('#storStraight')
let fuldtHus = document.querySelector('#fuldtHus')
let chance = document.querySelector('#chancen')
let yatzy = document.querySelector('#yatzy')
let total = document.querySelector('#total')

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
        }
        slagTilbage.innerHTML = "Slag tilbage: " + counter
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
    let selectedUpperScores = [et, to, tre, fire, fem, seks].filter(v => v.disabled).map(v => parseInt(v.value))
    let selectedLowerScores = [etPar, toPair, treEns, fireEns, lilleStraight, storStraight, fuldtHus, chance, yatzy].filter(v => v.disabled).map(v => parseInt(v.value))

    sum.value = sumScore(selectedUpperScores)
    bonus.value = bonusScore(selectedUpperScores)
    total.value = totalScore(selectedUpperScores, selectedLowerScores)
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
    for (let cb of checkbox) {
        cb.checked = false
    }
    resetCounter()
})

nytSpil.addEventListener("click", function() {
    for (let v of variableArray) {
        v.disabled = false
        v.value = ""
    }
    for (let cb of checkbox) {
        cb.checked = false
    }
        for (let t of terninger) {
        t.src = "images/dice1.png"
    }
    resetCounter()

})
