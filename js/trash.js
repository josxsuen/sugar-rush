Trash = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 85, 82);

      this.image = game.assets['images/trash.png'];
      this.x = 545;
      this.y = 870;
   },

   ontouchend: function() {
      if (pendingAction === 'BOWL' || pendingAction === 'DESSERT') {
         var ndx = this.scene.bowls.indexOf(pendingObject);
         this.scene.removeChild(pendingObject);
         this.scene.bowls.splice(ndx, 1);

         // Replace with empty bowl
         var x = pendingObject.x;
         var y = pendingObject.y;
         this.scene.addBowl(x, y);
      }
   }
});