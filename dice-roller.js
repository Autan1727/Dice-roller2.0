const scoreResult = document.querySelector('.score');
const yenidenButton = document.querySelector('.yeniden')
const images = [];
let score = 5;

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    if (numOfDice > 10) {
        diceResult.textContent = 'Please enter a number between 0 to 10';
    } else if (numOfDice == 2) {
        
        if(score >= 20) {
          scoreResult.textContent = 'kazandınız'
          yenidenButton.classList.add('yeniden-2')
        }
         else if (score <= 0) {
            scoreResult.textContent = 'Oynayacak puanınız kalmadı!'
            yenidenButton.classList.add('yeniden-2')
        } 
        
         else {
            
            for (let i = 0; i < numOfDice; i++) {
                const value = Math.floor(Math.random() * 6) + 1;
                values.push(value);
                images.push(`<img src="DR-images/${value}.png">`);
            }
            diceResult.textContent = `dice: ${values.join(', ')}`;
            diceImages.innerHTML = images.join('');

            if (values[0] == values[1] && values[0] % 2 == 0 && values[1] % 2 == 0) {
                score += 10;
            } else if (values[0] == values[1]) {
                score += 3;
            } else if (values[0] % 2 == 0 && values[1] % 2 == 0) {
                score += 2;
            } else if (values[0] % 2 != 0 && values[1] % 2 != 0) {
                score += 2;
            }
            if (values[0] % 2 == 0 && values[1] % 2 != 0) {
                score -= 3;
                if (score <= 0) {
                    scoreResult.textContent = 'Oynayacak puanınız kalmadı!'
                    yenidenButton.classList.add('yeniden-2')
                } 
            }
            if (values[0] % 2 != 0 && values[1] % 2 == 0) {
                score -= 3;
                if (score <= 0) {
                    console.log('you dont have enough score to play!');
                    scoreResult.textContent = 'Oynayacak puanınız kalmadı!'
                    yenidenButton.classList.add('yeniden-2')
                } 
            }
            scoreResult.textContent = score; // score değerini güncelle
            return score;
        }
    } else {
        for (let i = 0; i < numOfDice; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="DR-images/${value}.png">`);
        }
        diceResult.textContent = `sonuç: ${values.join(', ')}`;
        diceImages.innerHTML = images.join('');
    }
}
