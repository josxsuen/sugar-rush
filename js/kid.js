// Kid

Kid = Class.create(Sprite, {
   initialize: function(game) {
      Sprite.call(this, 119, 200);
      var happiness = 100; //100 * game.fps * duration
      var tolerance = 1;        //{1, 1/3, 2/3}
      this.preference;
      this.randomNum;
      var state = ['WAIT', 'UNFED', 'FED', 'END'];
      var currentState;
      var timerFlag = false;
      this.world = game;
           
      this.addEventListener(Event.ENTER_FRAME, function() {  
         if (this.timerFlag) {
            this.moveBy(15, 0); //runs off screen
            if (this.x > this.world.width + this.width/2)
               this.world.rootScene.removeChild(this);
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
      for (var i in this.world.RecipeBook) {
         if (this.world.RecipeBook[i].ready) {
            /* this doesnt include the preference check.  If wanting preference
            could go through the insides of the dessert and compare how many alike things
            from there could then adjust for preference.*/
            if (this.world.RecipeBook[i].frame === this.preference.frame) {
               //kid likes the food.
               console.log("I EAT");
               this.world.RecipeBook[i].ready = false;
               this.frame = 4; //Happy
            }
            else {//Kid does not like the food
               console.log("I DONT LIKE IT!");
               this.frame = 3; //Crying
               //move bowl to trash & reset it
            }
            this.timerFlag = true;
         }
      }
   }
});
