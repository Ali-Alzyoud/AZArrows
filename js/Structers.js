
var PI_1_2 = Math.PI/2;
var PI_2 = Math.PI*2;


//*******************************************************
//                  Rectangle Object                    *
//*******************************************************
var Rectangle = function(X,Y,W,H) {
   this.x = X;
   this.y = Y;
   this.width = W;
   this.height = H;
};

// *******************************************************
//                   Location Object                    *
// *******************************************************
function Location(X, Y) {
   this.x=X;
   this.y=Y;
};

Location.prototype.distanceTo = function(location) {
   var dx, dy;
   dx = Math.abs(location.x - this.x);
   dy = Math.abs(location.y - this.y);
   return Math.sqrt(dx * dx + dy * dy);
};

//******************************************************
//*                  Direction Object                  *
//******************************************************
function Direction(angle) {
   var _angle, _xComponent, _yComponent;

   this.getAngle = function() {
       return _angle;
    };

    this.getXComponent = function() {
       return _xComponent;
    };
    
    this.getYComponent = function() {
       return _yComponent;
    };
    
    this.setAngle = function(angle) {
       while(angle>PI_2){
          angle -= PI_2;
       }
       _angle = angle;
       _xComponent = Math.cos(_angle);
       _yComponent = Math.sin(_angle);
    };
    
    this.setAngle(angle);
};

Direction.Create = function(fromPoint,toPoint){
   var x = toPoint.x - fromPoint.x;
   var y = toPoint.y - fromPoint.y;
   var angle = Math.atan2(y, x);
   if(angle < 0){
      angle += PI_2;
   }
   return new Direction(angle);
};

//*******************************************************
//                     Circle Object                    *
//*******************************************************
function Circle(x, y, aRadius) {
   this.radius = aRadius;
   this.center = new Location(x, y);
};


//*******************************************************
//                        Utility                       *
//*******************************************************
var UTILITY = {
   Distance : function(pointFrom,pointTo){
      var x = pointFrom.x-pointTo.x;
      var y = pointFrom.y-pointTo.y;
      var dist = Math.sqrt(x*x+y*y);
      return dist;
   },
   RotatePoint : function (point,center,angle){
      var dist = UTILITY.Distance(point, center);
      var direction = Direction.Create(center,point);
      var x = dist*Math.cos(direction.getAngle() + angle)+center.x;
      var y = dist*Math.sin(direction.getAngle() +angle)+center.y;
      return new Location(x, y);
   }
}

