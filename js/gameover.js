Gameover = Class.create(Scene, {
   initialize: function(score) {
      Scene.call(this);
      this.backgroundColor = '#ddd';

      // Title
      var gameoverLabel = new Label('Game Over');
      gameoverLabel.font = '108px ' + font.script;
      gameoverLabel.textAlign = 'center';
      gameoverLabel.color = color.darkBlue;
      gameoverLabel.width = 640;
      gameoverLabel.y = 100;

      // Back to menu
      var restart = new Label('BACK TO MENU');
      restart.font = '72px ' + font.plain;
      restart.textAlign = 'center';
      restart.color = '#888';
      restart.width = 640;
      restart.y = 760;

      restart.addEventListener('touchend', function() {
         game.popScene();
         game.pushScene(new Splash());
      });

      this.addChild(gameoverLabel);
      this.addChild(restart);

      // Show final game stats
      this.addStat('FINAL SCORE', score, 400);
   },

   addStat: function(header, num, y) {
      var headerLabel = new Label(header);
      var numLabel = new Label(num);

      headerLabel.font = '54px ' + font.plain;
      numLabel.font = '84px ' + font.plain;

      headerLabel.textAlign = numLabel.textAlign = 'center';
      headerLabel.width = numLabel.width = 640;

      headerLabel.color = '#444';
      numLabel.color = '#222';

      headerLabel.y = y;
      numLabel.y = y+40;

      this.addChild(headerLabel);
      this.addChild(numLabel);
   }
});
