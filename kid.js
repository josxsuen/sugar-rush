//@param happinesslevel the happy bar that decrements while the kid is waiting on to be fed.
//@param tolerance minimum ingredients needed for kid to be satisfied.
//@param preference hints for user to appeal to
var Kid = Class.create({
   initialize: function() {
      var happinessLevel = 100;
      var tolerance = 1; //1, 1/3, 2/3
      var preference = [];
   },
   
   getHappiness: function() {
      return this.happinessLevel;
   },
   
   getTolerance: function() {
      return this.tolerance;
   },
   
   setTolerance function(newTolerence) {
      this.tolerance = newTolerence;
   },

   findEmptySpot: function() {
      
   }
});
