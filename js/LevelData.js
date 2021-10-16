var factor = null;
var LevelData = function(level,circleSpeed,remainsCount,arrowsCount,centerPosition,waitPosition,arrowLength,arrowRadius,circleRadius,arrowSpeed){
   
   if(factor == null){
      var W = Math.min(window.outerWidth, window.outerHeight);
      factor = W/360;
      if(factor < 1)
         factor = 1.0;
      console.log("factor = " + factor);
   }
   
   
   
   
   this.level = level;
   this.circleSpeed = circleSpeed * factor;
   this.remainsCount = remainsCount;
   this.arrowsCount = Math.floor(arrowsCount* factor);
   this.centerPosition = centerPosition;
   this.waitPosition = waitPosition;
   this.arrowLength = arrowLength* factor;
   this.arrowRadius = arrowRadius;
   this.circleRadius = circleRadius ;
   this.arrowSpeed = arrowSpeed * factor * factor;
   this.direction = Direction.Create(waitPosition, centerPosition);
};


var LevelDataArray = [
                      new LevelData(1,0.010,3,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(2,-0.010,5,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(3,0.010,7,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(4,-0.010,3,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(5,0.010,5,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(6,-0.010,7,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(7,0.010,3,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(8,-0.010,4,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(9,0.010,5,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(10,-0.010,6,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(11,0.010,3,1,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(12,0.010,5,1,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(13,0.010,7,1,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(14,0.010,3,2,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(15,0.010,5,2,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(16,0.010,7,2,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(17,0.010,3,3,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(18,0.010,4,3,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(19,0.010,5,3,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(20,0.010,6,3,new Location(0.5,0.2),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(21,0.010,3,1,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(22,0.010,5,1,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(23,0.010,7,1,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(24,0.010,3,2,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(25,0.010,5,2,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(26,0.010,7,2,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(27,0.010,3,3,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(28,0.010,4,3,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(29,0.010,5,3,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(30,0.010,6,3,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(31,0.010,9,1,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(32,0.010,15,1,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(33,0.010,3,5,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(34,0.010,6,5,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(35,0.010,9,5,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(36,0.010,12,5,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(37,0.010,13,4,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(38,0.010,14,4,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(39,0.010,15,4,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(40,0.010,16,4,new Location(0.2,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(41,0.015,3,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(42,0.015,4,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(43,0.015,3,1,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(44,0.015,3,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(45,0.015,4,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(46,0.015,5,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(47,0.015,1,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(48,0.015,2,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(49,0.015,3,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(50,0.015,4,4,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(51,0.015,3,1,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(52,0.015,4,1,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(53,0.015,3,1,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(54,0.015,3,2,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(55,0.015,4,2,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(56,0.015,5,2,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(57,0.015,1,3,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(58,0.015,2,3,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(59,0.015,3,3,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      new LevelData(60,0.015,4,4,new Location(0.5,0.15),new Location(0.5,0.95),40,8,1/8,1.5),
                      
                      new LevelData(71,0.015,3,1,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(72,0.015,4,1,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(73,0.015,3,1,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(74,0.015,3,2,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(75,0.015,4,2,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(76,0.015,5,2,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(77,0.015,1,3,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(78,0.015,2,3,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(79,0.015,3,3,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(80,0.015,4,4,new Location(0.5,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      
                      new LevelData(81,0.015,3,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(82,0.015,4,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(83,0.015,3,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(84,0.015,3,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(85,0.015,4,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(86,0.015,5,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(87,0.015,1,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(88,0.015,2,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(89,0.015,3,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(90,0.015,4,5,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      
                      new LevelData(91,-0.015,3,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(92,+0.015,4,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(93,-0.015,3,2,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(94,+0.015,3,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(95,-0.015,4,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(96,+0.015,5,3,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(97,-0.015,1,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(98,+0.015,2,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(99,-0.015,3,4,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      new LevelData(100,+0.015,4,5,new Location(0.8,0.5),new Location(0.2,0.5),40,8,1/8,1.5),
                      
                      new LevelData(101,-0.015,3,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(102,+0.015,4,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(103,-0.015,3,2,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(104,+0.015,3,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(105,-0.015,4,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(106,+0.015,5,3,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(107,-0.015,1,4,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(108,+0.015,2,4,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(109,-0.015,3,4,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      new LevelData(110,+0.015,4,5,new Location(0.5,0.5),new Location(0.5,0.95),40,8,1/5,3),
                      
                      new LevelData(111,-0.015,3,2,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(112,+0.015,4,2,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(113,-0.015,3,2,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(114,+0.015,3,3,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(115,-0.015,4,3,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(116,+0.015,5,3,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(117,-0.015,1,4,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(118,+0.015,2,4,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(119,-0.015,3,4,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      new LevelData(120,+0.015,4,5,new Location(0.5,0.15),new Location(0.5,0.95),25,12,1/10,3),
                      
                      new LevelData(121,-0.02,3,2,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(122,+0.02,4,2,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(123,-0.02,3,2,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(124,+0.02,3,3,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(125,-0.02,4,3,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(126,+0.02,5,3,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(127,-0.02,1,4,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(128,+0.02,2,4,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(129,-0.02,3,4,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      new LevelData(130,+0.02,4,5,new Location(0.5,0.8),new Location(0.5,0.15),30,12,1/8,1.5),
                      
                      new LevelData(131,-0.04,2,1,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(132,+0.04,3,1,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(133,-0.04,4,1,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(134,+0.04,5,1,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(135,-0.04,3,2,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(136,+0.04,4,2,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(137,-0.04,5,2,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(138,+0.04,2,3,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(139,-0.04,3,3,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      new LevelData(140,+0.04,4,3,new Location(0.5,0.1),new Location(0.5,0.9),30,8,1/7,2),
                      
                      new LevelData(141,-0.05,2,1,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(142,+0.05,3,1,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(143,-0.05,4,1,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(144,+0.05,5,1,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(145,-0.05,3,2,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(146,+0.05,4,2,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(147,-0.05,5,2,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(148,+0.05,2,3,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(149,-0.05,3,3,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      new LevelData(150,+0.015,20,20,new Location(0.5,0.1),new Location(0.5,0.9),80,8,1/7,2),
                      
                      ];