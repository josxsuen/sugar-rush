enchant();

this.checkClicked = true;

this.player       = null;
this.recipebook   = null;
this.ingredients  = null;

this.color = {
   lightYellow:   '#FAF8CD',
   pink:          '#CF4C71'
};

this.font = {
   plain:   '"Yanone Kaffeesatz"',
   script:  '"Dawning of a New Day"'
};

var yumDesserts = [];

window.onload = function() {
   // Load fonts
   WebFontConfig = {
      google: { families: [ 'Yanone+Kaffeesatz:400,700:latin', 'Dawning+of+a+New+Day::latin' ] },
      loading: loadGame
   };

   (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
         '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
   })();
};

loadGame = function() {
   game = new Core(640, 960);
   game.fps = 30;

   game.preload(
      'images/background.png',
      'images/bubble.png',
      'images/bowl.png',
      'images/dessert.png',
      'images/ingredient.png',
      'images/kid.png',
      'images/trash.png',
      'images/shopImages.png',
      'images/bomb.png',
      'images/recipebook.png',
      'images/book.png',
      'images/close.png',
      'images/tutorial.png',
      'images/play.png',
      'images/tutorials/1.png',
      'images/tutorials/2.png',
      'images/tutorials/3.png',
      'images/tutorials/4.png',
      'images/tutorials/5.png',
      'images/tutorials/6.png',
      'images/tutorials/7.png',
      'images/tutorials/8.png',
      'images/sounds/boop.wav',
      'images/sounds/eww.wav',
      'images/sounds/mixing.wav',
      'images/sounds/mmm.wav',
      'images/sounds/background.wav'
   );

   game.onload = function() {
      player      = new Player();
      recipebook  = initRecipebook();
      ingredients = initIngredients();

      var startMenu = startGame();
      var level = new Level(5);
      var shop = new Shop(level);

      // Push the scenes
      game.pushScene(level);
      game.pushScene(shop);
      game.pushScene(startMenu);

      this.bgm = game.assets['images/sounds/background.wav'];
      this.bgm.play();
    };

    game.start();
};

initRecipebook = function() {
   return {
      ChocolateCake:       new ChocolateCake(),
      ChocoStrawCake:      new ChocoStrawCake(),
      VanillaCake:         new VanillaCake(),
      StrawShortCake:      new StrawShortCake(),
      BirthdayCake:        new BirthdayCake(),
      ChocolateIceCream:   new ChocolateIceCream(),
      VanillaIceCream:     new VanillaIceCream(),
      StrawberryIceCream:  new StrawberryIceCream(),
      NeapolitanIceCream:  new NeapolitanIceCream(),
      Cookie:              new Cookie(),
      IcingCookie:         new IcingCookie(),
      ChocolatePie:        new ChocolatePie(),
      StrawberryPie:       new StrawberryPie(),
      OriginalPie:         new OriginalPie(),
      IceCreamPie:         new IceCreamPie(),
      ChocoCoverStraw:     new ChocoCoverStraw()
   };
};

initIngredients = function() {
   return {
      CakeBatter:    new CakeBatter(),
      CookieDough:   new CookieDough(),
      PieCrust:      new PieCrust(),
      Icing:         new Icing(),
      IceCream:      new IceCream(),
      Vanilla:       new Vanilla(),
      Chocolate:     new Chocolate(),
      Cream:         new Cream(),
      Strawberry:    new Strawberry()
   };
};
