// Dessert types

Dessert = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 120, 110);
      this.insides = {
         CakeBatter: 0,
         CookieDough:0,
         Icing:      0,
         IceCream:   0,
         Vanilla:    0,
         Chocolate:  0,
         Cream:      0,
         Strawberry: 0,
         PieCrust:   0
      };
      this.image = game.assets['images/dessert.png'];
      this.feed = false;
      this.clicked = false;
   },

   onenterframe: function() {
      this.image = game.assets['images/dessert' + (this === pendingObject ? 'select.png' : '.png')];
   },

   ontouchend: function() {      
      if (pendingObject === this) {
         pendingAction = 'NONE';
         pendingObject = null;
      }
      else {
         pendingAction = 'DESSERT';
         pendingObject = this;
      }
   }
});

ChocolateCake = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CakeBatter'] = 1;
      this.insides['Icing'] = 1;
      this.insides['Chocolate'] = 1;
      this.frame = 0;
   }
});

ChocoStrawCake = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CakeBatter'] = 1;
      this.insides['Strawberry'] = 1;
      this.insides['Chocolate'] = 1;
      this.frame = 1;
   }
});

VanillaCake = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CakeBatter'] = 1;
      this.insides['Icing'] = 1;
      this.insides['Vanilla'] = 1;
      this.frame = 2;
   }
});

StrawShortCake = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CakeBatter'] = 1;
      this.insides['Strawberry'] = 1;
      this.insides['Cream'] = 1;
      this.frame = 3;
   }
});

BirthdayCake = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CakeBatter'] = 1;
      this.insides['IceCream'] = 2;
      this.frame = 4;
   }
});

ChocolateIceCream = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['IceCream'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Chocolate'] = 1;
      this.frame = 5;
   }
});

VanillaIceCream = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['IceCream'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Vanilla'] = 1;
      this.frame = 6;
   }
});

StrawberryIceCream = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['IceCream'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Strawberry'] = 1;
      this.frame = 7;
   }
});

NeapolitanIceCream = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['IceCream'] = 1;
      this.insides['Strawberry'] = 1;
      this.insides['Chocolate'] = 1;
      this.frame = 8;
   }
});

Cookie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CookieDough'] = 1;
      this.insides['Chocolate'] = 2;
      this.frame = 9;
   }
});

IcingCookie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['CookieDough'] = 1;
      this.insides['Icing'] = 2;
      this.frame = 10;
   }
});

ChocolatePie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['PieCrust'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Chocolate'] = 1;
      this.frame = 11;
   }
});

StrawberryPie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['PieCrust'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Strawberry'] = 1;
      this.frame = 12;
   }
});

OriginalPie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['PieCrust'] = 1;
      this.insides['Cream'] = 1;
      this.insides['Vanilla'] = 1;
      this.frame = 13;
   }
});

IceCreamPie = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['PieCrust'] = 1;
      this.insides['Cream'] = 1;
      this.insides['IceCream'] = 1;
      this.frame = 14;
   }
});

ChocoCoverStraw = Class.create(Dessert, {
   initialize: function() {
      Dessert.call(this);
      this.insides['Chocolate'] = 2;
      this.insides['Strawberry'] = 1;
      this.frame = 15;
   }
});