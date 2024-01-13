class Conveyor extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.inputFurnace = null;
        this.outputFurnace = null;
    }

    connectInput(furnace) {
        this.inputFurnace = furnace;
        furnace.connectOutput(this);
    }

    connectOutput(furnace) {
        this.outputFurnace = furnace;
        furnace.connectInput(this);
    }

    draw(context) {
        super.draw(context);

        context.fillStyle = '#0f0';
        context.fillRect(this.x, this.y, 10, 10);

        if (this.inputFurnace) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.moveTo(this.x + this.width / 2, this.y + this.height / 2);
            context.lineTo(this.inputFurnace.x + this.inputFurnace.width / 2, this.inputFurnace.y + this.inputFurnace.height + 10);
            context.stroke();
        }

        if (this.outputFurnace) {
            context.strokeStyle = '#000';
            context.beginPath();
            context.moveTo(this.x + this.width / 2, this.y + this.height / 2);
            context.lineTo(this.outputFurnace.x + this.outputFurnace.width / 2, this.outputFurnace.y - 10);
            context.stroke();
        }
    }
}