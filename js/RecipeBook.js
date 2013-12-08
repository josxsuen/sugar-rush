RecipeBook = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 640, 960);
      this.image = game.assets['images/recipebook.png'];
      //game.pause();
   }
});

RecipeBookExit = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 60, 72);
      this.image = game.assets['images/recipebookbuttons.png'];
      this.frame = 1;
      this.x = 10;
      this.y = 880;
   },

   ontouchend: function() {
      game.popScene();
   }
});

RecipeBookEnter = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 60, 72);
      this.image = game.assets['images/recipebookbuttons.png'];
      this.frame = 0;
      this.x = 10;
      this.y = 880;
      this.recipeScene = new Scene();
   },

   ontouchend: function() {
      this.recipeScene.addChild(new RecipeBook());
      this.recipeScene.addChild(new RecipeBookExit());
      game.pushScene(this.recipeScene);
   }
});