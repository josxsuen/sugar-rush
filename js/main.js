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
      'images/kid.png'
   );

    game.onload = function(){

      var background = new Sprite(640, 960);
      background.image = game.assets['images/background.png'];

      // Recipes      
      var RecipeBook = [];
      RecipeBook.push(new ChocolateCake());
      RecipeBook.push(new ChocoStrawCake());
      RecipeBook.push(new VanillaCake());
      RecipeBook.push(new StrawShortCake());
      RecipeBook.push(new BirthdayCake());
      RecipeBook.push(new ChocolateIceCream());
      RecipeBook.push(new VanillaIceCream());
      RecipeBook.push(new StrawberryIceCream());
      RecipeBook.push(new NeapolitanIceCream());
      RecipeBook.push(new Cookie());
      RecipeBook.push(new IcingCookie());
      RecipeBook.push(new ChocolatePie());
      RecipeBook.push(new StrawberryPie());
      RecipeBook.push(new OriginalPie());
      RecipeBook.push(new IceCreamPie());
      RecipeBook.push(new ChocoCoverStraw());      
      
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
      
      var player = new Player(Ingredients, RecipeBook);

      var kid = new Kid(player);
      var bowl = new Bowl(50, 240, RecipeBook, game, player, kid);

      
      // CB.image = game.assets['images/button-green.png'];
      // CB.x = 50;
      // CB.y = 125;
      // I.image = game.assets['images/button-red.png'];
      // I.x = 50;
      // I.y = 225;
      // CC.image = game.assets['images/ppl3.png'];
      // CC.x = 50;
      // CC.y = 325;
      kid.image = game.assets['images/kid.png'];
      kid.x = 50;
      kid.y = 25;

      game.rootScene.addChild(background);

      for (var i in Ingredients) {
         game.rootScene.addChild(Ingredients[i]);
         Ingredients[i].addAmt(10);
      }

      game.rootScene.addChild(bowl);
      game.rootScene.addChild(kid);
    };

    game.start();
};
