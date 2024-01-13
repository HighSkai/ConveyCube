class Dropper extends GameObject {
    constructor(x, y) {
        super(x, y, 50, 50);
    }

    draw(context) {
        super.draw(context);

        context.fillStyle = '#00f';
        context.fillRect(this.x, this.y, 10, 10);
    }
}