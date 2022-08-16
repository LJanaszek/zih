import * as PIXI from 'pixi.js';

export default class Bin extends PIXI.Container {
    public id: string = ''

    private boxWidth: number = 400;
    private boxHeight: number = 200;

    private gfx = new PIXI.Graphics();

    constructor() {
        super();

        this.gfx.beginFill(0xffff00, .5);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, 20);

        this.addChild(this.gfx);
    }

    markInvalid() {
        this.gfx.clear();
        this.gfx.beginFill(0xff0000, .5);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, 20);

        setTimeout(() => {
            this.gfx.clear();
            this.gfx.beginFill(0xffff00, .5);
            this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, 20);
        }, 1000);
    }

    setSize(width: number, height: number) {
        this.boxWidth = width;
        this.boxHeight = height;

        this.gfx.clear();
        this.gfx.beginFill(0xffff00, .5);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, 20);
    }

    containsPoint(point: PIXI.IPointData) {
        return this.gfx.containsPoint(point)
    }
}
