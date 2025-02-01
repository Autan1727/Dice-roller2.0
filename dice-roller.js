const scoreResult = document.querySelector('.score');

const atmaButton = document.querySelector('.atma-butonu')
const images = [];
let score = 5;
let oyunbittimi = false;


function rollDice() {
    if(!oyunbittimi){
        const numOfDice = document.getElementById("numOfDice").value;
        const diceResult = document.getElementById("diceResult");
        const diceImages = document.getElementById("diceImages");
        const values = [];
        const images = [];




        if (numOfDice > 10) {
            diceResult.textContent = '1 ile 10 arasında bir sayı girin!';
        } else if (numOfDice == 2) {
            
            
            
            if(score < 20 && score > 0) {
                
                for (let i = 0; i < numOfDice; i++) {
                    const value = Math.floor(Math.random() * 6) + 1;
                    values.push(value);
                    images.push(`<img src="DR-images/${value}.png">`);
                }
                diceResult.textContent = `dice: ${values.join(', ')}`;
                diceImages.innerHTML = images.join('');

                if (values[0] == values[1] && values[0] % 2 == 0 && values[1] % 2 == 0) {
                    setTimeout (function (){
                        alert('hem eşit hem çift yaptığınız için 10 puan kazandınız!')
                    },200)
                    
                    
                    score += 10;
                    if(score >= 20) {
                        scoreResult.textContent = 'kazandınız'
                     
                        atmaButton.classList.add('yeniden-2')
                        oyunbittimi = true;
                    }
                    
                } else if (values[0] == values[1]) {
                    setTimeout (function (){
                        alert('iki zar da eşit! 3 puan kazandınız!')
                    },200)
                    
                    
                    score += 3;
                    if(score >= 20) {
                        setTimeout (function (){
                            alert('KAZANDINIZ!')
                        },300)

                        scoreResult.textContent = 'kazandınız'
                        atmaButton.classList.add('yeniden-2')
                        atmaButton.textContent = 'Yeniden başlat'
                        oyunbittimi = true;
                    }
                } else if (values[0] % 2 == 0 && values[1] % 2 == 0) {
                    setTimeout (function (){
                        alert('iki zar da çift! 3 puan kazandınız!')
                    },200)
                    score += 3;
                    if(score >= 20) {
                        scoreResult.textContent = 'kazandınız'
                        setTimeout (function (){
                            alert('KAZANDINIZ!')
                        },300)
                        atmaButton.classList.add('yeniden-2')
                        atmaButton.textContent = 'Yeniden başlat'
                        oyunbittimi = true;
                    }
                } else if (values[0] % 2 != 0 && values[1] % 2 != 0) {
                    setTimeout (function (){
                        alert('iki zar da tek! 2 puan kazandınız!')
                    },200)
                    
                    score += 2;
                    if(score >= 20) {
                        scoreResult.textContent = 'kazandınız'
                       alert('KAZANDINIZ!')
                        atmaButton.classList.add('yeniden-2')
                        atmaButton.textContent = 'Yeniden başlat'
                        oyunbittimi = true;
                    }
                }
                else if (values[0] % 2 == 0 && values[1] % 2 != 0) {
                    setTimeout (function (){
                        alert('bir zar tek, bir zar çift 3 puan kaybettiniz :(')
                    },200)
                    score -= 3;
                    if (score < 0 || score == 0) {
                        scoreResult.textContent = 'Oynayacak puanınız kalmadı!'
                       
                        atmaButton.classList.add('yeniden-2')
                        atmaButton.textContent = 'Yeniden başlat'
                        oyunbittimi = true;
                    
                    } 
                }
                else if (values[0] % 2 != 0 && values[1] % 2 == 0) {
                    setTimeout (function (){
                        alert('bir zar tek, bir zar çift 3 puan kaybettiniz :(')
                    },200)
                    score -= 3;
                    if (score < 0 || score == 0) {
                        console.log('you dont have enough score to play!');
                        scoreResult.textContent = 'Oynayacak puanınız kalmadı!'
                        
                        atmaButton.classList.add('yeniden-2')
                        atmaButton.textContent = 'Yeniden başlat'
                        oyunbittimi = true;
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
 } else{
    location.reload();
 }
}
