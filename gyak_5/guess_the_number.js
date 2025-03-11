const random = Math.floor(Math.random() * (1000_000 + 1));
const tries = 20;
let guess;

for (let i = 1; i <= tries; i++) {

    do {

        let promptVal = prompt(`Találd ki a számot! (${random}) Adj meg egy számot 0 és 1000.000 között!\nEnnyi próbálkozás maradt: ${tries - i}`);
        guess = parseInt(promptVal);

        if (isNaN(guess)) {
            alert("Nem számot adtál meg!");
        }

        else if (guess < 0 || guess > 1000_000) {
            alert("A számnak 0 és 1000.000 között kell lennie!");
        }

    } while (isNaN(guess) || guess < 0 || guess > 1000_000);


    if (guess == random) {
        alert(`Gratulálok, ${i} lépésből eltaláltad!`);
        break;
    }

    if (i == tries) {
        alert(`Sajnos ez most nem sikerült! A helyes válasz ${random} lett volna.`);
        break; 
    }


    else if (guess > random) {
        alert(`${i}. tipp nem talált: A megoldás kisebb.`);
    }

    else if (guess < random) {
        alert(`${i}. tipp nem talált: A megoldás nagyobb.`);
    }
}



