import * as PIXI from 'pixi.js';

export default class Bird extends PIXI.Container {
    events = new PIXI.utils.EventEmitter();
    constructor(public id: string, spriteId: string) {
        super()
        
        // const sprite = PIXI.Sprite.from(spriteId);
        // sprite.anchor.set(.5);

        // this.addChild(sprite);

        const hitArea = new PIXI.Rectangle(-20, -20, 40, 40);
        this.hitArea = hitArea;

        const gfx = new PIXI.Graphics();
        gfx.visible  = false;
        gfx.lineStyle(2, 0xda783c, 1);
            gfx.drawShape(hitArea);
            this.addChild(gfx);

        this.interactive = true;
        this.on('pointerdown', () => {
            this.emit('bird-clicked');
            gfx.visible = true
        })
    }

    hide() {
        this.visible = false;
    }
}
