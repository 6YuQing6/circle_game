class Floating extends Phaser.Scene {
    constructor() {
      super("FloatScene");
    }
    create() {
      this.rect = this.add.rectangle(width / 2, height / 2, 256, 256, 0xff0000);
      this.physics.add.existing(this.rect);
      this.rect.body.setBounce(1);
      this.rect.body.setCollideWorldBounds(true);
      this.rect.body.setVelocity(100, 100);
  
      this.rectGroup = this.add.group({
        runChildUpdate: true,
      });
      this.rectGroup.add(this.rect);
      this.makeItClick(this.rect)
      this.physics.add.collider(this.rectGroup, this.rectGroup);
    }
    update() {
        
    }
    
    makeItClick(gameObject){
        const DotheThings = () => {
            const x = gameObject.x
            const y = gameObject.y
            const width = gameObject.width/2
            const height = gameObject.height/2
            const color = gameObject.color
            const velocityx = gameObject.body.velocity.x
            const velocityy = gameObject.body.velocity.y
            
            createRect(x +50 , y, width, height, color , velocityx * 1.25, velocityy * 1.25)
            createRect(x -50 , y, width, height, color, velocityx * -1.25, velocityy * 1.25)
            destroyRect(gameObject)
        };
        const createRect = (scene, x, y, width, height, color, velocityx, velocityy) => {
            const rect = this.add.rectangle(x, y, width, height, color)
            this.physics.add.existing(rect)
            rect.body.setVelocity(velocityx, velocityy)
            rect.body.setCollideWorldBounds(true)
            rect.body.setBounce(1)
            this.rectGroup.add(rect)
            this.makeItClick(rect)
        };
        const destroyRect = (Rect) => {
            Rect.destroy();
        };
        gameObject.setInteractive();
        gameObject.on(Phaser.Input.Events.POINTER_DOWN, DotheThings)
    }
  }