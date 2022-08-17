import * as PIXI from 'pixi.js';

export default class Bird extends PIXI.Container {
    constructor(spriteId: string) {
        super()

        const sprite = PIXI.Sprite.from(spriteId);
        sprite.anchor.set(.5);

        this.addChild(sprite);

        this.hitArea = new PIXI.Rectangle(-20, -20, 40, 40);

        this.interactive = true;
    }
}
