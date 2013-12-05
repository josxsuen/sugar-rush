enchant();

this.checkClicked = true;
var playerMoney = 2000;
var playerHealth = 100;
var playerItems = [];
var playerRecipes = [];
var yumDesserts = [];

window.onload = function(){
   game = new Core(640, 960);
   game.fps = 15;

   game.preload(
      'images/background.png',
      'images/bowl.png',
      'images/dessert.png',
      'images/ingredient.png',
      'images/kid.png',
      'images/trash.png',
      'images/shopImages.png',
	  'images/bomb.png',
	  'images/RecipeBook.png'
   );

    game.onload = function(){

      var level1 = new Scene();
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
      Ingredients.push(new CakeBatter(level1));
      Ingredients.push(new CookieDough(level1));
      Ingredients.push(new PieCrust(level1));
      Ingredients.push(new Icing(level1));
      Ingredients.push(new IceCream(level1));
      Ingredients.push(new Vanilla(level1));
      Ingredients.push(new Chocolate(level1));
      Ingredients.push(new Cream(level1));
      Ingredients.push(new Strawberry(level1));

      playerItems = Ingredients;
      playerRecipes = this.RecipeBook;
      this.player = new Player(Ingredients, this.RecipeBook);

      var kid = new Kid(game, level1);

      level1.Bowls = [];
      level1.Bowls.push(new Bowl(50, 340, this.RecipeBook, level1, this.player));
      level1.Bowls.push(new Bowl(250, 340, this.RecipeBook, level1, this.player));
      level1.Bowls.push(new Bowl(450, 340, this.RecipeBook, level1, this.player));


      kid.image = game.assets['images/kid.png'];
      kid.x = 50;
      kid.y = 120;


      level1.addChild(background);

      for (var i in Ingredients) {
         level1.addChild(Ingredients[i]);
         //Ingredients[i].addAmt(10);
      }

      for (var i in level1.Bowls) {
         level1.addChild(level1.Bowls[i]);
      }

      var trashcan = new Trash(level1, game);

      level1.addChild(trashcan);
      level1.addChild(kid);
	  
	  var inButton = new InRecipe(game);
	  level1.addChild(inButton);

      game.pushScene(level1);

      var shop = newShop(game, level1);
      game.pushScene(shop);
    };

    game.start();
};
