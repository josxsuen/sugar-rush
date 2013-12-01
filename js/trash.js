Trash = Class.create(Sprite, {
   initialize: function(game) {
      Sprite.call(this, 75, 75);
      this.world = game;
   },
   
   ontouchend: function() {
      //throw away mixing bowl or ingredient clicked.  Reset mixing bowl with new one
      //or just disable the click of the ingredient.
      for (var i in this.world.Bowls) {
         if (this.world.Bowls[i].trashing) {
            var x = this.world.Bowls[i].x;
            var y = this.world.Bowls[i].y;
            var len = this.world.Bowls.length;
            
            this.world.rootScene.removeChild(this.world.Bowls[i]);
            
            if (i == 0) {
               this.world.Bowls.shift();
            }
            else if (i == len - 1) {
               this.world.Bowls.pop();
            }
            else {
               var array = [];
               array[0] = this.world.Bowls[0];
               array[1] = (this.world.Bowls[len-1]);
               this.world.Bowls = array;
            }
            var newBowl = new Bowl(x, y, this.world.RecipeBook, this.world, this.world.player);
            this.world.Bowls.push(newBowl);
            this.world.rootScene.addChild(newBowl);
         }
      }
   }
});