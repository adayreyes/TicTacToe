let cells = [];
current_player = "circle";
let game_over = false;

function getById(id) {
  return document.getElementById(id);
}

function addToArray(id) {
  if (!cells[id] && !game_over) {
    cells[id] = current_player;
    checkIcon(id);
    changePlayer();
    checkWinner()

  }
}

function checkIcon(id) {
  if (current_player == "circle") {
    showIcon(id, "circle");
  } else {
    showIcon(id, "cross");
  }
}

function showIcon(id, icon) {
  let img = getById(icon + "-" + id);
  img.style.display = "inline";
}

function changePlayer() {
  if (current_player == "circle") {
    current_player = "cross";
    stylePlayer("player1","player2")
    
} else {
    current_player = "circle";
    stylePlayer("player2","player1")
  }
}

function stylePlayer(grey,black){
    getById(grey).style.color = "grey";
    getById(black).style.color = "black";
}

let winner;

function checkWinner(){
    if(cells[0] == cells[1] && cells[1] == cells[2] && cells[0]){
        setWinner(0,"line-0",0)
    }
    if(cells[3] == cells[4] && cells[4] == cells[5] && cells[3]){
        setWinner(3,"line-1",0)
    }
    if(cells[6] == cells[7] && cells[7] == cells[8] && cells[6]){
        setWinner(6,"line-2",0)
    }
    if(cells[0] == cells[3] && cells[3] == cells[6] && cells[0]){
        setWinner(0,"line-3",90)
    }
    if(cells[1] == cells[4] && cells[4] == cells[7] && cells[1]){
        setWinner(1,"line-4",90)
    }
    if(cells[2] == cells[5] && cells[5] == cells[8] && cells[2]){
        setWinner(2,"line-5",90)
    }
    if(cells[0] == cells[4] && cells[4] == cells[8] && cells[0]){
        setWinner(0,"line-6",45)
    }
    if(cells[2] == cells[4] && cells[4] == cells[6] && cells[2]){
        setWinner(2,"line-7",-45)
    }
    
    setTimeout(checkEnd(), 2000);
}

function setWinner(cell,id,deg){
    winner = cells[cell];
    let line = getById(id);
    if(deg != 0){
        line.style.transform = `rotate(${deg}deg) scaleX(1)`;
    } else{
        line.style.transform = `scaleX(1)`;
    }
    changeLineColor(line);
    styleResult();
    gameOver()   
    
}

function changeLineColor(line){
    if(winner == "cross"){
        line.style.backgroundColor = "yellow";

    } else{
        line.style.backgroundColor = "blue";
    }
}

function styleResult(){
    let img = getById("winner-img");
    let text = getById("winner-text");
    if(winner == "cross"){
        img.src = "img/cross.png";
        text.style.color = "yellow";

    } else{
        img.src = "img/circle.png";
        text.style.color = "blue";
    }
}

function gameOver(){
    game_over = true;
    setTimeout(()=>{getById("game-over").style.transform = "scale(1)"},1500)
    
}

function drawEnd(){
    if(!winner){
        let text = getById("winner-text");
        let img = getById("winner-img");
        img.remove();
        text.innerHTML = "Draw";
        text.style.color = "white";

    } 
}

function checkEnd(){
    if(cells[0] && cells[1] && cells[2] && cells[3] && cells[4] && cells[5] && cells[6] && cells[7] && cells[8]){
        gameOver();
        drawEnd(winner);

    } 
}

