RBook = Class.create(Sprite, {
   initialize: function(game) {
      Sprite.call(this, 640, 960);
      this.image = game.assets['images/recipebook.png'];
      //game.pause();
   }
});

OutRecipe = Class.create(Sprite, {
   initialize: function(game) {
      Sprite.call(this, 58, 70);
      this.image = game.assets['images/close.png'];
      this.game = game;
   },

   ontouchend: function() {
      this.game.popScene();
   }
});

InRecipe = Class.create(Sprite, {
   initialize: function(game) {
      Sprite.call(this, 58, 70);
      this.image = game.assets['images/book.png'];
      this.game = game;
      this.x = 10;
      this.y = 880;
      this.recipeScene = new Scene();
   },

   ontouchend: function() {
      this.recipeScene.addChild(new RBook(this.game));
      var button = new OutRecipe(this.game);
      button.x = 10;
      button.y = 880;
      this.recipeScene.addChild(button);
      this.game.pushScene(this.recipeScene);
   }
});