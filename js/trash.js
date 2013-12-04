Trash = Class.create(Sprite, {
   initialize: function(level, game) {
      Sprite.call(this, 100, 96);
      this.world = level;
	  this.game = game;

      this.image = game.assets['images/trash.png'];
      this.x = 270;
      this.y = 840;
   },

   ontouchend: function() {
      //throw away mixing bowl or ingredient clicked.  Reset mixing bowl with new one
      //or just disable the click of the ingredient.
      for (var i in this.world.Bowls) {
         if (this.world.Bowls[i].trashing) {
            var x = this.world.Bowls[i].x;
            var y = this.world.Bowls[i].y;
            var len = this.world.Bowls.length;

            this.world.removeChild(this.world.Bowls[i]);

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
            var newBowl = new Bowl(x, y, this.game.RecipeBook, this.world, this.game.player);
            this.world.Bowls.push(newBowl);
            this.world.addChild(newBowl);
         }
      }
   }
});