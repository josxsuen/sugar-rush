MixingBowl = Class.create({
   initialize: function(x, y) {
      Sprite.call(this, 100, 100);
      // this.image = game.assets["images/mixingBowl.png"];
      // this.frame = 0;

      var contents = {};
      var count = 0;

      this.addEventListener('enterframe', function() {
         if (count === 3) {
            var recipeFound = false;

            for (var i in desserts) {
               if (this.equals(desserts[i].recipe)) {
                  this.image = desserts[i].image;
                  recipeFound = true;
                  break;
               }
            }

            if (!recipeFound) { // bad combo
               this.frame = 3;
            }
         }
      });
   },

   add: function(ingredient) {
      if (this.contents[ingredient] === undefined) {
         this.contents[ingredient] = 1;
      }
      else {
         this.contents[ingredient]++;
      }

      this.count++;

      if (this.frame < 2) {
         this.frame++;
      }
   },

   empty: function() {
      // this.image = game.assets["images/mixingBowl.png"];
      // this.frame = 0;
      this.contents = {};
      this.count = 0;
   },

   equals: function(recipe) {
      for (var ingredient in this.contents) {
         if (this.contents[ingredient] !== recipe[ingredient]) {
            return false;
         }
      }
   }
});