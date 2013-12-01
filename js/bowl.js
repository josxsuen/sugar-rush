Bowl = Class.create(Sprite, {
   initialize: function(x, y, recipes, world, person) {
      Sprite.call(this, 120, 110);
      this.image = world.assets['images/bowl.png'];
      this.x = x;
      this.y = y;
      this.frame = 0;

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
         this.frame = 3;
         console.log("bad mix");
      }
      else {
         this.image = dessert.image;
         this.frame = dessert.frame;
         this.recipes[r].ready = true;
         // this.count = 0;
         // for (var i in this.contents) {
         //    this.contents[i] = 0;
         // }
         console.log("good mix");
      }
   },   
   
   ontouchend: function() {
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
});