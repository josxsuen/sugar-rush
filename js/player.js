Player = Class.create({
   initialize: function() {
      this.money = 0;
      this.health = 100;
      this.score = 0;
      
      this.items = {
         CakeBatter: 0,
         CookieDough:0,
         Icing:      0,
         IceCream:   0,
         Vanilla:    0,
         Chocolate:  0,
         Cream:      0,
         Strawberry: 0,
         PieCrust:   0
      }
   },
   
   addHealth: function(addNumber) {
      player.health += addNumber;
      if (player.health >= 100)
         player.health = 100;
      if (player.health <= 0) {
         //endgame
         player.health = 0;
      }
   }
});