enchant();

window.onload = function(){
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload(); //put images and sounds here. ex: 'bear1.png'

    game.onload = function(){
		var player = new Player();
    };

    game.start();
};
