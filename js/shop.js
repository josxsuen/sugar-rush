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

   shopScene.addChild(background);
   for (var i in shopIngredients) {
      shopScene.addChild(shopIngredients[i]);
      shopIngredients[i].addAmt(10);
   }

   var shopLabel = new Label('Shop');
   shopLabel.font = 'bold 64px Arial';
   shopLabel.color = 'black';
   shopLabel.x = 240;
   shopLabel.y = 20;

   var nextLevelLabel = new Label('Begin Next Level');
   nextLevelLabel.font = 'bold 24px Arial';
   nextLevelLabel.color = 'black';
   nextLevelLabel.x = 400;
   nextLevelLabel.y = 920;
   nextLevelLabel.buttonMode = 'a';

   nextLevelLabel.onenterframe = function() {
      if (this.buttonPressed)
         game.popScene();
   };

   var currentMoney = new Label('funds: ' + playerMoney);
   currentMoney.font = 'bold 24px Arial';
   currentMoney.color = 'black';
   currentMoney.x = 450;
   currentMoney.y = 130;

   currentMoney.onenterframe = function() {
      this.text = ('funds: ' + playerMoney);
   };

   shopScene.addChild(shopLabel);
   shopScene.addChild(nextLevelLabel);
   shopScene.addChild(currentMoney);

   return shopScene;
}

Shop = Class.create(Sprite, {
   initialize: function(place, name, x, y, cost, shopScene) {
      Sprite.call(this, 200, 100);
      this.shopScene = shopScene;
      this.image = game.assets['images/shopImages.png'];
      this.x = x;
      this.y = y;
      this.cost = cost;
      this.name = name;
      this.amount = 0;

      this.label = new Label('');
      this.label.font = 'bold 18px Arial';
      this.label.color = 'black';
      this.label.x = x;
      this.label.y = y;

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

      this.label.text = "amount: " + this.amount + ", cost: " + this.cost +
          "<br><br>                     own: " + own;
   },

   ontouchend: function() {
      /*
      if (this.amount > 0 && checkClicked && playerMoney > this.cost) {
         this.minus();
         this.clicked = true;
         checkClicked = false;
      }
      */
	  console.log("touched");
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
      this.shopScene.addChild(this.label);
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
      Shop.call(this, place, 'CookieDough', 340, 200, 50, shopScene);
      this.frame = 1;
   }
});

PieCrustShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'PieCrust', 50, 350, 50, shopScene);
      this.frame = 2;
   }
});

IceCreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icecream', 340, 350, 50, shopScene);
      this.frame = 3;
   }
});

CreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Cream', 50, 500, 50, shopScene);
      this.frame = 4;
   }
});

IcingShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icing', 340, 500, 50, shopScene);
      this.frame = 5;
   }
});

ChocolateShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Chocolate', 50, 650, 50, shopScene);
      this.frame = 6;
   }
});

VanillaShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Vanilla', 340, 650, 50, shopScene);
      this.frame = 7;
   }
});

StrawberryShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Strawberry', 50, 800, 50, shopScene);
      this.frame = 8;
   }
});