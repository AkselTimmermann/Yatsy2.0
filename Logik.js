let counter = 3 //tæller til at sørge for der kun er 3 slag i alt, opdateres efter hvert slag
const dices = []

// øvre sektion
let etere , toere, treere, firere, femere;
let sum; // nødvendig?
let bonus; // nødvendig?

// nedre sektion
let etPar, toPar, treEns, fireEns, lilleStraight, storeStraight, fuldtHus, chance, Yatzy;
let total; // nødvendig?

function decreaseCounter() {
    counter--
}

function resetCounter() {
    counter = 3
}

// Felterne 1-6 symboliserer hver sin terning. "Count" tæller hvor mange terninger der er af hver "størrelse"
// Feltet 0 bliver ikke brugt
function countEyes() {
        let counts = [0,0,0,0,0,0,0];
        for (let d of dices) {
            counts[d]++;
        }
        return counts;
    }



function upperSectionScore(eye) {
    let c = countEyes();
    return c[eye] * eye;
}

function sumScore(sectionScores) {
    let sum = 0;
    for (let score of sectionScores) {
        sum += score;
    }
    return sum;
}

function bonusScore(lockedUpperSectionScores) {
    if (sumScore(lockedUpperSectionScores) >= 63) {
        return 50;
    }
    else return 0;
}

// Starter med højeste tal (6). Hvis hvis der findes flere terninger, vælges den. 
function onePairScore() {
    let c = countEyes();
    for (let i = 6; i >= 1; i--) {
        if (c[i] >= 2) return i * 2;
    }
    return 0;
}

function twoPairScore() {
    let c = countEyes();
    let pairs = 0;
    let score = 0;
    for (let i = 6; i >= 1; i--) {
        if (c[i] >= 2) {
            pairs++;
            score += i * 2;
            if (pairs == 2) return score;
        }
    }
    return 0;
}

function threeOfAKindScore() {
    let c = countEyes();
    for (let i = 6; i >= 1; i--) {
        if (c[i] >= 3) return i * 3;
    }
    return 0;
}

function fourOfAKindScore() {
    let c = countEyes();
    for (let i = 6; i >= 1; i--) {
        if (c[i] >= 4) return i * 4;
    }
    return 0;
}

function smallStraightScore() {
    let c = countEyes();
    for (let i = 1; i <= 5; i++) {
        if (c[i] != 1) return 0;
    }
    return 15; // fast score
}

function largeStraightScore() {
    let c = countEyes();
    for (let i = 2; i <= 6; i++) {
        if (c[i] != 1) return 0;
    }
    return 20; // fast score
}

function fullHouseScore() {
    let c = countEyes();
    let three = 0, two = 0;
    for (let i = 1; i <= 6; i++) {
        if (c[i] == 3) three = i * 3;
        if (c[i] == 2) two = i * 2;
    }
    return (three > 0 && two > 0) ? three + two : 0;
}

function chanceScore() {
    let sum = 0;
    for (let d of dices) sum += d;
    return sum;
}

function yatzyScore() {
    let first = dices[0];
    for (let d of dices) {
        if (d != first) return 0;
    }
    return 50;
}

function totalScore(lockedUpperSectionScores, lockedLowerSectionScores) {
    return sumScore(lockedUpperSectionScores) + bonusScore(lockedUpperSectionScores) + sumScore(lockedLowerSectionScores);
}

export {dices, upperSectionScore, sumScore, bonusScore, onePairScore, twoPairScore, threeOfAKindScore, fourOfAKindScore, smallStraightScore, largeStraightScore, fullHouseScore, chanceScore, yatzyScore, decreaseCounter, counter, totalScore, resetCounter}