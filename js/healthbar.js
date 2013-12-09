Health = Class.create(Sprite, {
	initialize: function () {
		Sprite.call(this, 300, 25);
	    this.image = game.assets['images/healthbar.png'];
	    this.x = 200;
	    this.y = 920;

	    this.backgroundhealth = new Sprite(300, 25);
	    this.backgroundhealth.image = game.assets['images/healthbackground.png'];
	    this.backgroundhealth.x = 200;
	    this.backgroundhealth.y = 920;
	},

	onenterframe: function() {
		this.width = player.health * 3;
	}
});