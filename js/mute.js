var globalVolume = 1;

Mute = Class.create(Sprite, {
	initialize: function(bgm) {
		Sprite.call(this, 75, 75);
		this.image = game.assets['images/bomb.png'];
		this.x = 100;
		this.y = 880;
		this.bgm = bgm;
		this.volume = bgm.volume;
	},

	ontouchend: function() {
		if (this.bgm.volume === this.volume) {
			this.bgm.volume = 0;
			globalVolume = 0;
		}
		else {
			this.bgm.volume = this.volume;
			globalVolume = 1;
		}
	}
});