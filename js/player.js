Player = Class.create({
	initialize: function(items, recipes, desserts) {
		var money = 0;
		var health = 100;
      this.items = items;
      this.recipes = recipes;
      this.desserts = desserts;
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
