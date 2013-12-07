startGame = function() {
	var gameScene = new Scene();

	gameScene.addChild(new StartMenu(game));
	gameScene.addChild(new OpenTutorial(game));
	gameScene.addChild(new StartShop(game));

	return gameScene;
}

startTutorial = function(game, tutorialNumber) {
	var tutorialScene = new Scene();

	tutorialScene.addChild(tutorialNumber);
	tutorialScene.addChild(new ExitTutorial(game));

	if (tutorialNumber.number != 8)
		tutorialScene.addChild(new NextTutorialButton(tutorialNumber.number+1));

	return tutorialScene;
}

StartMenu = Class.create(Sprite, {
	initialize: function(game) {
		Sprite.call(this, 640, 960);
		this.image = game.assets['images/background.png'];
	}
});

StartShop = Class.create(Sprite, {
	initialize: function(game) {
      Sprite.call(this, 200, 100);
      this.image = game.assets['images/play.png'];
      this.game = game;
   },

   ontouchend: function() {
      this.game.popScene();
   }
});

OpenTutorial = Class.create(Sprite, {
	initialize: function(game) {
      Sprite.call(this, 200, 100);
      this.x = 400;
      this.y = 400;
      this.tutorial = startTutorial(game, new Tutorial1(game, 2));
      this.image = game.assets['images/tutorial.png'];
      this.game = game;
   },

   ontouchend: function() {
      this.game.pushScene(this.tutorial);
   }
});

NextTutorialButton = Class.create(Sprite, {
	initialize: function(nextNumber) {
      Sprite.call(this, 200, 100);
      this.image = game.assets['images/tutorial.png'];
      this.x = 440;
      this.game = game;
      this.nextNumber = nextNumber;
   },

   ontouchend: function() {
      this.game.popScene();
      this.game.pushScene(startTutorial(game, new Tutorial1(game, this.nextNumber)));
   }
});


ExitTutorial = Class.create(Sprite, {
	initialize: function(game) {
		Sprite.call(this, 200, 100);
		this.game = game;
		this.image = game.assets['images/bomb.png'];
	},

	ontouchend: function() {
		this.game.popScene();
	}
});

Tutorial1 = Class.create(Sprite, {
	initialize: function(game, number) {
		Sprite.call(this, 640, 960);
		this.number = number;
		this.image = game.assets['images/tutorials/' + number + '.png'];
	}
});