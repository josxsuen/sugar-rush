Bowl = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 120, 110);
      this.image = game.assets['images/bowl.png'];
      this.x = x;
      this.y = y;
      this.frame = 0;

      // this.trashing = false;

      this.contents = {
         CakeBatter: 0,
         CookieDough:0,
         PieCrust:   0,
         Icing:      0,
         IceCream:   0,
         Vanilla:    0,
         Chocolate:  0,
         Cream:      0,
         Strawberry: 0
      };

      this.count = 0;
      this.open = true;
      this.clicked = false;
   },

   onenterframe: function() {
      if (this.count === 3) {
         this.checkRecipe();
         //this.open = false;
      }
      this.image = game.assets['images/bowl' + (pendingObject === this ? 'select.png' : '.png')];
   },

   checkRecipe: function() {
      var number = 0;
      var dessert;

      for (var r in recipebook) {
         var badMix = false;
         for (var i in this.contents) {
            if (this.contents[i] !== recipebook[r].insides[i]) {
               badMix = true;
            }
         }
         if (!badMix) {
            dessert = recipebook[r];
            break;
         }
      }

      if (badMix) {
         this.frame = 3;
      }
      else {
         // Add dessert
         var newDessert = new dessert.constructor;
         newDessert.x = this.x;
         newDessert.y = this.y;
         this.scene.addChild(newDessert);

         // Remove bowl
         this.scene.removeChild(this);
      }
   },

   ontouchend: function() {
      if (pendingAction === 'INGREDIENT' && this.open) {
         pendingObject.amount--;
         this.contents[pendingObject.name]++;
         this.frame++;
         this.count++;

         pendingAction = 'NONE';
         pendingObject = null;
      }
      else if (pendingObject === this) {
         pendingAction = 'NONE';
         pendingObject = null;
      }
      else {
         pendingAction = 'BOWL';
         pendingObject = this;
      }
   }
});