Player = Class.create({
   initialize: function() {
      this.money = 0;
      this.health = 100;
      this.score = 0;
   },
   
   addHealth: function(addNumber) {
      player.health += addNumber;
      if (player.health >= 100)
         player.health = 100;
      if (player.health <= 0) {
         player.health = 0;

         game.popScene();
         game.pushScene(new Gameover(player.score));
      }
   },

   reset: function() {
      this.money = 0;
      this.health = 100;
      this.score = 0;

      for (var i in ingredients) {
         ingredients[i].amount = 0;
      }
   }
});