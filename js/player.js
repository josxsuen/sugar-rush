Player = Class.create({
	initialize: function(items, recipes) {
		var money = 0;
		var health = 100;
      this.items = items;
      this.recipes = recipes;
	},
   
   // getIngredients: function() {
   //    return this.items;
   // },
   
   // getRecipes: function() {
   //    return this.recipes;
   // },

	addMoney: function(dolla) {
		this.money += dolla;
	}
});
