import { dices, upperSectionScore, 
    sumScore, bonusScore, 
    onePairScore, twoPairScore, threeOfAKindScore, fourOfAKindScore, fullHouseScore, smallStraightScore, largeStraightScore, chanceScore, yatzyScore, decreaseCounter, counter, 
    totalScore, resetCounter, opdaterFelt
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
    opdaterFelt(et, upperSectionScore(1))
    opdaterFelt(to, upperSectionScore(2))
    opdaterFelt(tre, upperSectionScore(3))
    opdaterFelt(fire, upperSectionScore(4))
    opdaterFelt(fem, upperSectionScore(5))
    opdaterFelt(seks, upperSectionScore(6))

    opdaterFelt(etPar, onePairScore())
    opdaterFelt(toPair, twoPairScore())
    opdaterFelt(treEns, threeOfAKindScore())
    opdaterFelt(fireEns, fourOfAKindScore())
    opdaterFelt(lilleStraight, smallStraightScore())
    opdaterFelt(storStraight, largeStraightScore())
    opdaterFelt(fuldtHus, fullHouseScore())
    opdaterFelt(chance, chanceScore())
    opdaterFelt(yatzy, yatzyScore())
}

for (let v of variableArray) {
    v.addEventListener("click", function () {
        v.disabled = true
        let selectedUpperScores = [et, to, tre, fire, fem, seks].filter(v => v.disabled).map(v => parseInt(v.value))
        let selectedLowerScores = [etPar, toPair, treEns, fireEns, lilleStraight, storStraight, fuldtHus, chance, yatzy].filter(v => v.disabled).map(v => parseInt(v.value))
        
        sum.value = sumScore(selectedUpperScores)
        bonus.value = bonusScore(selectedUpperScores)
        total.value = totalScore(selectedUpperScores, selectedLowerScores)
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
    slagTilbage.innerHTML = "Slag tilbage: " + counter
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
    sum.value = ""
    total.value = ""
    bonus.value = ""
    resetCounter()
    slagTilbage.innerHTML = "Slag tilbage: " + counter

})
