window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    let game = new Game()
    game.start();
    
    document.onkeydown = ((e) => {
      if (e.key === "ArrowLeft") {
        game.player.directionX-= .2
      }
      if (e.key === "ArrowRight") {
        game.player.directionX += .2
      }
      if (e.key === "ArrowUp") {
        game.player.directionY -= .2
      }
      if (e.key === "ArrowDown") {
        game.player.directionY += .2
      }
      addEventListener("keyup", (event) => {game.player.directionX=0;game.player.directionY=0;})
    })

  }
  
};
