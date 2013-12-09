Trash = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 85, 82);

      this.image = game.assets['images/trash.png'];
      this.x = 545;
      this.y = 870;
   },

   ontouchend: function() {
      if (pendingAction === 'BOWL' || pendingAction === 'DESSERT') {
         this.scene.removeChild(pendingObject);
         this.scene.addBowl(pendingObject.x, pendingObject.y);
      }
   }
});