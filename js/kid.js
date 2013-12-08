eatDessert = function(level, i) {
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
   var newBowl = new Bowl(x, y, player);
   level.bowls.push(newBowl);
   level.addChild(newBowl);
};

Kid = Class.create(Sprite, {
   initialize: function(slotX) {
      Sprite.call(this, 119, 200);
      this.happiness = 100 * 10; //100% * duration
      this.tolerance = 1;        //{1, 1/3, 2/3}
      this.currentState = 'WAITING';
      this.states = ['WAITING', 'EXITING', 'ENTERING', 'EATING'];
      this.slotX = slotX;

      this.preference = recipebook[this.getRandomRecipe()];
      this.bubble = null;
      this.bubbleTimer = 100;
      this.waitTimer = this.happiness;
      this.image = game.assets['images/kid.png'];
      this.imageFrame = Math.floor(Math.random()*5) * 5;
      this.getRandomRecipe();
   },

   onenterframe: function() {
      switch(this.currentState) {
         case 'WAITING':
            if (this.bubble !== null) {
               if (this.bubbleTimer-- === 0) {
                  this.scene.removeChild(this.bubble);
                  this.scene.removeChild(this.desire);
                  this.bubble = null;
                  this.desire = null;
                  this.bubbleTimer = 100;
               }
            }
            else {
               if (this.bubbleTimer-- === 0) {
                  this.bubble = new Sprite(120, 120);
                  this.bubble.image = game.assets['images/bubble.png'];
                  this.bubble.x = this.x + this.bubble.width/3;
                  this.bubble.y = this.y - this.bubble.height + 20;
                  this.scene.addChild(this.bubble);
                  
                  this.desire = new Sprite(120, 100);
                  this.desire.image = game.assets['images/dessert.png'];
                  this.desire.frame = this.preference.frame;
                  this.desire.x = this.bubble.x;
                  this.desire.y = this.bubble.y;
                  this.scene.addChild(this.desire);
   
                  this.bubbleTimer = 100;
               }
            }
            
            if (!this.waitTimer--)
               this.currentState = 'EXITING';
            else if (this.waitTimer < this.happiness*0.05)
               this.frame = this.imageFrame+3;              
            else if (this.waitTimer < this.happiness*0.35)
               this.frame = this.imageFrame+2;
            else if (this.waitTimer < this.happiness*0.60)
               this.frame = this.imageFrame+1;              
               
            break;
         case 'ENTERING':
            if (this.x < this.slotX)
               this.x += 5;
            else
               this.currentState = 'WAITING';
            break;
         case 'EXITING':
            if (this.bubble) {
               this.scene.removeChild(this.bubble);
               this.scene.removeChild(this.desire);
               this.bubble = null;
               this.desire = null;                  
            }
         
            this.moveBy(15, 0); //runs off screen
            if (this.x > game.width + this.width/2) {
               this.scene.slot[this.scene.slot.indexOf(this)] = null;
               this.scene.removeChild(this);
            }
            break;
         default:
            
      }
   },
   
   onaddedtoscene: function() {
      this.currentState = 'ENTERING';
      this.frame = this.imageFrame;
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
               game.assets['images/sounds/mmm.wav'].play();
               eatDessert(this.scene, i);
               this.frame = this.imageFrame+4;
            }
            else {
               game.assets['images/sounds/eww.wav'].play();
               this.frame = this.imageFrame+3;
            }
            this.currentState = 'EXITING';
            break;
         }
      }
   },
   
   getRandomRecipe: function() {
      return arr[Math.floor(Math.random()*Math.floor(Math.random()*16))];
   }
});

