enchant();

window.onload = function(){
    var game = new Core(800, 600);
    game.fps = 15;
    game.preload('button-green.png');
    game.preload('button-red.png');
    game.preload('ppl3.png');
    game.preload('bowls.jpg');
    game.preload('boss.png');
    game.preload(); //put images and sounds here. ex: 'bear1.png'

    game.onload = function(){
      
      
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
      var bowl = new MixingBowl(200, 300, game, player, kid);

      
      CB.image = game.assets['button-green.png'];
      CB.x = 100;
      I.image = game.assets['button-red.png'];
      I.x = 200;
      CC.image = game.assets['ppl3.png'];
      kid.image = game.assets['boss.png'];
      kid.x = 300;
      
      game.rootScene.addChild(CB);
      game.rootScene.addChild(I);
      game.rootScene.addChild(CC);
      game.rootScene.addChild(bowl);
      game.rootScene.addChild(kid);
    };

    game.start();
};
