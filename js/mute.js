var globalVolume = 1;

Mute = Class.create(Sprite, {
	initialize: function(bgm) {
		Sprite.call(this, 60, 72);
		this.image = game.assets['images/volumebuttons.png'];
		this.frame = 0;
		this.x = 100;
		this.y = 880;
		this.bgm = bgm;
		this.volume = bgm.volume;
	},

	ontouchend: function() {
		if (this.bgm.volume === this.volume) {
			this.bgm.volume = 0;
			globalVolume = 0;
			this.frame = 1;
		}
		else {
			this.bgm.volume = this.volume;
			globalVolume = 1;
			this.frame = 0;
		}
	}
});