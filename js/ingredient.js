// Ingredient

Ingredient = Class.create(Sprite, {
   initialize: function(name, x, y) {
      Sprite.call(this, 100, 100);
      this.image = game.assets['images/ingredient.png'];
      this.x = x;
      this.y = y;

      this.name = name;
      this.amount = 0;

      this.label = new Label('');
      this.label.font = 'bold 36px ' + font.plain;
      this.label.x = x;
      this.label.y = y-10;

      this.clicked = false;
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
      this.scene.addChild(this.label);
   }
});

// Ingredient types

CakeBatter = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'CakeBatter', 50, 565);
      this.frame = 0;
   }
});

CookieDough = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'CookieDough', 160, 565);
      this.frame = 1;
   }
});

PieCrust = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'PieCrust', 270, 565);
      this.frame = 2;
   }
});

IceCream = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'IceCream', 380, 565);
      this.frame = 3;
   }
});

Cream = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'Cream', 490, 565);
      this.frame = 4;
   }
});

Icing = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'Icing', 50, 680);
      this.frame = 5;
   }
});

Chocolate = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'Chocolate', 160, 680);
      this.frame = 6;
   }
});

Vanilla = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'Vanilla', 270, 680);
      this.frame = 7;
   }
});

Strawberry = Class.create(Ingredient, {
   initialize: function() {
      Ingredient.call(this, 'Strawberry', 380, 680);
      this.frame = 8;
   }
});
