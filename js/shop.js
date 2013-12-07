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

      // Title
      var shopLabel = new Label('Shop');
      shopLabel.font = '72px ' + font.script;
      shopLabel.color = color.pink;
      shopLabel.textAlign = 'center';
      shopLabel.width = '640';
      shopLabel.y = 20;

      // Level number
      var levelNum = new Label('Level ' + this.level.num);
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

   shopItems.push(new CakeBatterShop());
   shopItems.push(new CookieDoughShop());
   shopItems.push(new IcingShop());
   shopItems.push(new IceCreamShop());
   shopItems.push(new VanillaShop());
   shopItems.push(new ChocolateShop());
   shopItems.push(new CreamShop());
   shopItems.push(new StrawberryShop());
   shopItems.push(new PieCrustShop());

   return shopItems;
};