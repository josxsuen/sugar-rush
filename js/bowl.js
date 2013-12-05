Bowl = Class.create(Sprite, {
   initialize: function(x, y, recipes, world, person) {
      Sprite.call(this, 120, 110);
      this.image = game.assets['images/bowl.png'];
      this.x = x;
      this.y = y;
      this.frame = 0;
      this.world = world;

      this.trashing = false;
      this.recipes = recipes;
      this.player = person;

      this.contents = {
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
      this.count = 0;
      this.open = true;
   },
   
   onenterframe: function() {
      if (this.open && this.count === 3) {
         this.checkRecipe();
         this.open = false;
      }
   },
   
   checkRecipe: function() {
      var number = 0;

      var dessert;

      for (var r in this.recipes) {
         var badMix = false;

         for (var i in this.contents) {
            if (this.contents[i] != this.recipes[r].insides[i]) {
               badMix = true;
            }
         }

         if (!badMix) {
            dessert = this.recipes[r];
            break;
         }
      }

      
      if (badMix) {
         //bad mix
         this.frame = 3;
         console.log("bad mix");
      }
      else {
         //good mix. remove bowl. add dessert.
         
         var x = this.x;
         var y = this.y;
         var len = this.world.Bowls.length;
         
         //remove bowl
         for (var i in this.world.Bowls) {
            if (this.world.Bowls[i].x === x) {
               this.world.removeChild(this);
               if (i == 0) {
                  this.world.Bowls.shift();
               }
               else if (i == len - 1) {
                  this.world.Bowls.pop();
               }
               else {
                  var array = [];
                  array[0] = this.world.Bowls[0];
                  array[1] = (this.world.Bowls[len-1]);
                  this.world.Bowls = array;
               }
               break;
            }
         }
         
         //adding dessert
         var toAdd = new dessert.constructor;
         yumDesserts.push(toAdd);
         toAdd.x = x;
         toAdd.y = y;
         this.world.addChild(toAdd);
         
         console.log("good mix");
      }
   },   
   
   ontouchend: function() {
      if (this.open) {
         //check if no ingredient is clicked, true = not clicked.
         var trash = true;
         
         //search in player for ingredient that was touched.
         var list = this.player.items;

         for (var i in list) {
            if (this.open && list[i].clicked) {
               // this.contents.push(list[i].name);
               this.contents[list[i].name]++;
               this.frame++;
               this.count++;
               
               list[i].clicked = false;
               checkClicked = true;
               
               trash = false;
            }
         }
         
         if (trash) {
            this.trashing = true;
         }
      }
   }
});