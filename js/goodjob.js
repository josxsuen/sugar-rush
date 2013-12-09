GoodJob = Class.create(Scene, {
   initialize: function(levelScore, score) {
      Scene.call(this);
      this.backgroundColor = color.lightGreen;

      // Title
      var goodjobLabel = new Label('Good job!');
      goodjobLabel.font = '108px ' + font.script;
      goodjobLabel.textAlign = 'center';
      goodjobLabel.color = color.pink;
      goodjobLabel.width = 640;
      goodjobLabel.y = 100;

      // Go to next level
      var next = new Label('NEXT LEVEL');
      next.font = '72px ' + font.plain;
      next.textAlign = 'center';
      next.color = '#888';
      next.width = 640;
      next.y = 760;

      next.ontouchend = function() {
         game.popScene();
      };

      this.addChild(goodjobLabel);
      this.addChild(next);

      // Show final game stats
      this.addStat('LEVEL SCORE', levelScore, 340);
      this.addStat('TOTAL SCORE', score, 520);
   },

   addStat: function(header, num, y) {
      var headerLabel = new Label(header);
      var numLabel = new Label('' + num);

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