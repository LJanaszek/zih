import * as PIXI from 'pixi.js';
import { APP_HEIGHT, APP_WIDTH, IScreen } from "../app";
import { SCREEN } from '../data';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.sortableChildren = true;

        this.initBackground();
    }

    private initBackground() {
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
