let currentMoleTile;
let currentSkunkTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

// Create tile grid and give them each ID's
function setGame() {
    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById("board").appendChild(tile);
    };

    setInterval(setMole, 1000) // Changes mole location every 2 seconds
    setInterval(setSkunk, 2000) // Changes skunk location every 3 seconds
}

// Function to pick random tile
function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    console.log(num);
    return num.toString();
}


// Set the mole in randomly picked tile
function setMole() {
    if (gameOver) {
        return;
    }
    if(currentMoleTile) {
        currentMoleTile.innerHTML = '';
    }   

    let mole = document.createElement("img");
    mole.src = './mole.png';

    let num = getRandomTile();
    if(currentSkunkTile && currentSkunkTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setSkunk() {
    if (gameOver) {
        return;
    }
    if(currentSkunkTile) {
        currentSkunkTile.innerHTML = '';
    }

    let skunk = document.createElement('img');
    skunk.src = './skunk.png';
    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == num) {
        return;
    }

    currentSkunkTile = document.getElementById(num);
    currentSkunkTile.appendChild(skunk);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById('score').innerText = score.toString();
    } 
    else if (this == currentSkunkTile) {
        document.getElementById('score').innerText = "GAME OVER! Your score: " + score.toString();
        gameOver = true;
    }
}