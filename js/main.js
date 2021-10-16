var game = null;
var GameStatus = {
      gameVersion : 1.0,
      level : 0
};
window.onload = function() {
   // TODO:: Do your initialization job
   
   var W = window.outerWidth;
   var H = window.outerHeight;

   
   localStorage.gameStatus = localStorage.gameStatus|| JSON.stringify(GameStatus);

   // add eventListener for tizenhwkey
   document.addEventListener('tizenhwkey', function(e) {
      
      if (e.keyName === "back") {
                  try {
             tizen.application.getCurrentApplication().exit();
         } catch (ignore) {
      }}
      });

   
   
   var canvas = document.getElementById('game_canvas');


   if (H > W) {
      canvas.style.width = "100%";
      canvas.style.height = W / H * 100 + "%";
      canvas.style.top = (1 - W/H) * 50 + "%";
   } else {
      canvas.style.height = "100%";
      canvas.style.width = H / W * 100 + "%";
      canvas.style.left = (1 - H/W) * 50 + "%";
   }

   var Side = Math.min(W, H);
   W = Side;
   H = Side;
   canvas.width = W;
   canvas.height= H;
   
   var ctx = canvas.getContext("2d");
   ctx.lineWidth= 3;
   
   
   GameStatus = JSON.parse(localStorage.gameStatus);
   
   game = new Game(
         LevelDataArray[GameStatus.level],
         W,
         H,
         function(){
            setTimeout(function(){
               GameStatus.level++;
               if(GameStatus.level>= LevelDataArray.length){
                  alert("Great !!! You finished all levels");
                  alert("Please wait for new levels that we will be added soon");
                  if (confirm('Do you replay levels again?')) {
                     GameStatus.level = 0;
                  } else {
                     GameStatus.level = LevelDataArray.length-1;
                  }
               }
               localStorage.gameStatus = JSON.stringify(GameStatus);
               game.setLevelData(LevelDataArray[GameStatus.level]);
            }, 2500);
         },
         function(){
            setTimeout(function(){
               game.setLevelData(LevelDataArray[GameStatus.level]);
            }, 2500);
         });

   var counter=0;
   setInterval(function() {
      counter++;
      if (counter > 0) {
         counter = 0;
         game.draw(ctx);
      }
      
      game.update();
      
      
   }, 24);

   
   window.addEventListener('touchstart', function(event) {
      game.shoot();
   });

   window.addEventListener('keyup', function(event) {
	game.shoot();
 });
};
