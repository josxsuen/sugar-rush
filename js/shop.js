newShop = function(game) {
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

   shopLabel = new Label('Shop');
   shopLabel.font = 'bold 64px Arial';
   shopLabel.color = 'black';
   shopLabel.x = 240;
   shopLabel.y = 20;
   
   shopScene.addChild(shopLabel);

   return shopScene;
}

//need to access player's money etc somehow -- global?

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
      this.label.text = "amount: " + this.amount + ", cost: " + this.cost +
          "<br><br>                     own: " + 5;
   },
   
   ontouchend: function() {
      if (this.amount > 0 && checkClicked) {
         this.minus();
         this.clicked = true;
         checkClicked = false;
      }
      /*
      var location = items.indexOf(ingredient);

      if (location == -1 || items[location].amount <= 0) {
         //don't have enough of the ingredient, make sound to signify
      }
      else if (player.money < cost) {
         error: not enough money
      }
      else {
         player.money -= ingredient.cost;
         items[location].amount--;
         player.items[location].amount++;
      }
      return player; //update actual player money in main
      */
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
      Shop.call(this, place, 'CakeBatter', 50, 200, 100, shopScene);
      this.frame = 0;
   }
});

CookieDoughShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'CookieDough', 340, 200, 100, shopScene);
      this.frame = 1;
   }
});

PieCrustShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'PieCrust', 50, 350, 100, shopScene);
      this.frame = 2;
   }
});

IceCreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icing', 340, 350, 100, shopScene);
      this.frame = 3;
   }
});

CreamShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Cream', 50, 500, 100, shopScene);
      this.frame = 4;
   }
});

IcingShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Icing', 340, 500, 100, shopScene);
      this.frame = 5;
   }
});

ChocolateShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Chocolate', 50, 650, 100, shopScene);
      this.frame = 6;
   }
});

VanillaShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Vanilla', 340, 650, 100, shopScene);
      this.frame = 7;
   }
});

StrawberryShop = Class.create(Shop, {
   initialize: function(place, shopScene) {
      Shop.call(this, place, 'Strawberry', 50, 800, 100, shopScene);
      this.frame = 8;
   }
});