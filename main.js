enchant();

window.onload = function(){
    var game = new Core(800, 600);
    game.fps = 15;
    game.preload('images/button-green.png', 'images/button-red.png', 'images/ppl3.png',
                 'images/bowls.png', 'images/modkid.png', 'images/background.png');

    game.onload = function(){
    
      var background = Class.create(Sprite, {
         initialize: function() {
            Sprite.call(this, 800, 600);
            this.image = game.assets['images/background.png'];
         }
      });
      
      var bg = new background();
      
      
      //       RECIPES      //
      var CCake = new ChocolateCake();
      var CSCake = new ChocoStrawCake();
      var VCake = new VanillaCake();
      var SSCake = new StrawShortCake();
      var BCake = new BirthdayCake();
      var CIC = new ChocolateIcecream();
      var VIC = new VanillaIcecream();
      var SIC = new StrawberryIcecream();
      var NIC = new NapoleonIcecream();
      var CK = new Cookie();
      var ICK = new IcingCookie();
      var CP = new ChocolatePie();
      var SP = new StrawberryPie();
      var OP = new OriginalPie();
      var ICP = new IcecreamPie();
      var CCS = new ChocoCoverStraw();
      
      var RecipeBook = [CCake, CSCake, VCake, SSCake, BCake, CIC, VIC, SIC, NIC, CK,
       ICK, CP, SP, OP, ICP, CCS];
      
      
      
      //      INGREDIENTS     //
      var CB = new CakeBatter(game);
      var CD = new CookieDough(game);
      var I = new Icing(game);
      var IC = new IceCream(game);
      var V = new Vanilla(game);
      var CC = new Chocolate(game);
      var CM = new Cream(game);
      var S = new Strawberry(game);
      var PC = new PieCrust(game);
      
      var Ingredients = [CB, CD, I, IC, V, CC, CM, S, PC];
      
      
      
      var player = new Player(Ingredients, RecipeBook);
      var kid = new Kid(player);
      var bowl = new MixingBowl(350, 100, game, player, kid);

      
      CB.image = game.assets['images/button-green.png'];
      CB.x = 50;
      CB.y = 125;
      I.image = game.assets['images/button-red.png'];
      I.x = 50;
      I.y = 225;
      CC.image = game.assets['images/ppl3.png'];
      CC.x = 50;
      CC.y = 325;
      kid.image = game.assets['images/modkid.png'];
      kid.x = 500;
      kid.y = 100;
      
      game.rootScene.addChild(bg);
      game.rootScene.addChild(CB);
      game.rootScene.addChild(I);
      game.rootScene.addChild(CC);
      game.rootScene.addChild(bowl);
      game.rootScene.addChild(kid);
    };

    game.start();
};
