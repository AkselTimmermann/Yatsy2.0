import { dices, onePairScore, decreaseCounter, counter, resetCounter } from "./Logik.js"
let slåKnap = document.querySelector('#terningerKnap')
let terninger = document.querySelectorAll('.terning')
let checkbox = document.querySelectorAll('.cb')
let slagTilbage = document.querySelector('#counter')

let etPar = document.querySelector('#etPar')

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
    etPar.value = onePairScore()
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
