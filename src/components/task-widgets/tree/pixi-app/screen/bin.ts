import * as PIXI from 'pixi.js';

const BORDER_RADIUS = 50;

export default class Bin extends PIXI.Container {
    public id: string = ''

    private boxWidth: number = 400;
    private boxHeight: number = 200;

    private gfx = new PIXI.Graphics();

    private error = new PIXI.Container();
    header: PIXI.Text;
    errorGfx: PIXI.Graphics;
    errorX: PIXI.Sprite;

    constructor(headerText: string, errorLayer: PIXI.Container) {
        super();
        this.addChild(this.gfx);


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

        this.errorX = PIXI.Sprite.from('x');
        this.errorX.anchor.set(.5);

        this.errorGfx = new PIXI.Graphics();

        this.error.addChild(this.errorGfx);
        this.error.addChild(this.errorX);

        errorLayer.addChild(this.error);

        this.drawNormal();
    }

    markInvalid() {
        this.drawError();

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
        this.error.visible = false;

        this.gfx.clear();
        this.gfx.beginFill(0xffffff, .8);
        this.gfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, BORDER_RADIUS);
    }

    private drawError() {
        this.error.position.set(this.position.x, this.position.y);

        this.errorGfx.clear();
        this.errorGfx.beginFill(0xffffff, .8);
        this.errorGfx.drawRoundedRect(0, 0, this.boxWidth, this.boxHeight, BORDER_RADIUS);

        this.errorX.position.set(this.boxWidth/2, this.boxHeight/2);

        this.error.visible = true;
    }
}
