this.globalVolume = 1; // use to mute sound effects

Mute = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.call(this, 60, 72);
		this.image = game.assets['images/volumebuttons.png'];
		this.x = x;
		this.y = y;
		this.frame = game.bgm.volume === maxVolume ? 0 : 1;
	},

	onenterframe: function() {
		this.frame = game.bgm.volume === maxVolume ? 0 : 1;
	},

	ontouchend: function() {
		// if (this.bgm.volume === this.volume) {
		// 	this.bgm.volume = 0;
		// 	globalVolume = 0;
		// 	this.frame = 1;
		// }
		// else {
		// 	this.bgm.volume = this.volume;
		// 	globalVolume = 1;
		// 	this.frame = 0;
		// }

		if (game.bgm.volume === maxVolume) {
			game.bgm.volume = 0;
			globalVolume = 0;
		}
		else {
			game.bgm.volume = maxVolume;
			globalVolume = 1;
		}
	}
});