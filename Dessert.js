enchant();

/*********************
        DESSERT
*********************/
ChocolateCake = Class.create({
   initialize: function() {
      this.insides = ["CakeBatter", "Icing", "Chocolate"];
   }
});

ChocoStrawCake = Class.create({
   initialize: function() {
      this.insides = ["CakeBatter", "Strawberry", "Chocolate"];
   }
});

VanillaCake = Class.create({
   initialize: function() {
      this.insides = ["CakeBatter", "Icing", "Vanilla"];
   }
});

StrawShortCake = Class.create({
   initialize: function() {
      this.insides = ["CakeBatter", "Strawberry", "Cream"];
   }
});

BirthdayCake = Class.create({
   initialize: function() {
      this.insides = ["CakeBatter", "Icecream", "Icecream"];
   }
});

ChocolateIcecream = Class.create({
   initialize: function() {
      this.insides = ["IceCream", "Cream", "Chocolate"];
   }
});

VanillaIcecream = Class.create({
   initialize: function() {
      this.insides = ["IceCream", "Cream", "Vanilla"];
   }
});

StrawberryIcecream = Class.create({
   initialize: function() {
      this.insides = ["IceCream", "Cream", "Strawberry"];
   }
});

NapoleonIcecream = Class.create({
   initialize: function() {
      this.insides = ["IceCream", "Strawberry", "Chocolate"];
   }
});

Cookie = Class.create({
   initialize: function() {
      this.insides = ["CookieDough", "Chocolate", "Chocolate"];
   }
});

IcingCookie = Class.create({
   initialize: function() {
      this.insides = ["CookieDough", "Icing", "Icing"];
   }
});

ChocolatePie = Class.create({
   initialize: function() {
      this.insides = ["PieCrust", "Cream", "Chocolate"];
   }
});

StrawberryPie = Class.create({
   initialize: function() {
      this.insides = ["PieCrust", "Cream", "Strawberry"];
   }
});

OriginalPie = Class.create({
   initialize: function() {
      this.insides = ["PieCrust", "Cream", "Vanilla"];
   }
});

IcecreamPie = Class.create({
   initialize: function() {
      this.insides = ["PieCrust", "Cream", "IceCream"];
   }
});

ChocoCoverStraw = Class.create({
   initialize: function() {
      this.insides = ["Chocolate", "Strawberry", "Chocolate"];
   }
});



/*********************
      INGREDIENTS
*********************/
CakeBatter = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "CakeBatter";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

CookieDough = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "CookieDough";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});


Icing = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 200;
      this.name = "Icing";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

IceCream = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "IceCream";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

Vanilla = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "Vanilla";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

Chocolate = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 43, 51);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 0;
      this.name = "Chocolate";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

Cream = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "Cream";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

Strawberry = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "Strawberry";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});

PieCrust = Class.create(Sprite, {
   initialize: function(place) {
      Sprite.call(this, 56, 56);
      this.amount = 4;
      this.label = new Label("");
      this.label.x = 100;
      this.name = "PieCrust";
      this.clicked = false;
      this.world = place;
   },
   
   add: function() {
      this.amount += 1;
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
      this.label.text = this.amount;
   },
   
   ontouchend: function() {
      if (this.amount > 0) {
         this.minus();
         this.clicked = true;
      }
   },
   
   onenterframe: function() {
      this.updateLabel();
   },
   
   onaddedtoscene: function() {
      this.world.rootScene.addChild(this.label);
   }
});