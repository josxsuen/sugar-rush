Level = Class.create(Scene, {
   initialize: function(num) {
      Scene.call(this);

      // Set number of Kids to feed
      this.num = num;

      // Add background
      var background = new Sprite(640, 960);
      background.image = game.assets['images/background.png'];
      this.addChild(background);

      // Add ingredients
      for (var i in ingredients) {
         this.addChild(ingredients[i]);
      }

      // Add bowls
      this.bowls = [];
      this.bowls.push(new Bowl( 50, 340, game.recipebook, game.player));
      this.bowls.push(new Bowl(250, 340, game.recipebook, game.player));
      this.bowls.push(new Bowl(450, 340, game.recipebook, game.player));

      for (var i in this.bowls) {
         this.addChild(this.bowls[i]);
      }

      // Add trashcan
      this.trashcan = new Trash();
      this.addChild(this.trashcan);

      // Add recipebook button
      this.addChild(new RecipeBookEnter());
      
      // Add Slots
      this.slot = [];
      
      // Add EventListener
      this.addEventListener(Event.ENTER_FRAME, function() {
         if (this.num-- > 0) {
            if (!this.slot[0])
               this.slot[0] = this.addKid(0);
            else if (!this.slot[1])
               this.slot[1] = this.addKid(1);
            else if (!this.slot[2])
               this.slot[2] = this.addKid(2);
            else 
               this.num++;
         }
      });
   },
   
   addKid: function(slot) {
      var kid;
      var slotX;
      
      switch(slot) {
         case 0: slotX =  50; break;
         case 1: slotX = 250; break;
         case 2: slotX = 450; break;
      }
      kid = new Kid(slotX);
      this.addChild(kid);
      
      return kid;
   }
});
