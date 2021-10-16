/*global Location, Direction,Arrow , PI_2, PI_1_2, UTILITY, A_R, A_L, CenterCircle, LevelData*/

var Game = function(levelData,width,height,successCallback,failCallback) {
   this.width = width;
   this.height = height;
   this.successCallback=successCallback;
   this.failCallback=failCallback;
   this.setLevelData(levelData);
};

Game.prototype.setLevelData = function(levelData){
   this.centerCircle = new CenterCircle(
         new Location(this.width * levelData.centerPosition.x,this.height * levelData.centerPosition.y),
         this.width * levelData.circleRadius,levelData.circleSpeed,levelData.arrowSpeed,levelData.level ,this.successCallback,this.failCallback);

   A_L = levelData.arrowLength;
   A_R = levelData.arrowRadius;
   
   var i;
   for (i = 0; i < levelData.arrowsCount; i++) {
      var angle = PI_2 / levelData.arrowsCount * i;
      var l = A_L + this.centerCircle.radius;
      var x = l * Math.cos(angle) + this.centerCircle.center.x;
      var y = l * Math.sin(angle) + this.centerCircle.center.y;

      var direction = Direction.Create(new Location(x, y),
      this.centerCircle.center);
      var arrow = new Arrow(A_L, new Location(x, y), direction, A_R, null);
      this.centerCircle.arrows.push(arrow);
   }
   
   this.centerCircle.waitLocation = new Location(
         this.width*levelData.waitPosition.x,
         this.height*levelData.waitPosition.y-A_R*2); 
   this.centerCircle.setRemainsTo(levelData.remainsCount);
};

Game.prototype.draw = function(ctx) {
   ctx.save();
   ctx.fillStyle = '#E0E0E0';
   ctx.fillRect(0, 0, this.width, this.height);
   this.centerCircle.draw(ctx);
   ctx.restore();
};

Game.prototype.update = function(){
   this.centerCircle.update();
   if(this.shootCounter === 0){
      
   }
};

Game.prototype.shoot = function(){
   this.centerCircle.shoot();
};