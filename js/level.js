Level = Class.create(Scene, {
   initialize: function(num) {
      Scene.call(this);

	   this.bgm = game.assets['sounds/background.wav'];
      this.bgm.volume = 0.75;
      this.bgm.play();
	  
      // Set number of Kids to feed
      this.num = num;
      this.levelScore = 0;

      // Add background
      var background = new Sprite(640, 960);
      background.image = game.assets['images/background.png'];
      this.addChild(background);

      // Health bar
	   this.health = new Health();
      this.health.addEventListener('enterframe', function(){ 
         this.width = 2 * player.health;
      });
      this.addChild(this.health.backgroundhealth);
      this.addChild(this.health);

      // Score
      this.score = new Label();
      this.score.font = '48px ' + font.plain;
      this.score.x = 200;
      this.score.y = 860;
      this.addChild(this.score);

      // Mute button
      this.mute = new Mute(this.bgm);
      this.addChild(this.mute);

      // Add ingredients
      for (var i in ingredients) {
         this.addChild(ingredients[i]);
      }

      // Add bowls
      this.addChild(new Bowl( 50, 340, game.recipebook, game.player));
      this.addChild(new Bowl(250, 340, game.recipebook, game.player));
      this.addChild(new Bowl(450, 340, game.recipebook, game.player));

      // Add trashcan
      this.addChild(new Trash());

      // Add recipebook button
      this.addChild(new RecipeBookEnter());
      
      // Add Slots
      this.slot = [];
   },

   onenterframe: function() {
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
	  
	   if (this.bgm.currentTime >= this.bgm.duration)
         this.bgm.play();

      if (this.age % 10 === 0)
         player.addHealth(-1);

      this.score.text = 'Score: ' + this.levelScore;
   },

   addKid: function(slot) {
      var kid;
      var slotX;
      
      switch (slot) {
         case 0: slotX =  50; break;
         case 1: slotX = 250; break;
         case 2: slotX = 450; break;
      }

      kid = new Kid(slotX);
      
      this.addChild(kid);
      
      return kid;
   },

   addBowl: function(x, y) {
      this.addChild(new Bowl(x, y));
   }
});
