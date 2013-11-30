// Kid

//@param happinesslevel the happy bar that decrements while the kid is waiting on to be fed.
//@param tolerance minimum correct number of ingredients needed for kid to be satisfied.
//@param preference hints for the user to appeal to
Kid = Class.create(Sprite, {
   initialize: function(person) {
      Sprite.call(this, 119, 200);
      var happiness = 100; //100 * game.fps * duration
      var tolerance = 1;        //{1, 1/3, 2/3}
      this.preference;
      this.recipe;
      var state = ['WAIT', 'UNFED', 'FED', 'END'];
      var currentState;
      //var timer = game.fps*10;
      this.player = person;
   },
   
   random: function() {
      var ranNum = Math.floor(Math.random() * this.player.recipes.length);
      this.recipe = ranNum;
      this.preference = this.player.recipes[0];
      //this.preference = this.player.getRecipes(ranNum);
   },
   
   // getDessert: function() {
   //    return this.preference;
   // },
   
   // whichRecipe: function() {
   //    return this.recipe;
   // },
   
   onaddedtoscene: function() {
      this.currentState = 'WAIT';
      this.frame = 1;
      this.random();
   },
   
   //Called from outside 
   eats: function(recipe) {
      this.currentState = FED;
   },
   
   newBubble: function(ingredient) {
      //Add a speech bubble object displaying a preferred ingredient
   },
   
   
   calculateScore: function() {
      // the score is based on how fast the kid was served. 
      // will work on this more
      return this.happinessLevel;
   }
   
   // Assuming is created at an empty spot for now. 
      /*this.addEventListener(Event.ENTER_FRAME, function() {        
         switch (this.currentState) {
            case "WAIT":
               if (this.happiness < 0) {
                  this.currentState = 'UNFED';
               }
               else if (this.age % game.fps === 0) {
                  happiness--; //decrement every gametime seconds
                  
                  // newBubble(preferenceDisplay preference bubble if null
                  if (this.happiness > 60)
                     this.frame = 2;
                  else if (this.happiness > 30)
                     this.frame = 3;
               }               
               break;
            case 'UNFED':
               // run animation of throwing a tantrum
               this.frame = 4;
               this.currentState = 'END';
               break;
            case 'FED':
               // run animation of eating happily
               this.frame = 5;
               this.currentState = 'END';
               break;
            case 'END':
               if (!timer--) { 
                  game.score += calculateScore();
                  game.rootScene.removeChild(this);
               }
         }
      });*/
});
