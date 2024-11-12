class Floating extends Phaser.Scene {
    constructor() {
      super("FloatScene");
    }
    create() {
      this.rect = this.add.rectangle(width / 2, height / 2, 400, 400, 0xff0000);
      this.physics.add.existing(this.rect);
      this.rect.body.setBounce(1);
      this.rect.body.setCollideWorldBounds(true);
      this.rect.body.setVelocity(100, 100);
  
      this.rectGroup = this.add.group({
        runChildUpdate: true,
      });
      this.rectGroup.add(this.rect);
      this.makeItClick(this.rect)
      this.physics.add.collider(
        this.rectGroup,
        this.rectGroup,
        (rect1, rect2) => {
          if (rect1.width == rect2.width) {
            const x = (rect1.x + rect2.x)/2
            const y = (rect1.y + rect2.y)/2
            const width = rect1.width * 1.5
            const height = rect1.height*1.5
            const color = rect1.fillColor
            const velocityx = rect1.body.velocity.x * 1/1.05
            const velocityy = rect1.body.velocity.y * 1/1.05
            rect1.destroy();
            rect2.destroy();
            const rect = this.add.rectangle(x, y, width, height, color + (30 << 16) - 30)
            this.physics.add.existing(rect)
            rect.body.setVelocity(velocityx, velocityy)
            rect.body.setCollideWorldBounds(true)
            rect.body.setBounce(1)
            this.rectGroup.add(rect)
            this.makeItClick(rect)
          }
        }
      )
    }
    update() {
        
    }
    
    makeItClick(gameObject){
        const DotheThings = () => {
            const x = gameObject.x
            const y = gameObject.y
            const width = gameObject.width/1.5
            const height = gameObject.height/1.5
            const color = gameObject.fillColor
            const blue = color & 0x0000ff
            const red = color & 0xff0000
            const green = color & 0x00ff00
            const velocityx = gameObject.body.velocity.x
            const velocityy = gameObject.body.velocity.y
            if(width < 30){
                destroyRect(gameObject)
                if(this.rectGroup.getChildren().length == 0){
                    this.scene.start("gameoverScene")
                }
            }
            else{
            createRect(x + width , y + Math.random() * height, width, height, color - (30 << 16) + 30, velocityx * 1.05, velocityy * 1.05)
            createRect(x - width , y - Math.random() * height, width, height , color - (30 << 16) + 30, velocityx * -1.05, velocityy * 1.05)
            destroyRect(gameObject)
            }
        };
        const createRect = (x, y, width, height, color, velocityx, velocityy) => {
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