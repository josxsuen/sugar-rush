Bowl = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 120, 110);
      this.image = game.assets['images/bowl.png'];
      this.x = x;
      this.y = y;
      this.frame = 0;

      this.trashing = false;

      this.contents = {
         CakeBatter: 0,
         CookieDough:0,
         PieCrust:   0,
         Icing:      0,
         IceCream:   0,
         Vanilla:    0,
         Chocolate:  0,
         Cream:      0,
         Strawberry: 0
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

      for (var r in recipebook) {
         var badMix = false;

         for (var i in this.contents) {
            if (this.contents[i] !== recipebook[r].insides[i]) {
               badMix = true;
            }
         }

         if (!badMix) {
            dessert = recipebook[r];
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
         var len = this.scene.bowls.length;
         
         //remove bowl
         for (var i in this.scene.bowls) {
            if (this.scene.bowls[i].x === x) {
               var toRemove = this.scene.bowls[i];
               this.scene.bowls.splice(i, 1);
               this.scene.removeChild(toRemove);
               // if (i === 0) {
               //    this.scene.bowls.shift();
               // }
               // else if (i === len - 1) {
               //    this.scene.bowls.pop();
               // }
               // else {
               //    var array = [];
               //    array[0] = this.scene.bowls[0];
               //    array[1] = (this.scene.bowls[len-1]);
               //    this.scene.bowls = array;
               // }
               break;
            }
         }
         
         //adding dessert
         var toAdd = new dessert.constructor;
         yumDesserts.push(toAdd);
         toAdd.x = x;
         toAdd.y = y;
         this.scene.addChild(toAdd);
         
         console.log("good mix");
      }
   },   
   
   ontouchend: function() {
      if (this.open) {
         //check if no ingredient is clicked, true = not clicked.
         var trash = true;
         
         // search list of ingredients
         for (var i in ingredients) {
            if (this.open && ingredients[i].clicked) {
               // this.contents.push(list[i].name);
               this.contents[ingredients[i].name]++;
               this.frame++;
               this.count++;
               
               ingredients[i].clicked = false;
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