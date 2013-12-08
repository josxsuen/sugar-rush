ShopItem = Class.create(Sprite, {
   initialize: function(name, x, y, cost) {
      Sprite.call(this, 100, 100);
      this.image = game.assets['images/ingredient.png'];
      this.x = x;
      this.y = y;
      this.cost = cost;
      this.name = name;
      this.amount = 0;

      this.labelName = new Label(this.name);
      this.labelName.font = '32px ' + font.plain;
      this.labelName.x = x+115;
      this.labelName.y = y-30;

      this.labelInfo = new Label();
      this.labelInfo.font = '36px ' + font.plain;
      this.labelInfo.x = x+115;
      this.labelInfo.y = y+5;

      this.labelInventory = new Label();
      this.labelInventory.font = 'bold 36px ' + font.plain;
      this.labelInventory.x = x;
      this.labelInventory.y = y-10;
   },

   updateLabel: function() {
      this.labelInfo.text = 'Stock: ' + this.amount +
         '<br />Cost: $' + this.cost;
      this.labelInventory.text = ingredients[this.name].amount;
   },

   ontouchend: function() {
      if (this.amount <= 0) {
         // show out of stock message
      }
      else if (player.money < this.cost) {
         // show out of money message
      }
      else {
         player.money -= this.cost;
         this.amount--;
         ingredients[this.name].amount++;
      }
   },

   onenterframe: function() {
      this.updateLabel();
   },

   onaddedtoscene: function() {
      this.scene.addChild(this.labelName);
      this.scene.addChild(this.labelInfo);
      this.scene.addChild(this.labelInventory);
   }
});

CakeBatterShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'CakeBatter', x, y, cost);
      this.frame = 0;
      this.labelName.color = color.green;
   }
});

CookieDoughShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'CookieDough', x, y, cost);
      this.frame = 1;
      this.labelName.color = color.purple;
   }
});

PieCrustShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'PieCrust', x, y, cost);
      this.frame = 2;
      this.labelName.color = '#aaa';
   }
});

IceCreamShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'IceCream', x, y, cost);
      this.frame = 3;
      this.labelName.color = color.black;
   }
});

CreamShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'Cream', x, y, cost);
      this.frame = 4;
      this.labelName.color = '#ccba00';
   }
});

IcingShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'Icing', x, y, cost);
      this.frame = 5;
      this.labelName.color = color.lightBlue;
   }
});

ChocolateShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'Chocolate', x, y, cost);
      this.frame = 6;
      this.labelName.color = color.orange;
   }
});

VanillaShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'Vanilla', x, y, cost);
      this.frame = 7;
      this.labelName.color = color.lightBrown;
   }
});

StrawberryShop = Class.create(ShopItem, {
   initialize: function(x, y, cost) {
      ShopItem.call(this, 'Strawberry', x, y, cost);
      this.frame = 8;
      this.labelName.color = color.lightRed;
   }
});