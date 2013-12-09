Health = Class.create(Sprite, {
	initialize: function () {
		Sprite.call(this, 200, 50);
	    this.image = game.assets['images/healthbar.png'];
	    this.x = 200;
	    this.y = 900;


	    this.backgroundhealth = new Sprite(200, 50);
	    this.backgroundhealth.image = game.assets['images/healthbackground.png'];
	    this.backgroundhealth.x = 200;
	    this.backgroundhealth.y = 900;
	},

	oneneterframe: function() {
		console.log('hi');
		this.width = 2 * player.health;
		console.log(2*player.health);
	}
});