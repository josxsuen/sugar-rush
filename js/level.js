Level = Class.create(Scene, {
   initialize: function(num) {
      Scene.call(this);

      this.num = num;

      // Add background
      var background = new Sprite(640, 960);
      background.image = game.assets['images/background.png'];
      this.addChild(background);

      // Add ingredients
      for (var i in ingredients) {
         this.addChild(ingredients[i]);
      }

      // Add bowls
      this.bowls = [];
      this.bowls.push(new Bowl( 50, 340, game.recipebook, game.player));
      this.bowls.push(new Bowl(250, 340, game.recipebook, game.player));
      this.bowls.push(new Bowl(450, 340, game.recipebook, game.player));

      for (var i in this.bowls) {
         this.addChild(this.bowls[i]);
      }

      // Add trashcan
      this.trashcan = new Trash();
      this.addChild(this.trashcan);

      // Add recipebook button
      this.addChild(new RecipeBookEnter());

   },

   addKid: function(kid, slot) {
      switch (slot) {
         case 1: kid.x =  50; break;
         case 2: kid.x = 250; break;
         case 3: kid.x = 450; break;
      }
      kid.y = 120;

      this.addChild(kid);
   }
});