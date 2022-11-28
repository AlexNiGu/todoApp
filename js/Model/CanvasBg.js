
export class CanvasBg {

    #canvasbg = document.getElementById('myCanvas');
    #ctx = this.#canvasbg.getContext('2d');
    #gradient = this.#ctx.createRadialGradient(60,60,0,60,60,60);
    #positionX = 100;
    #positionY = 75;

    constructor() {
        this.#animate();
        this.#canvasbg.width = innerWidth;
        this.#canvasbg.heigth = innerHeight;

        this.#gradient.addColorStop(0, 'rgba(61,102,197,0.7)');
        this.#gradient.addColorStop(1, 'rgba(62,203,197,0)');
    }

    #draw() {

        this.#ctx.beginPath();
        this.#ctx.arc(this.#positionX, this.#positionY, 50, 0, 2 * Math.PI);
        this.#ctx.stroke();

        this.#ctx.beginPath();
        this.#ctx.arc(this.#positionX + 100, this.#positionY + 100, 50, 0, 2 * Math.PI);
        this.#ctx.stroke();

        // draw shape
        this.#ctx.fillStyle = radgrad;
        this.#ctx.fillRect(0,0,150,150);
    }

    #update() {
        this.#ctx.clearRect(0,0, this.#canvasbg.width, this.#canvasbg.heigth);
        this.#positionX += 1;
        // this.#positionY += 1;
    }

    #animate() {
        this.#update();
        this.#draw();
        requestAnimationFrame(this.#animate);
    }
}