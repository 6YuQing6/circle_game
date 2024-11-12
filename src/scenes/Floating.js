class Floating extends Phaser.Scene {
    constructor() {
      super("FloatScene");
    }
    create(){
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
        this.circle = this.matter.add.polygon(game.config.width/2, game.config.height/2, 50, 70, {restitution: 0.9})
    }
    update(){

    }
}