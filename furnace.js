class Furnace extends GameObject {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.inputConveyor = null;
        this.outputConveyor = null;
    }

    connectInput(conveyor) {
        this.inputConveyor = conveyor;
    }

    connectOutput(conveyor) {
        this.outputConveyor = conveyor;
    }

    draw(context) {
        super.draw(context);

        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, 10, 10);

        if (this.inputConveyor) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.moveTo(this.x + this.width / 2, this.y + this.height / 2);
            context.lineTo(this.inputConveyor.x + this.inputConveyor.width / 2, this.inputConveyor.y - 10);
            context.stroke();
        }

        if (this.outputConveyor) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.moveTo(this.x + this.width / 2, this.y + this.height / 2);
            context.lineTo(this.outputConveyor.x + this.outputConveyor.width / 2, this.outputConveyor.y + this.outputConveyor.height + 10);
            context.stroke();
        }
    }
}