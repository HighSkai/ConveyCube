const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const furnace = new Furnace(100, 100);
const conveyor = new Conveyor(200, 200, 100, 20);
const dropper = new Dropper(300, 300);

furnace.connectOutput(conveyor);
conveyor.connectInput(furnace);
conveyor.connectOutput(furnace);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    furnace.draw(context);
    conveyor.draw(context);
    dropper.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();