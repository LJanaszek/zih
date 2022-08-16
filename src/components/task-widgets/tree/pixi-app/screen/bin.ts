import * as PIXI from 'pixi.js';

export default class Bin extends PIXI.Container {
    public id: string = ''

    constructor() {
        super();

        const gfx = new PIXI.Graphics();

        gfx.beginFill(0xffff00, .5);
        gfx.drawRoundedRect(0,0,400, 200, 20);

        this.addChild(gfx);
    }
}
