class GameOver extends Phaser.Scene {
    constructor() {
      super("gameoverScene");
    }
    create(){
      this.add.text(game.config.width / 2, game.config.height / 3, "Game Over!", { fontFamily: "After Hours", fontSize: 64 }).setOrigin(0.5);
    }
}