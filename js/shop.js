Shop = Class.create(Scene, {
   initialize: function(level) {
      Scene.call(this);
      this.backgroundColor = color.lightYellow;

      this.level = level;
      this.shopItems = initShopItems();

      for (var i in this.shopItems) {
         this.addChild(this.shopItems[i]);
         this.shopItems[i].amount += 10;
      }

      player.money += (level.num*500);

      // Title
      var shopLabel = new Label('Shop');
      shopLabel.font = '72px ' + font.script;
      shopLabel.color = color.pink;
      shopLabel.textAlign = 'center';
      shopLabel.width = '640';
      shopLabel.y = 20;

      // Level number
      var levelNum = new Label(this.level.num + ' kids');
      levelNum.font = '40px ' + font.plain;
      levelNum.color = 'black';
      levelNum.x = 20;
      levelNum.y = 15;

      // Money
      var currentMoney = new Label();
      currentMoney.font = '40px ' + font.plain;
      currentMoney.textAlign = 'right';
      currentMoney.color = 'black';
      currentMoney.width = '620';
      currentMoney.y = 15;

      currentMoney.onenterframe = function() {
         this.text = ('$' + player.money);
      };

      // Start button
      var nextLevelLabel = new Label('Start Level');
      nextLevelLabel.font = '56px ' + font.plain;
      nextLevelLabel.color = color.pink;
      nextLevelLabel.textAlign = 'center';
      nextLevelLabel.width = '640';
      nextLevelLabel.y = 860;
      nextLevelLabel.buttonMode = 'a';

      nextLevelLabel.onenterframe = function() {
         if (this.buttonPressed)
            game.popScene();
      };

      this.addChild(shopLabel);
      this.addChild(levelNum);
      this.addChild(nextLevelLabel);
      this.addChild(currentMoney);
   }
});

initShopItems = function() {
   var shopItems = [];

   shopItems.push(new CakeBatterShop(50, 200, 50));
   shopItems.push(new CookieDoughShop(50, 340, 50));
   shopItems.push(new PieCrustShop(50, 480, 50));
   shopItems.push(new IceCreamShop(50, 620, 50));
   shopItems.push(new CreamShop(50, 760, 50));

   shopItems.push(new IcingShop(370, 200, 50));
   shopItems.push(new ChocolateShop(370, 340, 50));
   shopItems.push(new VanillaShop(370, 480, 50));
   shopItems.push(new StrawberryShop(370, 620, 50));

   return shopItems;
};