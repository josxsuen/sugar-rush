Trash = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 83, 80);

      this.image = game.assets['images/trash.png'];
      this.x = 545;
      this.y = 870;
   },

   ontouchend: function() {
      //throw away mixing bowl or ingredient clicked.  Reset mixing bowl with new one
      //or just disable the click of the ingredient.
      for (var i in this.scene.bowls) {
         if (this.scene.bowls[i].trashing) {
            var x = this.scene.bowls[i].x;
            var y = this.scene.bowls[i].y;
            var len = this.scene.bowls.length;

            this.scene.removeChild(this.scene.bowls[i]);

            if (i == 0) {
               this.scene.bowls.shift();
            }
            else if (i == len - 1) {
               this.scene.bowls.pop();
            }
            else {
               var array = [];
               array[0] = this.scene.bowls[0];
               array[1] = this.scene.bowls[len-1];
               this.scene.bowls = array;
            }

            var newBowl = new Bowl(x, y);
            this.scene.bowls.push(newBowl);
            this.scene.addChild(newBowl);
         }
      }
   }
});