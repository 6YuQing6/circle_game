class Floating extends Phaser.Scene {
  constructor() {
    super("FloatScene");
  }
  preload() {
    this.colors = [0xff0000];
  }
  create() {
    this.circle = this.add.circle(410, 410, 256, 0xff0000);
    this.physics.add.existing(this.circle);
    this.circle.body.setBounce(1);
    this.circle.body.setCollideWorldBounds(true);
    this.circle.body.setVelocity(100, 100);
    this.circleGroup = this.add.group({
      runChildUpdate: true,
    });

    this.circleGroup.add(this.circle);

    function calculateSpeed(size) {
      if (size > 64) {
        return size / 2;
      } else {
        return size * 6;
      }
    }
    this.createCircles = (positionX, positionY, size, color) => {
      for (let i = 0; i < 2; i++) {
        let temp = this.add.circle(positionX, positionY, size / 2, color);
        this.physics.add.existing(temp);
        temp.body.setBounce(1);
        temp.body.setCollideWorldBounds(true);
        temp.body.setVelocity(calculateSpeed(size));
        this.circleGroup.add(temp);
      }
    };
    this.createCircles(100, 100, 100, 0xff0000);

    this.physics.add.collider(
      this.circleGroup,
      this.circleGroup,
      (circle1, circle2) => {
        if (circle1.radius == circle2.radius) {
          circle1.destroy();
          circle2.destroy();
          // createCircles(circle1.X, circle1.Y, circle1.size * 2, color)
        }
      }
    );
  }

  update() {}
}
