import * as PIXI from 'pixi.js';

const BORDER_RADIUS = 50;

export default class Bin extends PIXI.Container {
    public id: string = ''

    private boxWidth: number = 400;
    private boxHeight: number = 200;

    private gfx = new PIXI.Graphics();
    header: PIXI.Text;

    constructor(headerText: string) {
        super();
        this.addChild(this.gfx);

        this.drawNormal();

        this.header = new PIXI.Text(headerText.toUpperCase());
        this.header.style.fill = 0xda783c;
        this.header.style.wordWrap = true;
        this.header.style.wordWrapWidth = this.boxWidth * .9;
        this.header.style.align = 'center';
        this.header.style.fontSize = '18px';
        this.header.style.fontFamily = 'Gothic'
        this.header.anchor.set(.5, 0);
        this.header.position.set(this.boxWidth / 2, 10);

        this.addChild(this.header);
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

        this.header.style.wordWrapWidth = this.boxWidth * .9;
        this.header.position.set(this.boxWidth / 2, 15);

        this.drawNormal();
    }

    containsPoint(point: PIXI.IPointData) {
        return this.gfx.containsPoint(point)
    }

    private drawNormal() {
        this.gfx.clear();
        this.gfx.beginFill(0xffffff, .8);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, BORDER_RADIUS);
    }

    private drawError() {

    }
}
