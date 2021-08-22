class Flower {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vs = Math.random() * 0.3 + 0.2;
    this.maxFlowerSize = this.size + Math.random() * 100;
    this.image = new Image();
    this.image.src = "../flowers.png";
    this.frameSize = 100;
    this.frameY = Math.floor(Math.random() * 3);
    this.frameX = Math.floor(Math.random() * 3);
    this.willFlower = this.size > 11.5 ? true : false;
  }
  grow() {
    if (this.size < this.maxFlowerSize && this.willFlower) {
      this.size += 0.3;
      ctx.drawImage(
        this.image,
        this.frameX * this.frameSize,
        this.frameY * this.frameSize,
        this.frameSize,
        this.frameSize,
        this.x - this.size / 2,
        this.y - this.size / 2,
        this.size,
        this.size
      );
      requestAnimationFrame(this.grow.bind(this));
    }
  }
}
