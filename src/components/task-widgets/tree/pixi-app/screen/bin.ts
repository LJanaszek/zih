import * as PIXI from 'pixi.js';

const BORDER_RADIUS = 50;

export default class Bin extends PIXI.Container {
    public id: string = ''

    private boxWidth: number = 400;
    private boxHeight: number = 200;

    private gfx = new PIXI.Graphics();

    constructor() {
        super();
        this.addChild(this.gfx);

        this.drawNormal();

    }

    markInvalid() {
        this.gfx.clear();
        this.gfx.beginFill(0xff0000, .5);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, BORDER_RADIUS);

        setTimeout(() => {
            this.drawNormal();
        }, 1000);
    }

    setSize(width: number, height: number) {
        this.boxWidth = width;
        this.boxHeight = height;

        this.drawNormal();
    }

    containsPoint(point: PIXI.IPointData) {
        return this.gfx.containsPoint(point)
    }

    private drawNormal() {
        this.gfx.clear();
        this.gfx.beginFill(0xffffff, .5);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, BORDER_RADIUS);
    }

    private drawError() {

    }
}
