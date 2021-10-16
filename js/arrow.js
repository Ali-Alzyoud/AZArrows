/*global Location, Direction , PI_2, PI_1_2*/

var TEXTSTYLE = '#FFFFFF';
var A_L = 40;
var A_R = 8;

var Arrow = function(length,center,direction,radius,name) {
   length = length || 0;
   center = center || new Location(0, 0);
   direction = direction || new Direction(0);
   radius = radius || 0;
   name = name || null;
   
   this.length = length;
   this.center = center;
   this.direction = direction;
   this.radius = radius;
   this.name = name;
   this.color = '#000000';
};

Arrow.prototype.draw = function(ctx) {
   
   var x1 = this.center.x;
   var y1 = this.center.y;
   var x2 = this.direction.getXComponent()*this.length + x1;
   var y2 = this.direction.getYComponent()*this.length + y1;
   
   
   ctx.save();
   ctx.strokeStyle = this.color;
   ctx.fillStyle = this.color;
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.moveTo(x1,y1);
   ctx.lineTo(x2,y2);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(x1,y1,this.radius,0,PI_2);
   ctx.fill();
   if(this.name!=null){
      ctx.beginPath();
      ctx.fillStyle = TEXTSTYLE;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(x1,y1);
      ctx.rotate(this.direction.getAngle()+PI_1_2);
      ctx.translate(-x1,-y1);
      ctx.fillText(this.name,x1,y1);
   }
   ctx.restore();
};

Arrow.prototype.update = function(distance) {
   var x = this.direction.getXComponent()*distance + this.center.x;
   var y = this.direction.getYComponent()*distance + this.center.y;
   
   this.center.x = x;
   this.center.y = y;
   
};
