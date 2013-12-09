Splash = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);

      var background = new Sprite(640, 960);
      background.image = game.assets['images/splash.png'];

      var playButton = new Sprite(300, 100);
      playButton.image = game.assets['images/splashbuttons.png'];
      playButton.frame = 0;
      playButton.x = 170;
      playButton.y = 600;
      playButton.addEventListener('touchend', function() {
         game.popScene();
      });

      var tutorialButton = new Sprite(300, 100);
      tutorialButton.image = game.assets['images/splashbuttons.png'];
      tutorialButton.frame = 1;
      tutorialButton.x = 170;
      tutorialButton.y = 720;
      tutorialButton.addEventListener('touchend', function() {
         game.pushScene(new Tutorial());
      });

      this.addChild(background);
      this.addChild(playButton);
      this.addChild(tutorialButton);
   },
});

tutorialbutton = function(frame, x, y) {
   var button = new Sprite(200, 75);

   button.image = game.assets['images/tutorialbuttons.png'];
   button.frame = frame;
   button.x = x;
   button.y = y;

   return button;
};

Tutorial = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);
      this.backgroundColor = 'rgba(0,0,0,0.8)';
      this.num = 1;

      this.exitButton = tutorialbutton(0,  10, 20);
      this.exitButton.addEventListener('touchend', function() {
         game.popScene();
      });

      this.prevButton = tutorialbutton(2, 230, 20);
      this.prevButton.addEventListener('touchend', function() {
         this.scene.num--;
      });

      this.nextButton = tutorialbutton(1, 430, 20);
      this.nextButton.addEventListener('touchend', function() {
         this.scene.num++;
      });

      this.slide = new Sprite(540, 810);
      this.slide.image = game.assets['images/tutorials/1.png'];
      this.slide.x = 50;
      this.slide.y = 120;

      this.addChild(this.exitButton);
      this.addChild(this.prevButton);
      this.addChild(this.nextButton);
      this.addChild(this.slide);
   },

   onenterframe: function() {
      this.slide.image = game.assets['images/tutorials/' + this.num + '.png'];

      this.prevButton.visible = this.num !== 1;
      this.nextButton.visible = this.num !== 11;
   }
});