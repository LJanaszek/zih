import * as PIXI from 'pixi.js';
import { BirdTaskState } from '../..';
import { APP_HEIGHT, APP_WIDTH, IScreen } from "../app";
import { SCREEN } from '../data';
import Bird from './bird';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    findedBirds: string[] = [];

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.sortableChildren = true;

        this.initBackground();

        SCREEN.ITEMS.forEach((item) => {
            const bird = new Bird(item.id, item.sprite);

            bird.position.set(item.position.x, item.position.y);

            bird.on('bird-clicked', () => {
                this.findedBirds.push(bird.id);
                bird.hide();
                this.sendInfo();
            });

            this.addChild(bird);
        })
    }

    private sendInfo() {
        this.emit('update-game-state', {
            birdCount: SCREEN.ITEMS.length,
            findedBirdCount: this.findedBirds.length
        } as BirdTaskState)
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
