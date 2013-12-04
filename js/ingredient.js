// Ingredient

Ingredient = Class.create(Sprite, {
   initialize: function(place, name, x, y) {
      Sprite.call(this, 100, 100);
      this.image = game.assets['images/ingredient.png'];
      this.x = x;
      this.y = y;

      this.name = name;
      this.amount = 0;

      this.label = new Label('');
      this.label.font = 'bold 18px Arial';
      this.label.x = x;
      this.label.y = y;

      this.clicked = false;
      this.world = place;
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
      this.label.text = this.amount;
   },

   ontouchend: function() {
      if (this.amount > 0 && checkClicked) {
         this.minus();
         this.clicked = true;
         checkClicked = false;
      }
      else if (this.clicked && !checkClicked) {
         this.clicked = false;
         checkClicked = true;
         this.add();
      }
   },

   onenterframe: function() {
      this.updateLabel();
   },

   onaddedtoscene: function() {
      this.world.addChild(this.label);
   }
});

// Ingredient types

CakeBatter = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'CakeBatter', 50, 565);
      this.frame = 0;
   }
});

CookieDough = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'CookieDough', 160, 565);
      this.frame = 1;
   }
});

PieCrust = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'PieCrust', 270, 565);
      this.frame = 2;
   }
});

IceCream = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'IceCream', 380, 565);
      this.frame = 3;
   }
});

Cream = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'Cream', 490, 565);
      this.frame = 4;
   }
});

Icing = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'Icing', 50, 680);
      this.frame = 5;
   }
});

Chocolate = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'Chocolate', 160, 680);
      this.frame = 6;
   }
});

Vanilla = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'Vanilla', 270, 680);
      this.frame = 7;
   }
});

Strawberry = Class.create(Ingredient, {
   initialize: function(place) {
      Ingredient.call(this, place, 'Strawberry', 380, 680);
      this.frame = 8;
   }
});
