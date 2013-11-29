enchant();

MixingBowl = Class.create(Sprite, {
   initialize: function(x, y, world, person, ranKid) {
      Sprite.call(this, 125, 100);
      this.x = x;
      this.y = y;
      this.image = world.assets['images/bowls.png'];
      this.scale(.5, .5);
      this.frame = 0;
      this.player = person;
      this.kid = ranKid;

      this.contents = [];
      this.count = 0;
   },
   
   onenterframe: function() {
      if (this.count == 3) {
         this.frame = 0;
         this.checkRecipe();
      }
   },
   
   checkRecipe: function() {
      var item = this.kid.getDessert();
      var number = 0;
      
      for (var i = 0; i < this.count; i++) {
         for (var j = 0; j < this.count; j++) {
            var str1 = "" + this.contents[j];
            var str2 = "" + item.insides[i];
            if (str2 === str1) {
               this.contents[j] = 0;
               number++;
               break;
            }
         }
      }
      if (number == 3){
         console.log("WIN");
         //add hp/points
      }
         
      this.count = 0
      this.contents.pop();
      this.contents.pop();
      this.contents.pop();
   },
   
   
   ontouchend: function() {
      //search in player for ingredient that was touched.
      var list = this.player.getIngredients();
      for (var i = 0; i < list.length; i++) {
         if (list[i].clicked) {
            this.contents.push(list[i].name);
            list[i].clicked = false;
            this.frame++;
            this.count++;
            checkClicked = true;
         }
      }
   }
});