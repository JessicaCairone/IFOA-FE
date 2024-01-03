
const ball = document.getElementById('palla');
const startPosition = -150; 
const endPosition = 950; 
let speed = 20;
let myInterval = null;
const winnerScore = 5; 
const looserScore = 0;



    function animateBall() {
        myInterval = setInterval (move, 100); 
    }

 function move () {
 
  let currentPosition = ball.style.top; 
  console.log(currentPosition);
  currentPosition = currentPosition.replace('px', '');
  console.log(currentPosition);
  currentPosition = parseInt(currentPosition) + speed;
  console.log(currentPosition);
  ball.style.top = currentPosition + 'px'; 
  if (currentPosition > endPosition) {
    ball.style.top = startPosition + 'px';
    speed += 10; 
    let life = document.getElementById('life');
    let lifeScore = life.innerText; 
    lifeScore--; 
    life.innerText = lifeScore; 
    if(lifeScore === looserScore) {
      let audio = new Audio ('boom.wav');
      audio.play(); 
      alert('Hai perso! Ritenta'); 
      clearInterval(myInterval);
     
    }
 } 
      }   

      function gestPoints() {
        let scores = document.getElementById('number'); 
        let scoreCounter = scores.innerText;
        scoreCounter++; 
        scores.innerText = scoreCounter;
        ball.style.top = startPosition;
        speed += 20; 
        if (scoreCounter === winnerScore) {
          alert('Complimenti! Hai vinto!'); 
          clearInterval(myInterval);
        } 
        
      }

    

  window.onload = animateBall();