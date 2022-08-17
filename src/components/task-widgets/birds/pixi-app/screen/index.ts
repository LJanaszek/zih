import * as PIXI from 'pixi.js';
import { APP_HEIGHT, APP_WIDTH, IScreen } from "../app";
import { SCREEN } from '../data';
import Bird from './bird';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.sortableChildren = true;

        this.initBackground();

        SCREEN.ITEMS.forEach((item) => {
            const bird = new Bird(item.sprite);

            bird.position.set(item.position.x, item.position.y);

            this.addChild(bird);
        })
    }

    private initBackground() {
        const bg = PIXI.Sprite.from('ulica');

        this.addChild(bg);
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
