const config = {
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 820,
    height: 820,
    zoom: 0.75,
    render: {
      pixelArt: true,
    },
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        gravity: {
          y: 0,
        },
      },
    },
    scene: [Floating, GameOver],
  };
  
  const game = new Phaser.Game(config);
  
  const { width, height } = game.config;
  const padding = 50;
  
  let cursors;