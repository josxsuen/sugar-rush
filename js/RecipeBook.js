RBook = Class.create(Sprite, {
	initialize: function(game) {
		Sprite.call(this, 640, 960);
		this.image = game.assets['images/RecipeBook.png'];
		//game.pause();
	}
});

OutRecipe = Class.create(Sprite, {
	initialize: function(game) {
		Sprite.call(this, 70, 70);
		this.image = game.assets['images/bomb.png'];
		this.game = game;
		this.x = 540;
		this.y = 860;
	},	
	
	ontouchend: function() {
		this.game.popScene();
	}
});

InRecipe = Class.create(Sprite, {
	initialize: function(game) {
		Sprite.call(this, 70, 70);
		this.image = game.assets['images/bomb.png'];
		this.game = game;
		this.recipeScene = new Scene();
	},	
	
	ontouchend: function() {
		this.recipeScene.addChild(new RBook(this.game));
		var button = new OutRecipe(this.game);
		button.x = 100;
		button.y = 100;
		this.recipeScene.addChild(button);
		this.game.pushScene(this.recipeScene);
	}
});