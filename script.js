window.onload = function() {
    setGame();
}

function setGame() {

    // Create tile grid and give them each ID's
    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementsByClassName("board").appendChild(tile);
    }
}