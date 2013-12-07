eatDessert = function(level, world, i) {
   var x = yumDesserts[i].x;
   var y = yumDesserts[i].y;
   var len = yumDesserts.length;
   
   //remove dessert
   level.removeChild(yumDesserts[i]);
   if (i == 0) {
      yumDesserts.shift();
   }
   else if (i == len - 1) {
      yumDesserts.pop();
   }
   else {
      var array = [];
      array[0] = yumDesserts[0];
      array[1] = yumDesserts[len - 1];
      yumDesserts = array;
   }
   
   //add bowl
   var newBowl = new Bowl(x, y, world.RecipeBook, level, world.player);
   level.Bowls.push(newBowl);
   level.addChild(newBowl);
}

Kid = Class.create(Sprite, {
   initialize: function(game, level, spotX, spotY) {
      Sprite.call(this, 119, 200);
      var happiness = 100; //100 * game.fps * duration
      var tolerance = 1;        //{1, 1/3, 2/3}
      var timerFlag = false;
      var timer = 100;
      var currentState = 'WAITING';
      var states = ['WAITING', 'EXITING', 'ENTERING', 'EATING'];
      var bubble;
      var desire;
      
      this.world = game;
      this.level = level;  
      this.preference = this.world.RecipeBook[3];
      this.bubble = null;
      this.timer = 100;
      this.image = game.assets['images/kid.png'];
      //this.preference = this.world.RecipeBook[random(this.world.RecipeBook.length-1)];
      this.addEventListener(Event.ENTER_FRAME, function() {  
         switch(this.currentState) {
            case 'WAITING':
               if (this.bubble !== null) {
                  if (this.timer-- === 0) {
                     this.level.removeChild(this.bubble);
                     this.level.removeChild(this.desire);
                     this.bubble = null;
                     this.desire = null;
                     this.timer = 100;
                  }
               }
               else {
                  if (this.timer-- === 0) {
                     this.bubble = new Sprite(120, 120);
                     this.bubble.image = game.assets['images/bubble.png'];
                     this.bubble.x = this.x + this.bubble.width/3;
                     this.bubble.y = this.y - this.bubble.height + 20;
                     this.level.addChild(this.bubble);
                     
                     this.desire = new Sprite(120, 100);
                     this.desire.image = this.preference.image;
                     this.desire.x = this.bubble.x;
                     this.desire.y = this.bubble.y;
                     this.level.addChild(this.desire);
      
                     this.timer = 100;
                  }
               }
               break;
            case 'ENTERING':
               if (this.x < spotX) {
                  this.x += 5;
               }
               else
                  this.currentState = 'WAITING';
               break;
            case 'EXITING':
               if (this.bubble) {
                  this.level.removeChild(this.bubble);
                  this.level.removeChild(this.desire);
                  this.bubble = null;
                  this.desire = null;                  
               }
            
               this.moveBy(15, 0); //runs off screen
               if (this.x > this.world.width + this.width/2)
                  this.level.removeChild(this);
               break;
            default:
               
         }
      });
   },
   
   onaddedtoscene: function() {
      this.currentState = 'ENTERING';
      this.frame = 0;
      this.x = -50;
      this.y = 120;
   },

   calculateScore: function() {
      // the score is based on how fast the kid was served. 
      // will work on this more
      return this.happinessLevel;
   },

   ontouchend: function() {
      var tLevel = 0;
      var isLiked = false;
      for (var i in yumDesserts) {
         //if dessert is clicked
         if (yumDesserts[i].feed) {
            //dessert exactly matches wanted dessert
            //make this based on preference.  go through insides and match them up.
            //0-3points possible. 1point for each matched ingredient.
            for (var k in this.preference.insides) {
               for (var l in yumDesserts[i].insides) {
                  if (k == l) {
                     if (this.preference.insides[k] > 0 && yumDesserts[i].insides[l] > 0) {
                        tLevel++;
                        yumDesserts[i].insides[l] -= 1;
                     }
                  }
               }
            }
            if (tLevel > 0) {
               isLiked = true;
               eatDessert(this.level, this.world, i);
               this.frame = 4;
            }
            else {
               this.frame = 3;
            }
            break;
         }
      }
      this.currentState = 'EXITING';
   }
});

random = function(num) {
   return Math.floor(Math.random() * num);
};
