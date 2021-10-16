/*global Location, Direction , PI_2, PI_1_2, UTILITY,Arrow, A_R ,A_L*/

var CenterCircle = function(center,radius,speed,arrow_speed,level,successCallback,failCallback){
   center = center || new Location(0,0);
   radius = radius || 0;
   speed = speed || 0;
   level = level || 1;
   arrow_speed = arrow_speed || 0;
   failCallback = failCallback || null;
   successCallback = successCallback || null;
   
   this.center = center;
   this.radius = radius;
   this.arrows = [];
   this.remains = [];
   this.speed = speed;
   this.shootSpeed = arrow_speed;
   this.inAirArrows = [];
   this.level = level;
   
   this.waitLocation = new Location(0,0);
   this.stopUpdate = false;
   this.isSuccess = false;
   this.isFailed = false;
   this.alpha = 0.0;
   
   this.failCallback = failCallback;
   this.successCallback = successCallback;
};

CenterCircle.prototype.draw = function(ctx){
   var width  = ctx.canvas.width;
   var height = ctx.canvas.height;
   
   ctx.save();
   
   ctx.fillStyle = '#000000';
   ctx.beginPath();
   ctx.arc(this.center.x , this.center.y , this.radius, 0, PI_2);
   ctx.fill();
   
   ctx.save();
   ctx.font="25px Arial";
   ctx.fillStyle = '#FFFFFF';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   ctx.fillText(this.level, this.center.x, this.center.y);
   ctx.restore();
   
   if(!this.isSuccess){
      var i;
      for (i = 0; i < this.arrows.length; i++) {
         this.arrows[i].draw(ctx);
      }
   
      for(i=0 ; i<this.remains.length ;i++){
            this.remains[i].draw(ctx);
      }
      
      for(i=0 ; i<this.inAirArrows.length ;i++){
            this.inAirArrows[i].draw(ctx);
      }
   }
   
   
   if(this.isFailed){
      ctx.save();
      this.alpha+=0.01;
      if(this.alpha>1){
         this.alpha = 1;
      }
      ctx.fillStyle = 'rgba(0,0,0,'+this.alpha+')';
      ctx.fillRect(0,0, width, height);
      
      ctx.lineWidth = 1;
      ctx.font="45px Arial";
      ctx.fillStyle = '#FF0000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText("Failed", width/2, height/4);
      ctx.restore();
   }
   
   if(this.isSuccess){
      ctx.save();
      this.alpha+=0.01;
      if(this.alpha>1){
         this.alpha = 1;
      }
      ctx.fillStyle = 'rgba(0,0,0,'+this.alpha+')';
      ctx.fillRect(0,0, width, height);
      
      ctx.lineWidth = 1;
      ctx.font="45px Arial";
      ctx.fillStyle = '#00FF00';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText("Success", width/2, height/4);
      ctx.restore();
   }
   
   ctx.restore();
};


CenterCircle.prototype.shoot = function(){
   
   if(this.stopUpdate){
      return;
   }
   
   if (this.remains.length > 0) {
      var arrow = this.remains[0];
      this.remains.shift();
      arrow.name = null;
      this.inAirArrows.push(arrow);
   }
};

CenterCircle.prototype.update = function(){
   if(this.isSuccess){
      this.radius += 0.35;
   }
   
   if(this.isFailed){
      this.radius -= 0.05;
      for (i = 0; i < this.arrows.length; i++) {
         this.arrows[i].length += 0.05;
      }
      
      if(this.radius<0)
         this.radius=0;
   }
   
   if(this.stopUpdate){
      return;
   }
   
   var i;
   var arrow;
   
   //Arrows Circular Movment Animation
   for(i=0 ; i<this.arrows.length ;i++){
         arrow = this.arrows[i];
         var p = arrow.center;
         var c = this.center;
         var angle = arrow.direction.getAngle() + this.speed;
         p = UTILITY.RotatePoint(p, c, this.speed);
         arrow.center = p;
         arrow.direction = new Direction(angle);
   }
   
   var inAirMovment = [];
   
   //InAir to Arrow in circle
   var A_L_RADIUS = A_L + this.radius;
   for(i=0 ; i<this.inAirArrows.length ;i++){
       arrow = this.inAirArrows[i];
       arrow.update(this.shootSpeed);
      /*if (i === 0)*/ {
         var d = UTILITY.Distance(arrow.center, this.center);
         if (d <= (A_L + this.radius)) {
            this.inAirArrows.shift();
            arrow.length = A_L;
            arrow.center.x = this.center.x - arrow.direction.getXComponent() * (A_L_RADIUS);
            arrow.center.y = this.center.y - arrow.direction.getYComponent() * (A_L_RADIUS);
            inAirMovment.push(arrow);
         }
      }
   }
   
   //Remain Animation 
   var d2 = UTILITY.Distance(this.waitLocation,this.center );
   var A_R_4 = A_R/4;
   if(this.remains.length>0){
      arrow = this.remains[0];
      var d1 = UTILITY.Distance(arrow.center, this.center);
      
      if(d1>d2){
         for(i=0 ; i<this.remains.length ;i++){
            arrow = this.remains[i];
            arrow.update(A_R_4);
         }
      }
   }
   
   //detect collision
   // it is enough to detect first inAir item with arrows items
   if((this.inAirArrows.length>0 || inAirMovment.length>0) && this.arrows.length>0){
      for(c = 0 ; c < this.inAirArrows.length ; c++){
         var arrow = this.inAirArrows[c];
         for(i = 0 ; i < this.arrows.length ; i++){
            if(UTILITY.Distance(arrow.center,this.arrows[i].center)<=A_R*2){
               this.stopUpdate = true;
               arrow.color = '#FF0000';
               this.arrows[i].color = '#FF0000';
               if (this.failCallback)
                  this.failCallback();
               this.isFailed = true;
               return;
            }
         }
      }
      
      for(c = 0 ; c < inAirMovment.length ; c++){
         var arrow = inAirMovment[c];
         for(i = 0 ; i < this.arrows.length ; i++){
            if(UTILITY.Distance(arrow.center,this.arrows[i].center)<=A_R*2){
               this.stopUpdate = true;
               arrow.color = '#FF0000';
               this.arrows[i].color = '#FF0000';
               this.inAirArrows = this.inAirArrows.concat(inAirMovment);
               inAirMovment = [];
               if (this.failCallback)
                  this.failCallback();
               this.isFailed = true;
               return;
            }
         }
      }
      
      if(inAirMovment.length > 0){
         this.arrows = this.arrows.concat(inAirMovment);
         inAirMovment = [];
      }
      
   }
   
   
   if(this.inAirArrows.length === 0 && this.remains.length === 0){
      if (this.successCallback){
         this.successCallback();
      }
      this.stopUpdate = true;
      this.isSuccess = true;
   }
};

CenterCircle.prototype.setRemainsTo = function(count){
   var i;
   var direction = Direction.Create(this.waitLocation, this.center);
   for (i = 0; i < count; i++) {
      
      var arrow = new Arrow(0, new Location(this.waitLocation.x,this.waitLocation.y), direction, A_R, count-i);
      arrow.update(-A_R*2.5*i);
      this.remains.push(arrow);
   }
};