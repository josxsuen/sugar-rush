lookupShop = function(name) {
   if (name === 'CakeBatter') return 0;
   if (name === 'CookieDough') return 1;
   if (name === 'PieCrust') return 2;
   if (name === 'Icing') return 3;
   if (name === 'Icecream') return 4;
   if (name === 'Vanilla') return 5;
   if (name === 'Chocolate') return 6;
   if (name === 'Cream') return 7;
   if (name === 'Strawberry') return 8;
   return -1;
}

newShop = function(game, level1) {
   var shopScene = new Scene();
   shopScene.backgroundColor = '#FAF8CD';

   var background = new Sprite(640, 960);
   background.image = game.assets['images/background.png'];

   var shopIngredients = [];
   shopIngredients.push(new CakeBatterShop(game, shopScene));
   shopIngredients.push(new CookieDoughShop(game, shopScene));
   shopIngredients.push(new IcingShop(game, shopScene));
   shopIngredients.push(new IceCreamShop(game, shopScene));
   shopIngredients.push(new VanillaShop(game, shopScene));
   shopIngredients.push(new ChocolateShop(game, shopScene));
   shopIngredients.push(new CreamShop(game, shopScene));
   shopIngredients.push(new StrawberryShop(game, shopScene));
   shopIngredients.push(new PieCrustShop(game, shopScene));

   // shopScene.addChild(background);

   for (var i in shopIngredients) {
      shopScene.addChild(shopIngredients[i]);
      shopIngredients[i].addAmt(10);
   }

   var shopLabel = new Label('Shop');
   shopLabel.font = '72px "Dawning of a new day"';
   shopLabel.color = '#CF4C71';
   shopLabel.textAlign = 'center';
   shopLabel.width = '640';
   shopLabel.y = 20;

   var levelNum = new Label('Level ' + 1);
   levelNum.font = '34px "Port Lligat Slab"';
   levelNum.color = 'black';
   levelNum.x = 20;
   levelNum.y = 15;

   var currentMoney = new Label();
   currentMoney.font = '34px "Port Lligat Slab"';
   currentMoney.textAlign = 'right';
   currentMoney.color = 'black';
   currentMoney.width = '620';
   currentMoney.y = 15;

   currentMoney.onenterframe = function() {
      this.text = ('$' + playerMoney);
   };

   var nextLevelLabel = new Label('I\'m ready!');
   nextLevelLabel.font = '36px "Port Lligat Slab"';
   nextLevelLabel.color = '#CF4C71';
   nextLevelLabel.textAlign = 'center';
   nextLevelLabel.width = '640';
   nextLevelLabel.y = 880;
   nextLevelLabel.buttonMode = 'a';

   nextLevelLabel.onenterframe = function() {
      if (this.buttonPressed)
         game.popScene();
   };

   shopScene.addChild(shopLabel);
   shopScene.addChild(levelNum);
   shopScene.addChild(nextLevelLabel);
   shopScene.addChild(currentMoney);

   return shopScene;
}

Shop = Class.create(Sprite, {
   initialize: function(place, name, x, y, cost, shopScene) {
      Sprite.call(this, 100, 100);
      this.shopScene = shopScene;
      this.image = game.assets['images/ingredient.png'];
      this.x = x;
      this.y = y;
      this.cost = cost;
      this.name = name;
      this.amount = 0;

      this.labelInfo = new Label();
      this.labelInfo.font = '24px "Port Lligat Slab"';
      this.labelInfo.color = 'black';
      this.labelInfo.x = x;
      this.labelInfo.y = y+105;

      this.labelInventory = new Label();
      this.labelInventory.font = 'bold 18px "Port Lligat Slab"';
      this.labelInventory.color = 'black';
      this.labelInventory.x = x;
      this.labelInventory.y = y;

      this.clicked = false;
      world = place;
   },

   add: function() {
      this.amount += 1;
   },

   addAmt: function(amt) {
      this.amount += amt;
   },

   minus: function() {
      if (this.amount > 0)
         this.amount -= 1;
   },

   numberOf: function() {
      return this.amount;
   },

   nameOf: function() {
      return this.name;
   },

   updateLabel: function() {
      var location = lookupShop(this.name);
      var own = playerItems[location].amount;

      this.labelInfo.text = 'Stock: ' + this.amount +
         '<br />Cost: $' + this.cost;
      this.labelInventory.text = own;
   },

   ontouchend: function() {
      /*
      if (this.amount > 0 && checkClicked && playerMoney > this.cost) {
         this.minus();
         this.clicked = true;
         checkClicked = false;
      }
      */
      var location = lookupShop(this.name);

      if (this.amount <= 0) {
         console.log('out of stock');
      }
      else if (playerMoney < this.cost) {
         console.log('not enough money');
      }
      else {
         playerMoney -= this.cost;
         this.amount--;
         playerItems[location].amount++;
         console.log('purchased ' + this.name);
      }
   },

   onenterframe: function() {
      this.updateLabel();
   },

   onaddedtoscene: function() {
      this.shopScene.addChild(this.labelInfo);
      this.shopScene.addChild(this.labelInventory);
   }
});

CakeBatterShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'CakeBatter', 50, 200, 50, shopScene);
      this.frame = 0;
   }
});

CookieDoughShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'CookieDough', 260, 200, 50, shopScene);
      this.frame = 1;
   }
});

PieCrustShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'PieCrust', 470, 200, 50, shopScene);
      this.frame = 2;
   }
});

IceCreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icecream', 50, 420, 50, shopScene);
      this.frame = 3;
   }
});

CreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Cream', 260, 420, 50, shopScene);
      this.frame = 4;
   }
});

IcingShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icing', 470, 420, 50, shopScene);
      this.frame = 5;
   }
});

ChocolateShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Chocolate', 50, 640, 50, shopScene);
      this.frame = 6;
   }
});

VanillaShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Vanilla', 250, 640, 50, shopScene);
      this.frame = 7;
   }
});

StrawberryShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Strawberry', 470, 640, 50, shopScene);
      this.frame = 8;
   }
});