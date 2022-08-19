import * as PIXI from 'pixi.js';
import { IScreen } from "../app";
import { MAP } from '../data';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    findedBirds: string[] = [];

    constructor(private app: PIXI.Application) {
        super();

        this.sortableChildren = true;

        this.initMap();


    }

    private initMap() {
        const bg = PIXI.Sprite.from('map');

        this.addChild(bg);

        MAP.POINTS.forEach((p) => {
            const point = PIXI.Sprite.from('pinezka');

            point.position.set(p.position.x, p.position.y);

            this.addChild(point);
        });
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
