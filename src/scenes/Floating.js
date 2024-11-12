class Floating extends Phaser.Scene {
    constructor() {
      super("FloatScene");
    }
    create(){
        this.circle = this.add.circle(400, 300, 20, 0xff0000)
        this.physics.add.existing(this.circle)
        this.circle.body.setBounce(1)
        this.circle.body.setCollideWorldBounds(true)
        this.circle.body.setVelocity(100,100)
    }
    update(){

    }
}