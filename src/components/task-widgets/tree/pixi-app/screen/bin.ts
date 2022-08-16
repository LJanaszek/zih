import * as PIXI from 'pixi.js';

export default class Bin extends PIXI.Container {
    public id: string = ''

    private gfx = new PIXI.Graphics();

    constructor() {
        super();

        this.gfx.beginFill(0xffff00, .5);
        this.gfx.drawRoundedRect(0,0,400, 200, 20);

        this.addChild(this.gfx);
    }

    markInvalid() {
        this.gfx.clear();
        this.gfx.beginFill(0xff0000, .5);
        this.gfx.drawRoundedRect(0,0,400, 200, 20);

        setTimeout(() => {
            this.gfx.clear();
            this.gfx.beginFill(0xffff00, .5);
            this.gfx.drawRoundedRect(0,0,400, 200, 20);
        }, 1000);
    }

    containsPoint(point: PIXI.IPointData) {
        return this.gfx.containsPoint(point)
    }
}
