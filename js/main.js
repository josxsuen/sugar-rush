enchant();

this.checkClicked = true;

window.onload = function(){
   game = new Core(640, 960);
   game.fps = 15;

   game.preload(
      'images/background.png',
      'images/bowl.png',
      'images/dessert.png',
      'images/ingredient.png',
      'images/kid.png',
      'images/bomb.png'
   );

    game.onload = function(){

      var background = new Sprite(640, 960);
      background.image = game.assets['images/background.png'];

      // Recipes      
      this.RecipeBook = [];
      this.RecipeBook.push(new ChocolateCake());
      this.RecipeBook.push(new ChocoStrawCake());
      this.RecipeBook.push(new VanillaCake());
      this.RecipeBook.push(new StrawShortCake());
      this.RecipeBook.push(new BirthdayCake());
      this.RecipeBook.push(new ChocolateIceCream());
      this.RecipeBook.push(new VanillaIceCream());
      this.RecipeBook.push(new StrawberryIceCream());
      this.RecipeBook.push(new NeapolitanIceCream());
      this.RecipeBook.push(new Cookie());
      this.RecipeBook.push(new IcingCookie());
      this.RecipeBook.push(new ChocolatePie());
      this.RecipeBook.push(new StrawberryPie());
      this.RecipeBook.push(new OriginalPie());
      this.RecipeBook.push(new IceCreamPie());
      this.RecipeBook.push(new ChocoCoverStraw());      
      
      // Ingredients
      // what is the purpose of passing game to each ingredient?
      var Ingredients = [];
      Ingredients.push(new CakeBatter(game));
      Ingredients.push(new CookieDough(game));
      Ingredients.push(new Icing(game));
      Ingredients.push(new IceCream(game));
      Ingredients.push(new Vanilla(game));
      Ingredients.push(new Chocolate(game));
      Ingredients.push(new Cream(game));
      Ingredients.push(new Strawberry(game));
      Ingredients.push(new PieCrust(game));
      
      this.player = new Player(Ingredients, this.RecipeBook);

      var kid = new Kid(game);
      
      this.Bowls = [];
      this.Bowls.push(new Bowl(50, 240, this.RecipeBook, game, this.player));
      this.Bowls.push(new Bowl(250, 240, this.RecipeBook, game, this.player));
      this.Bowls.push(new Bowl(450, 240, this.RecipeBook, game, this.player));
      
      
      kid.image = game.assets['images/kid.png'];
      kid.x = 50;
      kid.y = 25;

      game.rootScene.addChild(background);

      for (var i in Ingredients) {
         game.rootScene.addChild(Ingredients[i]);
         Ingredients[i].addAmt(10);
      }

      for (var i in this.Bowls) {
         game.rootScene.addChild(this.Bowls[i]);
      }
      
      var trashcan = new Trash(game);
      trashcan.image = game.assets['images/bomb.png'];
      trashcan.x = 400;
      
      game.rootScene.addChild(trashcan);
      game.rootScene.addChild(kid);
    };

    game.start();
};
