enchant();

this.checkClicked = true;
this.pendingAction= 'NONE'; // NONE, INGREDIENT, BOWL, DESSERT
this.pendingObject= null;

this.arr          = null;
this.player       = null;
this.recipebook   = null;
this.ingredients  = null;

this.color = {
   black:         '#000000',
   darkBlue:      '#8897BF',
   green:         '#6dc647',
   lightBlue:     '#63bfec',
   lightBrown:    '#ecbe7b',
   lightGreen:    '#D0E8B3',
   lightRed:      '#f8a286',
   lightYellow:   '#FAF8CD',
   orange:        '#fdbb12',
   pink:          '#CF4C71',
   purple:        '#bd5da3',
   white:         '#FFFFFF',
   yellow:        '#fff107'
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
	  'images/healthbackground.png',
	  'images/healthbar.png',
      'images/background.png',
      'images/bowl.png',
      'images/bowlselect.png',
      'images/bubble.png',
      'images/dessert.png',
      'images/dessertselect.png',
      'images/ingredient.png',
      'images/ingredientselect.png',
      'images/kid.png',
      'images/recipebook.png',
      'images/recipebookbuttons.png',
      'images/splash.png',
      'images/splashbuttons.png',
      'images/trash.png',
      'images/tutorialbuttons.png',
      'images/tutorials/1.png',
      'images/tutorials/2.png',
      'images/tutorials/3.png',
      'images/tutorials/4.png',
      'images/tutorials/5.png',
      'images/tutorials/6.png',
      'images/tutorials/7.png',
      'images/tutorials/8.png',

      'sounds/boop.wav',
      'sounds/eww.wav',
      'sounds/mixing.wav',
      'sounds/mmm.wav',
      'sounds/background.wav',
      'images/bomb.png'
   );

   game.onload = function() {
      player      = new Player();
      recipebook  = initRecipebook();
      ingredients = initIngredients();
      arr         = [];

      var splash  = new Splash();
      var level   = new Level(5);
      var shop    = new Shop(level);

      //Numbers the recipes
      for (var i in recipebook.valueOf()) {
         arr.push(i);
      }
      
      // Push the scenes
      game.pushScene(level);
      game.pushScene(shop);
      game.pushScene(splash);
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