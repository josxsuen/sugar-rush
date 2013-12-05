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
   initialize: function(game, level) {
      Sprite.call(this, 119, 200);
      var happiness = 100; //100 * game.fps * duration
      var tolerance = 1;        //{1, 1/3, 2/3}
      this.preference;
      this.randomNum;
      var state = ['WAIT', 'UNFED', 'FED', 'END'];
      var currentState;
      var timerFlag = false;
      this.world = game;
      this.level = level;
           
      this.addEventListener(Event.ENTER_FRAME, function() {  
         if (this.timerFlag) {
            this.moveBy(15, 0); //runs off screen
            if (this.x > this.world.width + this.width/2)
               this.level.removeChild(this);
         }
      });
   },
   
   random: function() {
      this.randomNum = Math.floor(Math.random() * this.world.RecipeBook.length);
      this.preference = this.world.RecipeBook[0];
      //this.preference = this.player.getRecipes(randomNum);
   },
   
   onaddedtoscene: function() {
      this.currentState = 'WAIT';
      this.frame = 0;
      this.random();
   },

   newBubble: function(ingredient) {
      //Add a speech bubble object displaying a preferred ingredient
   },   
   
   calculateScore: function() {
      // the score is based on how fast the kid was served. 
      // will work on this more
      return this.happinessLevel;
   },

   ontouchend: function() {
      var isLiked = false;
      for (var i in yumDesserts) {
         //if dessert is clicked
         if (yumDesserts[i].feed) {
            //dessert exactly matches wanted dessert
            //make this based on preference.  go through insides and match them up.
            //0-3points possible. 1point for each matched ingredient.
            if (yumDesserts[i].frame === this.preference.frame) {
               isLiked = true;
               eatDessert(this.level, this.world, i);
               this.frame = 4;
            }
            break;
         }
      }
      if (!isLiked) {
         this.frame = 3;
      }
      this.timerFlag = true;
   }
});
